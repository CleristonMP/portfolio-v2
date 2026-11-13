"""Validate authored PDF text, public links, embedded fonts and clean structure.

Run with the same bundled Python runtime as generate-resumes.py.
Visual inspection of every rendered page remains a separate required check.
"""

import hashlib
import json
import re
from pathlib import Path

import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
CONTENT = json.loads((ROOT / 'scripts/resume-content.json').read_text(encoding='utf-8'))
TEMP = ROOT / '.m2-review/m4-03/resumes'


def normalize(text):
    return ' '.join(text.split())


def verify():
    TEMP.mkdir(parents=True, exist_ok=True)
    results = []
    for language, suffix in [('pt', 'pt-br'), ('en', 'en')]:
        source = CONTENT[language]
        path = ROOT / f'public/assets/documents/cleriston-pereira-{suffix}.pdf'
        reader = PdfReader(path)
        assert len(reader.pages) == 2
        assert set(reader.metadata) == {'/Title'}
        assert reader.trailer['/Root']['/Lang'] == ('pt-BR' if language == 'pt' else 'en')
        assert not reader.attachments
        assert not reader.get_fields()
        catalog = reader.trailer['/Root']
        assert not any(key in catalog for key in ['/OpenAction', '/AA', '/Names', '/Metadata', '/AcroForm'])
        links = []
        for page in reader.pages:
            assert not any(key in page for key in ['/AA', '/Metadata'])
            for font_ref in page['/Resources']['/Font'].values():
                font = font_ref.get_object()
                descriptor = font['/FontDescriptor'].get_object()
                assert '/FontFile2' in descriptor or '/FontFile3' in descriptor
                assert '/ToUnicode' in font
            for ref in page.get('/Annots', []):
                annotation = ref.get_object()
                assert annotation['/Subtype'] == '/Link'
                assert set(annotation['/A']) == {'/S', '/Type', '/URI'}
                assert annotation['/A']['/S'] == '/URI'
                links.append(annotation['/A']['/URI'])
                assert not any(key in annotation for key in ['/Contents', '/T', '/AA'])
        assert links == [contact['url'] for contact in CONTENT['contacts']]
        body = []
        with pdfplumber.open(path) as pdf:
            for page in pdf.pages:
                # Footer is intentionally repeated; body must match approved text exactly.
                body.append(page.crop((0, 35, page.width, page.height - 40)).extract_text())
                assert all(40 <= char['x0'] < char['x1'] <= page.width - 40
                           for char in page.chars)
        expected = ['Cleriston Pereira', source['role']]
        expected.extend(f'{contact["label"]}: {contact["url"]}' for contact in CONTENT['contacts'])
        expected.extend([source['profileHeading'], *source['profile'], source['skillsHeading'],
                         source['skills'], source['projectsHeading']])
        for project in source['projects']:
            expected.extend([project['title'], *project['paragraphs']])
        expected.extend([source['coursesHeading'], *CONTENT['courses']])
        extracted = '\n'.join(body)
        assert normalize(extracted) == normalize('\n'.join(expected)), 'Approved text mismatch'
        assert not re.search(r'[\w.+-]+@[\w.-]+\.[a-z]{2,}', extracted, re.I)
        assert not re.search(r'\b\d{3}\.\d{3}\.\d{3}-\d{2}\b', extracted)
        (TEMP / f'extracted-{suffix}.txt').write_text(extracted, encoding='utf-8')
        results.append({'path': str(path.relative_to(ROOT)), 'pages': 2,
                        'bytes': path.stat().st_size,
                        'sha256': hashlib.sha256(path.read_bytes()).hexdigest(),
                        'links': links, 'exact_approved_text': True,
                        'all_fonts_embedded': True, 'metadata_keys': list(reader.metadata)})
    (TEMP / 'pdf-validation.json').write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(results, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    verify()

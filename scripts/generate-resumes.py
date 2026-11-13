"""Generate the approved public resumes from clean sources, never the old PDF.

Requires ReportLab and pypdf (available in the bundled document runtime).
No project/runtime dependency or remote resource is installed or fetched.
"""

import json
from functools import partial
from pathlib import Path
from xml.sax.saxutils import escape

import reportlab
from pypdf import PdfReader, PdfWriter
from pypdf.generic import ContentStream, NameObject, TextStringObject
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate

ROOT = Path(__file__).resolve().parents[1]
CONTENT = json.loads((ROOT / 'scripts/resume-content.json').read_text(encoding='utf-8'))
OUTPUT = ROOT / 'public/assets/documents'
TEMP = ROOT / '.m2-review/m4-03/resumes'
FONT_DIR = Path(reportlab.__file__).parent / 'fonts'


def generate():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    TEMP.mkdir(parents=True, exist_ok=True)
    for name, filename in [('Resume', 'Vera.ttf'), ('ResumeBold', 'VeraBd.ttf')]:
        pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))
    pdfmetrics.registerFontFamily('Resume', normal='Resume', bold='ResumeBold')
    styles = {
        'body': ParagraphStyle('body', fontName='Resume', fontSize=10.3,
                               leading=15, spaceAfter=9, textColor=colors.HexColor('#22262f')),
        'name': ParagraphStyle('name', fontName='ResumeBold', fontSize=25,
                               leading=31, spaceAfter=6),
        'role': ParagraphStyle('role', fontName='Resume', fontSize=12,
                               leading=18, spaceAfter=12),
        'section': ParagraphStyle('section', fontName='ResumeBold', fontSize=13,
                                  leading=19, spaceBefore=12, spaceAfter=9,
                                  keepWithNext=True, textColor=colors.HexColor('#174b61')),
        'project': ParagraphStyle('project', fontName='ResumeBold', fontSize=10.5,
                                  leading=16, spaceBefore=7, spaceAfter=7, keepWithNext=True),
    }

    def paragraph(value, style='body'):
        return Paragraph(escape(value), styles[style])

    for language, suffix in [('pt', 'pt-br'), ('en', 'en')]:
        text = CONTENT[language]
        story = [paragraph('Cleriston Pereira', 'name'), paragraph(text['role'], 'role')]
        for contact in CONTENT['contacts']:
            url = escape(contact['url'])
            story.append(Paragraph(f'{contact["label"]}: <link href="{url}" color="#174b61">{url}</link>', styles['body']))
        story.append(paragraph(text['profileHeading'], 'section'))
        story.extend(paragraph(value) for value in text['profile'])
        story.extend([paragraph(text['skillsHeading'], 'section'), paragraph(text['skills'])])
        story.append(paragraph(text['projectsHeading'], 'section'))
        for index, project in enumerate(text['projects']):
            if index == 1:
                story.append(PageBreak())
            story.append(paragraph(project['title'], 'project'))
            story.extend(paragraph(value) for value in project['paragraphs'])
        story.append(paragraph(text['coursesHeading'], 'section'))
        story.extend(paragraph(value) for value in CONTENT['courses'])

        def page_frame(canvas, document):
            width, height = A4
            canvas.setStrokeColor(colors.HexColor('#69daff'))
            canvas.setLineWidth(2)
            canvas.line(44, height - 29, width - 44, height - 29)
            canvas.setFont('Resume', 8)
            canvas.setFillColor(colors.HexColor('#555b65'))
            canvas.drawString(44, 25, 'Cleriston Pereira')
            canvas.drawRightString(width - 44, 25, str(document.page))

        intermediate = TEMP / f'generated-{suffix}.pdf'
        document = SimpleDocTemplate(str(intermediate), pagesize=A4,
                                     leftMargin=44, rightMargin=44,
                                     topMargin=43, bottomMargin=44)
        document.build(story, onFirstPage=page_frame, onLaterPages=page_frame,
                       canvasmaker=partial(Canvas, initialFontName='Resume'))
        reader = PdfReader(intermediate)
        writer = PdfWriter()
        writer.append_pages_from_reader(reader)
        # ReportLab adds a default Helvetica selection without drawing text.
        # Replace it with the embedded regular font and remove that unused resource.
        font_replacements = {}
        for page in writer.pages:
            fonts = page['/Resources']['/Font']
            embedded = next(key for key, value in fonts.items()
                            if '/FontDescriptor' in value.get_object())
            unembedded = [key for key, value in fonts.items()
                          if '/FontDescriptor' not in value.get_object()]
            font_replacements.update({key: embedded for key in unembedded})
        for page in writer.pages:
            content = ContentStream(page.get_contents(), writer)
            for operands, operator in content.operations:
                if operator == b'Tf' and operands[0] in font_replacements:
                    operands[0] = NameObject(font_replacements[operands[0]])
            page.replace_contents(content)
        for page in writer.pages:
            fonts = page['/Resources']['/Font']
            for key in font_replacements:
                fonts.pop(NameObject(key), None)
        # Rebuild only clean page content and the two newly authored URI links.
        writer.metadata = None
        writer.add_metadata({'/Title': f'Cleriston Pereira - {text["role"]}'})
        writer.root_object[NameObject('/Lang')] = TextStringObject('pt-BR' if language == 'pt' else 'en')
        destination = OUTPUT / f'cleriston-pereira-{suffix}.pdf'
        with destination.open('wb') as stream:
            writer.write(stream)
        print(f'{destination.relative_to(ROOT)}: {len(reader.pages)} pages, {destination.stat().st_size} bytes')


if __name__ == '__main__':
    generate()

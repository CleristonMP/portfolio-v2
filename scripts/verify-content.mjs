import fs from 'node:fs';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
import { argv, stdout } from 'node:process';
import { execFileSync } from 'node:child_process';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  loadProjectModule as load,
  moduleUrl,
} from './lib/load-project-module.mjs';

const { projects, reportsRegistryCase } = await load('src/content/projects.ts');
const { media } = await load('src/content/media.ts');
const { courses } = await load('src/content/courses.ts');
const { skills } = await load('src/content/skills.ts');
const { profile } = await load('src/content/profile.ts');
const { sectionIds, navigation } = await load('src/content/navigation.ts');
const { translations } = await load('src/i18n/translations.ts');
const { getVerifiedUrl, getProjectUrl } = await load('src/content/links.ts');

for (const [language, suffix] of [
  ['pt', 'pt-br'],
  ['en', 'en'],
]) {
  const resume = profile.resume?.[language];
  assert.equal(resume?.src, `assets/documents/cleriston-pereira-${suffix}.pdf`);
  assert.equal(resume.language, language === 'pt' ? 'pt-BR' : 'en');
  const bytes = fs.readFileSync(path.join('public', resume.src));
  assert.equal(bytes.subarray(0, 5).toString(), '%PDF-');
}
assert.deepEqual(fs.readdirSync('public/assets/documents').sort(), [
  'cleriston-pereira-en.pdf',
  'cleriston-pereira-pt-br.pdf',
]);

function assertIds(actual, expected) {
  assert.deepEqual(actual, expected);
  assert.equal(new Set(actual).size, actual.length);
  for (const id of actual) assert.match(id, /^[a-z][a-z0-9-]*$/);
}
assertIds(
  projects.map((project) => project.slug),
  ['reports-registry', 'audience-counter', 'webmatriculas', 'dscommerce'],
);
assertIds(
  courses.map((course) => course.id),
  [
    'formacao-desenvolvedor-moderno',
    'bootcamp-react',
    'bootcamp-spring',
    'desenvolvimento-react-native',
  ],
);
assertIds(
  skills.map((skill) => skill.id),
  [
    'java-spring',
    'react-typescript',
    'android-mobile',
    'javascript-node',
    'sql-data',
    'software-architecture',
  ],
);
assertIds(
  profile.contacts.map((contact) => contact.id),
  ['github', 'email', 'linkedin', 'resume'],
);
assertIds([profile.id], ['cleriston-pereira']);
assertIds(sectionIds, [
  'home',
  'projects',
  'skills',
  'about',
  'learning',
  'contact',
]);
assert.deepEqual(
  navigation.map((item) => item.id),
  sectionIds.slice(1),
);
for (const item of navigation) {
  assert(translations.pt.navigation[item.labelIndex]);
  assert(translations.en.navigation[item.labelIndex]);
}
assert.deepEqual(profile.availability, {
  pt: 'Disponível para freelance; trabalho remoto somente em meio período.',
  en: 'Available for freelance projects; remote work on a part-time basis only.',
});
assert.equal(profile.experienceYears, undefined);
assert.deepEqual(
  projects.map((project) => project.stack),
  [
    ['Java', 'Spring Boot', 'React', 'JavaScript', 'Apache POI', 'Heroku'],
    ['Kotlin'],
    ['Java', 'Spring Boot', 'React', 'JavaScript', 'TypeScript', 'PostgreSQL'],
    ['Java', 'Spring Boot', 'React', 'JavaScript', 'TypeScript', 'PostgreSQL'],
  ],
);
for (const project of projects) {
  assert.equal(project.editorial.state, 'pending');
  assert(!project.editorial.pendingFields.includes('mediaVersion'));
  assert(project.editorial.pendingFields.includes('finalEditorialReview'));
}
assert.deepEqual(
  courses.map((course) => course.completedYear),
  [2023, 2022, 2021, 2023],
);
for (const course of courses) {
  assert.equal(course.editorial.state, 'pending');
  assert(course.editorial.pendingFields.includes('credential'));
  assert.equal(getVerifiedUrl(course.credential), undefined);
}

// Exact reviewed raster bytes: changing a hash requires a new media-version review.
const acceptedMediaHashes = {
  'assets/media/reports-registry/rr-search.webp':
    '45f49435c739313a194eee70cb1cf8f98aa1258c7844002d8cf232f9ae6601c2',
  'assets/media/reports-registry/rr-import.webp':
    'd3809295dfc387004f8bc45c7694640b3c3fa05b9f24c42787fa1d4fece18e3a',
  'assets/media/audience-counter/ac-landscape.webp':
    '33f2349ad13f2b4200c878f8c7e4686494ce43d261f3844d87bb178f9aa3b202',
  'assets/media/webmatriculas/wm-classes.webp':
    'aa0d40054ab6f08cdc0046e8ab483e3d415b14ae109a0e2e244a5ebaf58f3293',
  'assets/media/dscommerce/ds-catalog.webp':
    '2693887e33dfc3ce56537f6509b6228f992b9cb82adc7f9dbc3e6782901da5c7',
  'assets/media/certificates/cert-modern.webp':
    'b31d84cb2ebd9cc229176f435b42fe9cd982616b3071147ce49162c177eb0ba4',
  'assets/media/certificates/cert-react.webp':
    '9ee404f262032d38b9edc11a31d759eaa5a4378ef87e3f53bf35fdae28b1f362',
  'assets/media/certificates/cert-spring.webp':
    '28e4d933b7076a250c66f54d7efee48e4676dd199b50dfcd58ff5a1a6f77994a',
  'assets/media/certificates/cert-native.webp':
    '6654381a23441ecb7cd7341da4f83cc07e1c6598acea2b03c4a100bbb827f466',
};
const publicMedia = Object.values(media);
assert.equal(publicMedia.length, 9);
assert.equal(new Set(publicMedia.map((image) => image.src)).size, 9);
for (const image of publicMedia) {
  assert.match(image.src, /^assets\/media\/[a-z-]+\/[a-z-]+\.webp$/);
  const bytes = fs.readFileSync(path.join('public', image.src));
  assert.equal(
    createHash('sha256').update(bytes).digest('hex'),
    acceptedMediaHashes[image.src],
  );
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  const chunks = [];
  let dimensions;
  for (let offset = 12; offset < bytes.length;) {
    const tag = bytes.toString('ascii', offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    const payload = offset + 8;
    chunks.push(tag);
    if (tag === 'VP8L') {
      assert.equal(bytes[payload], 0x2f);
      const packed = bytes.readUInt32LE(payload + 1);
      dimensions = [(packed & 0x3fff) + 1, ((packed >>> 14) & 0x3fff) + 1];
    } else if (tag === 'VP8 ') {
      assert.equal(bytes.toString('hex', payload + 3, payload + 6), '9d012a');
      dimensions = [
        bytes.readUInt16LE(payload + 6) & 0x3fff,
        bytes.readUInt16LE(payload + 8) & 0x3fff,
      ];
    }
    offset += 8 + size + (size % 2);
  }
  assert(
    chunks.length === 1 && ['VP8L', 'VP8 '].includes(chunks[0]),
    'Unexpected raster metadata/frame chunks',
  );
  assert.deepEqual(dimensions, [image.width, image.height]);
  assert(image.alt.pt.trim() && image.alt.en.trim());
}
function mediaFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory()
      ? mediaFiles(filename)
      : [filename.replaceAll('\\', '/')];
  });
}
assert.deepEqual(
  mediaFiles('public/assets/media').sort(),
  Object.keys(acceptedMediaHashes)
    .map((filename) => 'public/' + filename)
    .sort(),
);
const originalImageLinks = [
  reportsRegistryCase.image,
  ...courses.map((course) => course.image),
].map((image) => image.src);

const confirmed = (url) => ({ url, verification: 'confirmed' });
for (const url of [
  undefined,
  '',
  '#',
  '/relative',
  'http://example.com',
  'javascript:alert(1)',
  'data:text/html,x',
  'mailto:unknown@example.com',
  'https://user:secret@example.com',
  ' https://example.com',
  'https://example.com/\npath',
  'invalid',
]) {
  assert.equal(getVerifiedUrl(confirmed(url)), undefined);
}
assert.equal(getVerifiedUrl(), undefined);
assert.equal(
  getVerifiedUrl({ verification: 'pending', url: 'https://example.com' }),
  undefined,
);
assert.equal(
  getVerifiedUrl(confirmed('https://example.com/path')),
  'https://example.com/path',
);
const sample = projects[0];
const withLinks = {
  ...sample,
  links: {
    repository: confirmed('https://example.com/repo'),
    caseStudy: confirmed('https://example.com/case'),
    store: confirmed('https://example.com/store'),
  },
};
assert.equal(getProjectUrl(withLinks, 'repository'), undefined);
assert.equal(
  getProjectUrl({ ...withLinks, codeVisibility: 'unknown' }, 'repository'),
  undefined,
);
assert.equal(
  getProjectUrl({ ...withLinks, codeVisibility: 'public' }, 'repository'),
  'https://example.com/repo',
);
assert.equal(getProjectUrl(withLinks, 'caseStudy'), 'https://example.com/case');
assert.equal(getProjectUrl(withLinks, 'store'), undefined);
assert.equal(
  getProjectUrl({ ...withLinks, nature: 'own-product' }, 'store'),
  'https://example.com/store',
);
const approvedLinks = [
  {},
  {
    repository: 'https://github.com/CleristonMP/audience-counter',
    store:
      'https://play.google.com/store/apps/details?id=com.cmp.audiencecounter',
  },
  { repository: 'https://github.com/CleristonMP/web-matriculas-api' },
  {
    backendRepository: 'https://github.com/CleristonMP/dscommerce',
    frontendRepository: 'https://github.com/CleristonMP/dscommerce-frontend',
  },
];
for (const [index, project] of projects.entries()) {
  for (const kind of [
    'repository',
    'backendRepository',
    'frontendRepository',
    'demo',
    'store',
    'caseStudy',
  ])
    assert.equal(getProjectUrl(project, kind), approvedLinks[index][kind]);
}
const approvedDestinations = Object.values(approvedLinks).flatMap((links) =>
  Object.values(links),
);

const { default: App } = await load('src/App.tsx');
const markup = renderToStaticMarkup(createElement(App));
assert.deepEqual(
  [...markup.matchAll(/<section id="([^"]+)"/g)].map((match) => match[1]),
  sectionIds,
);
assert.equal(
  (markup.match(/class="project-card"/g) ?? []).length,
  projects.length,
);
assert.equal((markup.match(/class="course"/g) ?? []).length, courses.length);
assert.equal((markup.match(/class="skill"/g) ?? []).length, skills.length);
for (const [, href] of markup.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
  assert(
    sectionIds.some((id) => href === `#${id}`) ||
      href === 'https://github.com/CleristonMP' ||
      approvedDestinations.includes(href.replaceAll('&amp;', '&')) ||
      href === '#main-content' ||
      href === '#reports-registry-case' ||
      Object.values(profile.resume ?? {}).some(
        (resume) => resume.src === href,
      ) ||
      originalImageLinks.includes(href),
  );
}
const renderedSources = [...markup.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(
  (match) => match[1],
);
assert.deepEqual(
  renderedSources.sort(),
  publicMedia.map((image) => image.src).sort(),
);
assert(!markup.includes('raw.githubusercontent.com'));
assert(!markup.includes('lh3.googleusercontent.com'));
for (const image of publicMedia) {
  assert(markup.includes(`width="${image.width}" height="${image.height}"`));
}
assert(markup.includes('id="reports-registry-case" tabindex="-1"'));
assert(markup.includes('<main id="main-content" tabindex="-1">'));
assert(markup.indexOf('class="skip-link"') < markup.indexOf('<header'));
for (const id of sectionIds)
  assert(markup.includes(`<section id="${id}" tabindex="-1"`));
const { ContactSection } = await load('src/sections/ContactSection.tsx');
// Deliberately incomplete fixtures verify the rendered link boundary, then restore data.
const contacts = profile.contacts;
try {
  for (const link of [
    undefined,
    { verification: 'pending', url: 'https://example.com' },
    confirmed('javascript:alert(1)'),
  ]) {
    profile.contacts = [
      { id: 'github', kind: 'github', label: 'GitHub', link },
    ];
    const incomplete = renderToStaticMarkup(
      createElement(ContactSection, { language: 'pt', text: translations.pt }),
    );
    assert(!incomplete.includes('<a '));
  }
} finally {
  profile.contacts = contacts;
}
stdout.write(
  'PASS: stable/unique IDs, approved stacks/years/availability, reviewed local rasters and pending credentials/final editorial review, optional/private links, six sections and safe rendering of incomplete contacts.\n',
);

// Optional comparison with the reviewed pre-extraction commit, without checkout changes.
const baseline = argv
  .find((argument) => argument.startsWith('--baseline='))
  ?.slice('--baseline='.length);
if (baseline) {
  assert.match(baseline, /^[a-f0-9]{7,40}$/);
  const overrides = new Map(
    ['src/App.tsx', 'src/content.ts'].map((filename) => [
      path.resolve(filename),
      execFileSync('git', ['show', baseline + ':' + filename], {
        encoding: 'utf8',
      }),
    ]),
  );
  const { default: BaselineApp } = await import(
    moduleUrl('src/App.tsx', overrides, new Map())
  );
  let stackBlocks = 0;
  const baselineMarkup = renderToStaticMarkup(
    createElement(BaselineApp),
  ).replace(
    /<div class="tags"><span>React<\/span><span>Spring Boot<\/span><\/div>/g,
    (block) => (++stackBlocks <= 2 ? '<div class="tags"></div>' : block),
  );
  assert.equal(stackBlocks, 3);
  // M2-05 localizes text; M2-06 adds only shell focus targets and the skip link.
  const structure = (html) =>
    html
      .replace(/<a class="skip-link"[^>]*>[^<]*<\/a>/g, '')
      .replace(/<main id="main-content" tabindex="-1">/g, '<main>')
      .replace(/ tabindex="-1"/g, '')
      .replace(/ id="primary-navigation"/g, '')
      .replace(/ aria-expanded="false" aria-controls="primary-navigation"/g, '')
      .replace(/\b(alt|aria-label)="[^"]*"/g, '$1="localized"')
      .replace(/>[^<]*</g, '><');
  assert.equal(structure(markup), structure(baselineMarkup));
  stdout.write(
    'PASS: markup structure equals baseline apart from the two unverified project stacks; localized text/accessible names and M2-06 shell additions excluded.\n',
  );
}

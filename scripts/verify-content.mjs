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

const { projects } = await load('src/content/projects.ts');
const { courses } = await load('src/content/courses.ts');
const { skills } = await load('src/content/skills.ts');
const { profile } = await load('src/content/profile.ts');
const { sectionIds, navigation } = await load('src/content/navigation.ts');
const { translations } = await load('src/i18n/translations.ts');
const { getVerifiedUrl, getProjectUrl } = await load('src/content/links.ts');

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
assert.equal(profile.availability, undefined);
assert.equal(profile.experienceYears, undefined);
for (const project of projects.slice(0, 3))
  assert.equal(project.stack, undefined);
for (const course of courses) {
  assert.equal(course.completedYear, undefined);
  assert.equal(getVerifiedUrl(course.credential), undefined);
}

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
for (const project of projects) {
  for (const kind of ['repository', 'demo', 'store', 'caseStudy'])
    assert.equal(getProjectUrl(project, kind), undefined);
}

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
      href === 'https://github.com/CleristonMP',
  );
}
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
  'PASS: stable/unique IDs, absent editorial facts, optional/private links, six sections and safe rendering of incomplete contacts.\n',
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
  // M2-05 intentionally localizes text and accessible names; keep structural parity.
  const structure = (html) =>
    html
      .replace(/\b(alt|aria-label)="[^"]*"/g, '$1="localized"')
      .replace(/>[^<]*</g, '><');
  assert.equal(structure(markup), structure(baselineMarkup));
  stdout.write(
    'PASS: markup structure equals baseline apart from the two unverified project stacks; localized text/accessible names excluded.\n',
  );
}

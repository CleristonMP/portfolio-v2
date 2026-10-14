import assert from 'node:assert/strict';
import fs from 'node:fs';
import { stdout } from 'node:process';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadProjectModule as load } from './lib/load-project-module.mjs';

const { translations } = await load('src/i18n/translations.ts');
const {
  isLanguage,
  readLanguagePreference,
  persistLanguage,
  syncDocumentLanguage,
  LANGUAGE_STORAGE_KEY,
} = await load('src/i18n/language.ts');
const { projects } = await load('src/content/projects.ts');
const { skills } = await load('src/content/skills.ts');
const { courses } = await load('src/content/courses.ts');

function assertTranslationParity(left, right, location = 'translations') {
  assert.equal(typeof left, typeof right, location);
  if (typeof left === 'string') {
    assert(left.trim(), `${location}: empty PT`);
    assert(right.trim(), `${location}: empty EN`);
    return;
  }
  assert.deepEqual(
    Object.keys(left).sort(),
    Object.keys(right).sort(),
    location,
  );
  for (const key of Object.keys(left))
    assertTranslationParity(left[key], right[key], `${location}.${key}`);
}
assertTranslationParity(translations.pt, translations.en);
// Negative fixtures show that parity/empty checks actually reject broken translations.
assert.throws(() =>
  assertTranslationParity({ required: 'PT' }, { different: 'EN' }),
);
assert.throws(() =>
  assertTranslationParity({ required: 'PT' }, { required: ' ' }),
);
for (const project of projects)
  assertTranslationParity(project.category.pt, project.category.en);
for (const project of projects)
  assertTranslationParity(project.description.pt, project.description.en);
assert.deepEqual(
  Object.keys(translations.pt.skillLabels).sort(),
  skills.map((skill) => skill.id).sort(),
);
assert.equal(translations.pt.projectImageAlt.match(/\{project\}/g)?.length, 1);
assert.equal(translations.en.projectImageAlt.match(/\{project\}/g)?.length, 1);

for (const value of [
  null,
  undefined,
  '',
  'fr',
  'PT',
  'pt-BR',
  'en-US',
  '"en"',
  42,
  {},
]) {
  assert.equal(isLanguage(value), false);
  assert.equal(
    readLanguagePreference(() => ({ getItem: () => value })),
    'pt',
  );
}
const data = new Map();
const storage = {
  getItem: (key) => data.get(key) ?? null,
  setItem: (key, value) => data.set(key, value),
};
assert.equal(
  readLanguagePreference(() => storage),
  'pt',
);
for (const language of ['pt', 'en', 'pt']) {
  persistLanguage(language, () => storage);
  assert.equal(data.get(LANGUAGE_STORAGE_KEY), language);
  assert.equal(
    readLanguagePreference(() => storage),
    language,
  );
}
persistLanguage('invalid', () => storage);
assert.equal(data.get(LANGUAGE_STORAGE_KEY), 'pt');
assert.equal(
  readLanguagePreference(() => {
    throw Error('storage getter blocked');
  }),
  'pt',
);
assert.equal(
  readLanguagePreference(() => ({
    getItem: () => {
      throw Error('read blocked');
    },
  })),
  'pt',
);
assert.doesNotThrow(() =>
  persistLanguage('en', () => {
    throw Error('storage getter blocked');
  }),
);
assert.doesNotThrow(() =>
  persistLanguage('en', () => ({
    setItem: () => {
      throw Error('quota exceeded');
    },
  })),
);

const description = {
  value: '',
  setAttribute(name, value) {
    assert.equal(name, 'content');
    this.value = value;
  },
};
const targetDocument = {
  documentElement: { lang: '' },
  title: '',
  querySelector(selector) {
    assert.equal(selector, 'meta[name="description"]');
    return description;
  },
};
for (const language of ['pt', 'en', 'pt']) {
  syncDocumentLanguage(language, targetDocument);
  assert.equal(
    targetDocument.documentElement.lang,
    language === 'pt' ? 'pt-BR' : 'en',
  );
  assert.equal(targetDocument.title, translations[language].metadata.title);
  assert.equal(description.value, translations[language].metadata.description);
}
assert.doesNotThrow(() =>
  syncDocumentLanguage('en', { ...targetDocument, querySelector: () => null }),
);
const html = fs.readFileSync('index.html', 'utf8');
assert(html.includes('lang="pt-BR"'));
assert(html.includes(translations.pt.metadata.title.replace('&', '&amp;')));
assert(html.includes(translations.pt.metadata.description));

const { Header } = await load('src/components/layout/Header.tsx');
const { default: App } = await load('src/App.tsx');
const { Footer } = await load('src/components/layout/Footer.tsx');
const names = [
  'HeroSection',
  'ProjectsSection',
  'SkillsSection',
  'AboutSection',
  'LearningSection',
  'ContactSection',
];
for (const language of ['pt', 'en']) {
  const text = translations[language];
  const appMarkup = renderToStaticMarkup(createElement(App));
  assert(appMarkup.includes(translations.pt.accessibility.skipToContent));
  assert(text.accessibility.skipToContent.trim());
  const sections = await Promise.all(
    names.map(async (name) => (await load(`src/sections/${name}.tsx`))[name]),
  );
  const markup = sections
    .map((section) =>
      renderToStaticMarkup(createElement(section, { language, text })),
    )
    .join('');
  for (const value of [
    text.heroIntro,
    text.heroAccent,
    text.scrollHint,
    text.aboutAccent,
    text.methodLabel,
    text.methodText,
    text.conversationLabel,
    text.contactNotice,
    text.contactStatus,
    ...Object.values(text.kickers),
  ])
    assert(markup.includes(value), `Missing localized text: ${value}`);
  for (const project of projects) {
    assert(markup.includes(project.title));
    assert(
      markup.includes(
        `alt="${text.projectImageAlt.replace('{project}', project.title)}"`,
      ),
    );
  }
  for (const course of courses) {
    assert(markup.includes(course.title));
    assert(markup.includes(course.institution));
  }
  for (const label of Object.values(text.skillLabels))
    assert(markup.includes(label.replaceAll('&', '&amp;')));
  const footer = renderToStaticMarkup(createElement(Footer, { text }));
  assert(footer.includes(text.backToTop));
  for (const menuOpen of [false, true]) {
    const header = renderToStaticMarkup(
      createElement(Header, {
        language,
        text,
        menuOpen,
        onToggleLanguage() {},
        onToggleMenu() {},
        onCloseMenu() {},
      }),
    );
    for (const label of [
      text.accessibility.navigation,
      text.accessibility.changeLanguage,
      menuOpen ? text.accessibility.closeMenu : text.accessibility.openMenu,
    ])
      assert(header.includes(`aria-label="${label}"`));
    assert(header.includes(`aria-expanded="${menuOpen}"`));
    assert(header.includes('aria-controls="primary-navigation"'));
    assert(header.includes('id="primary-navigation"'));
  }
}
stdout.write(
  'PASS: PT/EN parity/nonempty, localized sections/labels/alts, official names, valid/invalid preference, storage getter/read/write failures, metadata PT/EN/PT and static fallback.\n',
);

import type { NavigationItem, SectionId } from './contracts';
export const sectionIds: readonly SectionId[] = [
  'home',
  'projects',
  'skills',
  'about',
  'learning',
  'contact',
];
export const navigation: readonly NavigationItem[] = [
  { id: 'projects', labelIndex: 0 },
  { id: 'skills', labelIndex: 1 },
  { id: 'about', labelIndex: 2 },
  { id: 'learning', labelIndex: 3 },
  { id: 'contact', labelIndex: 4 },
];

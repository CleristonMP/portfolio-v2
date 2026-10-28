import type { Course } from './contracts';
export const courses: readonly Course[] = [
  {
    title: 'Formação Desenvolvedor Moderno',
    institution: 'DevSuperior',
    id: 'formacao-desenvolvedor-moderno',
    completedYear: 2023,
    completionLabel: { pt: 'Concluída em {year}.', en: 'Completed in {year}.' },
    editorial: {
      state: 'pending',
      pendingFields: ['credential', 'mediaVersion'],
    },
  },
  {
    title: 'Bootcamp React',
    institution: 'DevSuperior',
    id: 'bootcamp-react',
    completedYear: 2022,
    completionLabel: { pt: 'Concluído em {year}.', en: 'Completed in {year}.' },
    editorial: {
      state: 'pending',
      pendingFields: ['credential', 'mediaVersion'],
    },
  },
  {
    title: 'Bootcamp Spring',
    institution: 'DevSuperior',
    id: 'bootcamp-spring',
    completedYear: 2021,
    completionLabel: { pt: 'Concluído em {year}.', en: 'Completed in {year}.' },
    editorial: {
      state: 'pending',
      pendingFields: ['credential', 'mediaVersion'],
    },
  },
  {
    title: 'Desenvolvimento com React Native',
    institution: 'Udemy',
    id: 'desenvolvimento-react-native',
    completedYear: 2023,
    completionLabel: { pt: 'Concluído em {year}.', en: 'Completed in {year}.' },
    editorial: {
      state: 'pending',
      pendingFields: ['credential', 'mediaVersion'],
    },
  },
];

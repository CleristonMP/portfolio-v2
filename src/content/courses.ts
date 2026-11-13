import { media } from './media';
import type { Course } from './contracts';
export const courses: readonly Course[] = [
  {
    title: 'Formação Desenvolvedor Moderno',
    institution: 'DevSuperior',
    id: 'formacao-desenvolvedor-moderno',
    image: media.modernCertificate,
    completedYear: 2023,
    completionLabel: { pt: 'Concluída em {year}.', en: 'Completed in {year}.' },
    editorial: {
      state: 'pending',
      pendingFields: ['credential', 'finalEditorialReview'],
    },
  },
  {
    title: 'Bootcamp React',
    institution: 'DevSuperior',
    id: 'bootcamp-react',
    image: media.reactCertificate,
    completedYear: 2022,
    completionLabel: { pt: 'Concluído em {year}.', en: 'Completed in {year}.' },
    editorial: {
      state: 'pending',
      pendingFields: ['credential', 'finalEditorialReview'],
    },
  },
  {
    title: 'Bootcamp Spring',
    institution: 'DevSuperior',
    id: 'bootcamp-spring',
    image: media.springCertificate,
    completedYear: 2021,
    completionLabel: { pt: 'Concluído em {year}.', en: 'Completed in {year}.' },
    editorial: {
      state: 'pending',
      pendingFields: ['credential', 'finalEditorialReview'],
    },
  },
  {
    title: 'Desenvolvimento com React Native',
    institution: 'Udemy',
    id: 'desenvolvimento-react-native',
    image: media.nativeCertificate,
    completedYear: 2023,
    completionLabel: { pt: 'Concluído em {year}.', en: 'Completed in {year}.' },
    editorial: {
      state: 'pending',
      pendingFields: ['credential', 'finalEditorialReview'],
    },
  },
];

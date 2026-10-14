import type { Course } from './contracts';
export const courses: readonly Course[] = [
  {
    title: 'Formação Desenvolvedor Moderno',
    institution: 'DevSuperior',
    id: 'formacao-desenvolvedor-moderno',
    editorial: {
      state: 'pending',
      pendingFields: ['officialTitle', 'completedYear', 'credential'],
    },
  },
  {
    title: 'Bootcamp React',
    institution: 'DevSuperior',
    id: 'bootcamp-react',
    editorial: {
      state: 'pending',
      pendingFields: ['officialTitle', 'completedYear', 'credential'],
    },
  },
  {
    title: 'Bootcamp Spring',
    institution: 'DevSuperior',
    id: 'bootcamp-spring',
    editorial: {
      state: 'pending',
      pendingFields: ['officialTitle', 'completedYear', 'credential'],
    },
  },
  {
    title: 'Desenvolvimento com React Native',
    institution: 'Udemy',
    id: 'desenvolvimento-react-native',
    editorial: {
      state: 'pending',
      pendingFields: ['officialTitle', 'completedYear', 'credential'],
    },
  },
];

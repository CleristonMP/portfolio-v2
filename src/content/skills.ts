import type { Skill } from './contracts';
// Existing skill labels are preserved; proficiency is still subject to editorial review.
export const skills: readonly Skill[] = [
  {
    id: 'java-spring',
    name: 'Java & Spring Boot',
    icon: 'server',
    editorial: {
      state: 'pending',
      pendingFields: ['proficiencyEvidence'],
    },
  },
  {
    id: 'react-typescript',
    name: 'React & TypeScript',
    icon: 'code',
    editorial: {
      state: 'pending',
      pendingFields: ['proficiencyEvidence'],
    },
  },
  {
    id: 'android-mobile',
    name: 'Android & Mobile',
    icon: 'smartphone',
    editorial: {
      state: 'pending',
      pendingFields: ['proficiencyEvidence'],
    },
  },
  {
    id: 'javascript-node',
    name: 'JavaScript & Node.js',
    icon: 'layers',
    editorial: {
      state: 'pending',
      pendingFields: ['proficiencyEvidence'],
    },
  },
  {
    id: 'sql-data',
    name: 'SQL & Data',
    icon: 'database',
    editorial: {
      state: 'pending',
      pendingFields: ['proficiencyEvidence'],
    },
  },
  {
    id: 'software-architecture',
    name: 'Software Architecture',
    icon: 'book',
    editorial: {
      state: 'pending',
      pendingFields: ['proficiencyEvidence'],
    },
  },
];

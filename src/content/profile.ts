import type { Profile } from './contracts';
export const profile: Profile = {
  id: 'cleriston-pereira',
  name: 'Cleriston Pereira',
  brand: { firstName: 'CLERISTON', lastName: 'PEREIRA' },
  role: 'Full Stack & Mobile Developer',
  contacts: [
    {
      id: 'github',
      kind: 'github',
      label: 'GitHub',
      link: {
        url: 'https://github.com/CleristonMP',
        verification: 'confirmed',
      },
    },
    { id: 'email', kind: 'email', label: 'Email' },
    { id: 'linkedin', kind: 'linkedin', label: 'LinkedIn' },
    { id: 'resume', kind: 'resume', label: 'Curriculum vitae' },
  ],
  editorial: {
    state: 'pending',
    pendingFields: [
      'biography',
      'availability',
      'experienceYears',
      'email',
      'linkedin',
      'resume',
    ],
  },
};

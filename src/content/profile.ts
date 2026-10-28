import type { Profile } from './contracts';
export const profile: Profile = {
  id: 'cleriston-pereira',
  name: 'Cleriston Pereira',
  brand: { firstName: 'CLERISTON', lastName: 'PEREIRA' },
  role: 'Full Stack & Mobile Developer',
  availability: {
    pt: 'Disponível para freelance; trabalho remoto somente em meio período.',
    en: 'Available for freelance projects; remote work on a part-time basis only.',
  },
  resume: {
    pt: {
      src: 'assets/documents/cleriston-pereira-pt-br.pdf',
      language: 'pt-BR',
    },
    en: { src: 'assets/documents/cleriston-pereira-en.pdf', language: 'en' },
  },
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
    pendingFields: ['email', 'linkedin', 'resumeTechnicalReview'],
  },
};

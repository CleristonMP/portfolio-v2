import { media } from './media';
import type { LocalizedText, Project } from './contracts';

// Only confirmed technologies are published; unresolved stacks stay absent.
export const projects: readonly Project[] = [
  {
    slug: 'reports-registry',
    title: 'Reports Registry',
    category: {
      pt: 'Projeto comercial',
      en: 'Commercial project',
    },
    description: {
      pt: 'Sistema desenvolvido para uma empresa de engenharia elétrica gerenciar registros de inspeções e permitir a consulta de informações de equipamentos pelos clientes.',
      en: 'Custom software for an electrical engineering business to manage inspection records and let clients access relevant equipment information.',
    },
    image: media.reportsCover,
    nature: 'commercial',
    functionalStatus: 'implemented',
    codeVisibility: 'private',
    editorial: {
      state: 'pending',
      pendingFields: ['finalEditorialReview'],
    },
    stack: [
      'Java',
      'Spring Boot',
      'React',
      'JavaScript',
      'Apache POI',
      'Heroku',
    ],
  },
  {
    slug: 'audience-counter',
    title: 'Audience-Counter',
    category: {
      pt: 'Aplicativo Android publicado',
      en: 'Published Android app',
    },
    description: {
      pt: 'Aplicativo Android para contagem de público, com modos de contagem direta e por fileiras, disponível na Google Play. Desenvolvi o aplicativo individualmente em Kotlin, com assistência parcial do Gemini. Foi uma experiência de aprendizado em desenvolvimento Android nativo.',
      en: 'An Android audience-counting app with direct and row-based counting modes, available on Google Play. I developed the app individually in Kotlin, with partial assistance from Gemini. It was a learning experience in native Android development.',
    },
    image: media.audienceCover,
    nature: 'own-product',
    functionalStatus: 'published',
    codeVisibility: 'public',
    editorial: {
      state: 'pending',
      pendingFields: ['finalEditorialReview'],
    },
    stack: ['Kotlin'],
    platforms: ['Android'],
    links: {
      repository: {
        url: 'https://github.com/CleristonMP/audience-counter',
        verification: 'confirmed',
      },
      store: {
        url: 'https://play.google.com/store/apps/details?id=com.cmp.audiencecounter',
        verification: 'confirmed',
      },
    },
  },
  {
    slug: 'webmatriculas',
    title: 'Web Matrículas',
    category: {
      pt: 'Sistema independente • não implantado',
      en: 'Independent project • not deployed',
    },
    description: {
      pt: 'Sistema de gestão de matrículas, alunos, classes e turmas escolares, desenvolvido individualmente, sem assistência de IA. Realizei a análise do sistema e elaborei diagramas UML antes da codificação. O sistema foi implementado, mas não entrou em operação na escola.',
      en: 'A school enrollment management system for students, classes and groups, developed individually without AI assistance. I analyzed the system and created UML diagrams before coding. The system was implemented but was not put into operation at the school.',
    },
    image: media.enrollmentCover,
    nature: 'independent',
    functionalStatus: 'not-deployed',
    codeVisibility: 'public',
    editorial: {
      state: 'pending',
      pendingFields: ['finalEditorialReview'],
    },
    stack: [
      'Java',
      'Spring Boot',
      'React',
      'JavaScript',
      'TypeScript',
      'PostgreSQL',
    ],
    links: {
      repository: {
        url: 'https://github.com/CleristonMP/web-matriculas-api',
        verification: 'confirmed',
      },
    },
  },
  {
    slug: 'dscommerce',
    title: 'DS Commerce',
    category: {
      pt: 'Projeto educacional',
      en: 'Educational project',
    },
    description: {
      pt: 'Projeto educacional de comércio eletrônico desenvolvido seguindo integralmente a Formação Desenvolvedor Moderno, da DevSuperior, sem adaptações próprias. A execução do projeto proporcionou aprendizado na construção de um sistema do início ao fim. Integração de pagamentos não implementada.',
      en: 'An educational e-commerce project developed by following DevSuperior’s Formação Desenvolvedor Moderno in full, without my own adaptations. Working through the project provided experience in building a system from start to finish. Payment integration was not implemented.',
    },
    image: media.commerceCover,
    nature: 'educational',
    functionalStatus: 'implemented',
    codeVisibility: 'public',
    editorial: {
      state: 'pending',
      pendingFields: ['finalEditorialReview'],
    },
    stack: [
      'Java',
      'Spring Boot',
      'React',
      'JavaScript',
      'TypeScript',
      'PostgreSQL',
    ],
    links: {
      backendRepository: {
        url: 'https://github.com/CleristonMP/dscommerce',
        verification: 'confirmed',
      },
      frontendRepository: {
        url: 'https://github.com/CleristonMP/dscommerce-frontend',
        verification: 'confirmed',
      },
    },
  },
];

// Explicit editorial grouping; both viewports consume these same records.
export const featuredProjects = projects.filter((project) =>
  ['reports-registry', 'audience-counter', 'webmatriculas'].includes(
    project.slug,
  ),
);
export const secondaryProjects = projects.filter(
  (project) => project.slug === 'dscommerce',
);

export const reportsRegistryCase = {
  id: 'reports-registry-case',
  image: media.reportsImport,
  category: {
    pt: 'Projeto comercial · Código privado',
    en: 'Commercial project · Private source code',
  } satisfies LocalizedText,
  context: {
    pt: 'Desenvolvi individualmente um sistema para registrar laudos de equipamentos e permitir a consulta de validade e datas de inspeção.',
    en: 'I independently developed a system for recording equipment inspection reports and checking validity and inspection dates.',
  } satisfies LocalizedText,
  technologies: {
    pt: 'Java, Spring Boot, React, JavaScript, Apache POI e Heroku.',
    en: 'Java, Spring Boot, React, JavaScript, Apache POI and Heroku.',
  } satisfies LocalizedText,
  implementation: {
    pt: 'Utilizei Apache POI para ler planilhas Excel e importar registros de laudos. O projeto também envolveu corrigir erros na atualização de usuários e tratar casos de borda nas buscas, incluindo buscas vazias. Essas experiências ampliaram meu aprendizado em importação de dados e tratamento de erros.',
    en: 'I used Apache POI to read Excel spreadsheets and import inspection report records. The project also involved fixing user update errors and handling search edge cases, including empty searches. These experiences strengthened my understanding of data imports and error handling.',
  } satisfies LocalizedText,
  disclosure: {
    pt: 'Projeto comercial com código privado. Código-fonte, trechos de código, identificação da empresa, dados de clientes e documentos não são disponibilizados.',
    en: 'Commercial project with private source code. Source code, code excerpts, company identity, client data and documents are not disclosed.',
  } satisfies LocalizedText,
} as const;

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
    image:
      'https://raw.githubusercontent.com/CleristonMP/portfolio/main/public/assets/medias/projects/reports-registry/frontend-react-public-tracking.png',
    nature: 'commercial',
    functionalStatus: 'implemented',
    codeVisibility: 'private',
    editorial: {
      state: 'pending',
      pendingFields: ['stack', 'mediaPermission', 'demo', 'caseStudy'],
    },
  },
  {
    slug: 'audience-counter',
    title: 'Audience-Counter',
    category: {
      pt: 'Aplicativo Android publicado',
      en: 'Published Android app',
    },
    description: {
      pt: 'Aplicativo de contagem de público disponível na Google Play, com modos de contagem adaptados a diferentes necessidades.',
      en: 'Audience counting Android app published on Google Play, supporting different counting workflows.',
    },
    image:
      'https://raw.githubusercontent.com/CleristonMP/portfolio/main/public/assets/medias/projects/audience-counter/1-direct-count-view.jpg',
    nature: 'own-product',
    functionalStatus: 'published',
    codeVisibility: 'unknown',
    editorial: {
      state: 'pending',
      pendingFields: ['stack', 'mediaPermission', 'storeUrl'],
    },
    platforms: ['Android'],
  },
  {
    slug: 'webmatriculas',
    title: 'Web Matrículas',
    category: {
      pt: 'Sistema independente • não implantado',
      en: 'Independent project • not deployed',
    },
    description: {
      pt: 'Sistema desenvolvido para gerenciar matrículas, alunos, classes e turmas de uma escola. O produto foi implementado, mas não entrou em operação.',
      en: 'School enrollment management system for students, classes and groups. The application was built but was not deployed.',
    },
    image:
      'https://raw.githubusercontent.com/CleristonMP/portfolio/main/public/assets/medias/projects/webmatriculas/frontend-react-admin-page.png',
    nature: 'independent',
    functionalStatus: 'not-deployed',
    codeVisibility: 'unknown',
    editorial: {
      state: 'pending',
      pendingFields: ['stack', 'mediaPermission', 'repository', 'demo'],
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
      pt: 'Aplicação de comércio eletrônico desenvolvida na Formação Desenvolvedor Moderno da DevSuperior. Integração de pagamentos não implementada.',
      en: 'E-commerce application built during DevSuperior’s Modern Developer program. Payment integration was not implemented.',
    },
    image:
      'https://raw.githubusercontent.com/CleristonMP/portfolio/main/public/assets/medias/projects/dscommerce/1-frontend-react-home-page.png',
    nature: 'educational',
    functionalStatus: 'implemented',
    codeVisibility: 'unknown',
    editorial: {
      state: 'pending',
      pendingFields: ['mediaPermission', 'repository', 'demo'],
    },
    stack: ['React', 'Spring Boot'],
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
  category: {
    pt: 'Projeto comercial · Código privado',
    en: 'Commercial project · Private source code',
  } satisfies LocalizedText,
  context: {
    pt: 'Sistema desenvolvido para uma empresa de engenharia elétrica, destinado ao registro de laudos de equipamentos e à consulta de informações pelos clientes, incluindo validade e data de inspeção.',
    en: 'A system developed for an electrical engineering company to register equipment inspection reports and let clients consult relevant information, including validity and inspection dates.',
  } satisfies LocalizedText,
  disclosure: {
    pt: 'O case apresenta o contexto funcional da solução. Código-fonte, identificação da empresa, dados de clientes e documentos não são disponibilizados.',
    en: 'This case presents the solution’s functional context. Source code, company identity, client data and documents are not disclosed.',
  } satisfies LocalizedText,
} as const;

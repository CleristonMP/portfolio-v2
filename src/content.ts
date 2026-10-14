export type Lang = 'pt' | 'en';
export type Bilingual = { pt: string; en: string };
export const projects = [
  {
    slug: 'reports-registry',
    title: 'Reports Registry',
    category: { pt: 'Projeto comercial', en: 'Commercial project' },
    description: {
      pt: 'Sistema desenvolvido para uma empresa de engenharia elétrica gerenciar registros de inspeções e permitir a consulta de informações de equipamentos pelos clientes.',
      en: 'Custom software for an electrical engineering business to manage inspection records and let clients access relevant equipment information.',
    },
    stack: ['React', 'Spring Boot'],
    image:
      'https://raw.githubusercontent.com/CleristonMP/portfolio/main/public/assets/medias/projects/reports-registry/frontend-react-public-tracking.png',
    status: 'private',
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
    stack: ['Android'],
    image:
      'https://raw.githubusercontent.com/CleristonMP/portfolio/main/public/assets/medias/projects/audience-counter/1-direct-count-view.jpg',
    status: 'store-pending',
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
    stack: ['React', 'Spring Boot'],
    image:
      'https://raw.githubusercontent.com/CleristonMP/portfolio/main/public/assets/medias/projects/webmatriculas/frontend-react-admin-page.png',
    status: 'private',
  },
  {
    slug: 'dscommerce',
    title: 'DS Commerce',
    category: { pt: 'Projeto educacional', en: 'Educational project' },
    description: {
      pt: 'Aplicação de comércio eletrônico desenvolvida na Formação Desenvolvedor Moderno da DevSuperior. Integração de pagamentos não implementada.',
      en: 'E-commerce application built during DevSuperior’s Modern Developer program. Payment integration was not implemented.',
    },
    stack: ['React', 'Spring Boot'],
    image:
      'https://raw.githubusercontent.com/CleristonMP/portfolio/main/public/assets/medias/projects/dscommerce/1-frontend-react-home-page.png',
    status: 'educational',
  },
] as const;
export const courses = [
  { title: 'Formação Desenvolvedor Moderno', institution: 'DevSuperior' },
  { title: 'Bootcamp React', institution: 'DevSuperior' },
  { title: 'Bootcamp Spring', institution: 'DevSuperior' },
  { title: 'Desenvolvimento com React Native', institution: 'Udemy' },
] as const;
export const t = {
  pt: {
    navigation: ['Projetos', 'Tecnologias', 'Sobre', 'Formação', 'Contato'],
    tag: 'DESENVOLVEDOR FULL STACK & MOBILE',
    heading: 'Soluções digitais para problemas reais.',
    hero: 'Desenvolvo aplicações web e mobile com arquitetura bem pensada, engenharia confiável e foco em gerar valor para o negócio.',
    cta: 'Vamos conversar',
    works: 'Conheça meus projetos',
    selected: 'Projetos em destaque',
    selectedLead:
      'Aplicações reais, decisões de engenharia e soluções pensadas para necessidades concretas.',
    skills: 'Competências técnicas',
    skillsLead: 'Tecnologias que utilizo para construir produtos digitais.',
    about: 'Sobre e método de trabalho',
    aboutText:
      'Acredito que software de qualidade nasce de uma boa compreensão do problema. Meu trabalho combina desenvolvimento web e mobile, atenção à manutenção e decisões técnicas orientadas às necessidades de cada projeto.',
    learning: 'Aprendizado contínuo',
    learningLead:
      'Formações que sustentam e ampliam minha prática profissional.',
    contact: 'Vamos construir algo juntos?',
    contactLead:
      'Tem um projeto web ou mobile em mente? Entre em contato para conversarmos sobre o objetivo e o escopo.',
    email: 'Contato por e-mail',
    source: 'GitHub',
    private: 'Estudo de caso • código privado',
    more: 'Ver detalhes',
    footer: 'Desenvolvido com atenção aos detalhes.',
    soon: 'Links de demonstração e estudos de caso completos serão adicionados após validação.',
  },
  en: {
    navigation: ['Projects', 'Skills', 'About', 'Learning', 'Contact'],
    tag: 'FULL STACK & MOBILE DEVELOPER',
    heading: 'Digital solutions for real problems.',
    hero: 'I build web and mobile applications with thoughtful architecture, reliable engineering and a focus on real business value.',
    cta: 'Let’s work together',
    works: 'Explore my work',
    selected: 'Selected works',
    selectedLead:
      'Real applications, engineering choices and software built for meaningful needs.',
    skills: 'Technical arsenal',
    skillsLead: 'Technologies I use to build digital products.',
    about: 'About & approach',
    aboutText:
      'I believe great software starts with understanding the problem. My approach brings together web and mobile development, maintainability and technical decisions driven by each project’s needs.',
    learning: 'Continuous learning',
    learningLead:
      'Education and training that reinforce my engineering practice.',
    contact: 'Let’s build something together?',
    contactLead:
      'Have a web or mobile project? Get in touch and tell me about your goals.',
    email: 'Contact by email',
    source: 'GitHub',
    private: 'Case study • private code',
    more: 'View details',
    footer: 'Crafted with attention to detail.',
    soon: 'Demo links and complete case studies will be added after verification.',
  },
};

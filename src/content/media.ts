import type { LocalMedia } from './contracts';

// Relative public paths resolve under both / and /portfolio-v2/; navigation is hash-only.
// These rasters are the exact nine versions accepted in M4-03, without re-encoding.
export const media = {
  reportsCover: {
    src: 'assets/media/reports-registry/rr-search.webp',
    width: 840,
    height: 525,
    alt: {
      pt: 'Formulário de consulta de equipamentos do Reports Registry, com identificação removida.',
      en: 'Reports Registry equipment lookup form, with identifying details removed.',
    },
  },
  reportsImport: {
    src: 'assets/media/reports-registry/rr-import.webp',
    width: 1440,
    height: 159,
    alt: {
      pt: 'Controles de importação de planilhas Excel e filtros do Reports Registry, sem dados de registros.',
      en: 'Reports Registry Excel import controls and filters, without record data.',
    },
  },
  audienceCover: {
    src: 'assets/media/audience-counter/ac-landscape.webp',
    width: 1440,
    height: 563,
    alt: {
      pt: 'Contagem direta do Audience-Counter em orientação horizontal, com contador e controles.',
      en: 'Audience-Counter direct counting in landscape orientation, with counter and controls.',
    },
  },
  enrollmentCover: {
    src: 'assets/media/webmatriculas/wm-classes.webp',
    width: 1440,
    height: 810,
    alt: {
      pt: 'Gestão de turmas do Web Matrículas com registros demonstrativos.',
      en: 'Web Matrículas class management with demonstration records.',
    },
  },
  commerceCover: {
    src: 'assets/media/dscommerce/ds-catalog.webp',
    width: 992,
    height: 620,
    alt: {
      pt: 'Catálogo demonstrativo do projeto educacional DS Commerce.',
      en: 'Demonstration catalog from the educational DS Commerce project.',
    },
  },
  modernCertificate: {
    src: 'assets/media/certificates/cert-modern.webp',
    width: 2339,
    height: 1653,
    alt: {
      pt: 'Certificado de conclusão de Formação Desenvolvedor Moderno — DevSuperior, em cópia saneada.',
      en: 'Completion certificate for Formação Desenvolvedor Moderno — DevSuperior, in a sanitized copy.',
    },
  },
  reactCertificate: {
    src: 'assets/media/certificates/cert-react.webp',
    width: 2339,
    height: 1653,
    alt: {
      pt: 'Certificado de conclusão de Bootcamp React — DevSuperior, em cópia saneada.',
      en: 'Completion certificate for Bootcamp React — DevSuperior, in a sanitized copy.',
    },
  },
  springCertificate: {
    src: 'assets/media/certificates/cert-spring.webp',
    width: 2339,
    height: 1653,
    alt: {
      pt: 'Certificado de conclusão de Bootcamp Spring — DevSuperior, em cópia saneada.',
      en: 'Completion certificate for Bootcamp Spring — DevSuperior, in a sanitized copy.',
    },
  },
  nativeCertificate: {
    src: 'assets/media/certificates/cert-native.webp',
    width: 1600,
    height: 1190,
    alt: {
      pt: 'Certificado de conclusão do curso de React Native na Udemy.',
      en: 'Completion certificate for the React Native course on Udemy.',
    },
  },
} as const satisfies Readonly<Record<string, LocalMedia>>;

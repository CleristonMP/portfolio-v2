import type { GalleryCollection, GalleryItem, LocalMedia } from './contracts';
import { projects } from './projects';
import { courses } from './courses';

// Exact EV-01 versions; thumbnails are derived only from these sanitized rasters.
export const galleryImages = {
  'rr-search': {
    src: 'assets/media/reports-registry/rr-search.webp',
    width: 840,
    height: 525,
    alt: {
      pt: 'Consulta pública por rastreio ou número de série, sem dados identificáveis.',
      en: 'Public lookup by tracking or serial number, with identifying data removed.',
    },
  },
  'rr-admin': {
    src: 'assets/media/reports-registry/rr-admin.webp',
    width: 1360,
    height: 708,
    alt: {
      pt: 'Áreas de gestão do sistema, com identidade e contagens removidas.',
      en: 'System management areas, with identity and counts removed.',
    },
  },
  'rr-import': {
    src: 'assets/media/reports-registry/rr-import.webp',
    width: 1440,
    height: 159,
    alt: {
      pt: 'Controles de importação Excel e filtros, sem exibir registros.',
      en: 'Excel import controls and filters, without displaying records.',
    },
  },
  'ac-landscape': {
    src: 'assets/media/audience-counter/ac-landscape.webp',
    width: 1440,
    height: 563,
    alt: {
      pt: 'Contagem direta em orientação horizontal.',
      en: 'Direct counting in landscape orientation.',
    },
  },
  'ac-direct': {
    src: 'assets/media/audience-counter/ac-direct.webp',
    width: 720,
    height: 1419,
    alt: {
      pt: 'Contagem direta e histórico de demonstração em orientação vertical.',
      en: 'Direct counting and demonstration history in portrait orientation.',
    },
  },
  'ac-rows': {
    src: 'assets/media/audience-counter/ac-rows.webp',
    width: 720,
    height: 1419,
    alt: {
      pt: 'Contagem por fileiras em orientação vertical, com valores de demonstração.',
      en: 'Row-based counting in portrait orientation, with demonstration values.',
    },
  },
  'wm-admin': {
    src: 'assets/media/webmatriculas/wm-admin.webp',
    width: 1050,
    height: 700,
    alt: {
      pt: 'Navegação para turmas, alunos e usuários.',
      en: 'Navigation to classes, students and users.',
    },
  },
  'wm-classes': {
    src: 'assets/media/webmatriculas/wm-classes.webp',
    width: 1440,
    height: 810,
    alt: {
      pt: 'Consulta e gestão de turmas com dados demonstrativos.',
      en: 'Class lookup and management with demonstration data.',
    },
  },
  'wm-students': {
    src: 'assets/media/webmatriculas/wm-students.webp',
    width: 1240,
    height: 700,
    alt: {
      pt: 'Gestão de alunos com identificadores de demonstração removidos.',
      en: 'Student management with demonstration identifiers removed.',
    },
  },
  'ds-catalog': {
    src: 'assets/media/dscommerce/ds-catalog.webp',
    width: 992,
    height: 620,
    alt: {
      pt: 'Catálogo demonstrativo do projeto educacional.',
      en: 'Demonstration catalog from the educational project.',
    },
  },
  'ds-product': {
    src: 'assets/media/dscommerce/ds-product.webp',
    width: 1000,
    height: 565,
    alt: {
      pt: 'Detalhes de um produto de demonstração.',
      en: 'Details of a demonstration product.',
    },
  },
  'ds-cart': {
    src: 'assets/media/dscommerce/ds-cart.webp',
    width: 1000,
    height: 345,
    alt: {
      pt: 'Carrinho de demonstração; integração de pagamentos não implementada.',
      en: 'Demonstration cart; payment integration was not implemented.',
    },
  },
} as const satisfies Readonly<Record<string, LocalMedia>>;

export const galleryPoster = {
  src: 'assets/media/audience-counter/ac-direct-demo-poster.webp',
  width: 1560,
  height: 720,
  alt: {
    pt: 'Demonstração da contagem direta: incrementar, reduzir, salvar e zerar; valores ilustrativos.',
    en: 'Direct counting demonstration: increment, decrement, save and reset; illustrative values.',
  },
} as const satisfies LocalMedia;

const thumbnails = {
  'rr-search': {
    src: 'assets/media/thumbnails/rr-search.webp',
    width: 240,
    height: 150,
  },
  'rr-admin': {
    src: 'assets/media/thumbnails/rr-admin.webp',
    width: 240,
    height: 125,
  },
  'rr-import': {
    src: 'assets/media/thumbnails/rr-import.webp',
    width: 240,
    height: 27,
  },
  'ac-landscape': {
    src: 'assets/media/thumbnails/ac-landscape.webp',
    width: 240,
    height: 94,
  },
  'ac-direct': {
    src: 'assets/media/thumbnails/ac-direct.webp',
    width: 81,
    height: 160,
  },
  'ac-rows': {
    src: 'assets/media/thumbnails/ac-rows.webp',
    width: 81,
    height: 160,
  },
  'wm-admin': {
    src: 'assets/media/thumbnails/wm-admin.webp',
    width: 240,
    height: 160,
  },
  'wm-classes': {
    src: 'assets/media/thumbnails/wm-classes.webp',
    width: 240,
    height: 135,
  },
  'wm-students': {
    src: 'assets/media/thumbnails/wm-students.webp',
    width: 240,
    height: 135,
  },
  'ds-catalog': {
    src: 'assets/media/thumbnails/ds-catalog.webp',
    width: 240,
    height: 150,
  },
  'ds-product': {
    src: 'assets/media/thumbnails/ds-product.webp',
    width: 240,
    height: 136,
  },
  'ds-cart': {
    src: 'assets/media/thumbnails/ds-cart.webp',
    width: 240,
    height: 83,
  },
  'cert-modern': {
    src: 'assets/media/thumbnails/cert-modern.webp',
    width: 226,
    height: 160,
  },
  'cert-react': {
    src: 'assets/media/thumbnails/cert-react.webp',
    width: 226,
    height: 160,
  },
  'cert-spring': {
    src: 'assets/media/thumbnails/cert-spring.webp',
    width: 226,
    height: 160,
  },
  'cert-native': {
    src: 'assets/media/thumbnails/cert-native.webp',
    width: 215,
    height: 160,
  },
  'ac-direct-demo': {
    src: 'assets/media/thumbnails/ac-direct-demo.webp',
    width: 240,
    height: 111,
  },
} as const;

function imageItem(id: keyof typeof galleryImages): GalleryItem {
  const image = galleryImages[id];
  return {
    id,
    kind: 'image',
    image,
    caption: image.alt,
    thumbnail: { ...thumbnails[id], alt: image.alt },
  };
}

const projectMedia: Readonly<Record<string, readonly GalleryItem[]>> = {
  'reports-registry': (['rr-search', 'rr-admin', 'rr-import'] as const).map(
    imageItem,
  ),
  'audience-counter': [
    ...(['ac-landscape', 'ac-direct', 'ac-rows'] as const).map(imageItem),
    {
      id: 'ac-direct-demo',
      kind: 'video',
      src: 'assets/media/audience-counter/ac-direct-demo.mp4',
      poster: galleryPoster,
      caption: galleryPoster.alt,
      thumbnail: { ...thumbnails['ac-direct-demo'], alt: galleryPoster.alt },
    },
  ],
  webmatriculas: (['wm-admin', 'wm-classes', 'wm-students'] as const).map(
    imageItem,
  ),
  dscommerce: (['ds-catalog', 'ds-product', 'ds-cart'] as const).map(imageItem),
};

export const projectGalleries: Readonly<Record<string, GalleryCollection>> =
  Object.fromEntries(
    projects.map((project) => [
      project.slug,
      {
        id: project.slug,
        title: project.title,
        category: project.category,
        description: project.description,
        items: projectMedia[project.slug],
      },
    ]),
  );

const certificateIds = [
  'cert-modern',
  'cert-react',
  'cert-spring',
  'cert-native',
] as const;
export const certificateGalleries: readonly GalleryCollection[] = courses.map(
  (course, index) => {
    const image = course.image!;
    const id = certificateIds[index];
    return {
      id: course.id,
      title: course.title,
      description: { pt: course.institution, en: course.institution },
      items: [
        {
          id,
          kind: 'image',
          image,
          caption: image.alt,
          thumbnail: { ...thumbnails[id], alt: image.alt },
        },
      ],
    };
  },
);
export const allGalleries = [
  ...Object.values(projectGalleries),
  ...certificateGalleries,
];

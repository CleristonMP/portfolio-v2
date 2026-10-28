export type Language = 'pt' | 'en';
export type LocalizedText = Readonly<Record<Language, string>>;
export type VerificationState = 'confirmed' | 'pending';
export interface EditorialReview {
  readonly state: VerificationState;
  readonly pendingFields: readonly string[];
}
export interface OptionalLink {
  readonly url?: string;
  readonly verification: VerificationState;
}
export interface LocalMedia {
  readonly src: `assets/media/${string}.webp`;
  readonly width: number;
  readonly height: number;
  readonly alt: LocalizedText;
}
export type ProjectNature =
  'commercial' | 'own-product' | 'independent' | 'educational';
export type FunctionalStatus =
  'implemented' | 'published' | 'not-deployed' | 'discontinued';
export type ProjectLinkKind =
  | 'repository'
  | 'backendRepository'
  | 'frontendRepository'
  | 'demo'
  | 'store'
  | 'caseStudy';
export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly nature: ProjectNature;
  readonly functionalStatus: FunctionalStatus;
  readonly codeVisibility: 'private' | 'public' | 'unknown';
  readonly editorial: EditorialReview;
  readonly category: LocalizedText;
  readonly description: LocalizedText;
  readonly stack?: readonly string[];
  readonly platforms?: readonly string[];
  readonly image?: LocalMedia;
  readonly links?: Partial<Readonly<Record<ProjectLinkKind, OptionalLink>>>;
}
export interface Course {
  readonly id: string;
  readonly title: string;
  readonly institution: string;
  readonly completedYear?: number;
  readonly completionLabel?: LocalizedText;
  readonly credential?: OptionalLink;
  readonly image?: LocalMedia;
  readonly editorial: EditorialReview;
}
export type SkillIcon =
  'server' | 'code' | 'smartphone' | 'layers' | 'database' | 'book';
export type SkillId =
  | 'java-spring'
  | 'react-typescript'
  | 'android-mobile'
  | 'javascript-node'
  | 'sql-data'
  | 'software-architecture';
export interface Skill {
  readonly id: SkillId;
  readonly name: string;
  readonly icon: SkillIcon;
  readonly editorial: EditorialReview;
}
export interface Contact {
  readonly id: string;
  readonly kind: 'github' | 'email' | 'linkedin' | 'resume';
  readonly label: string;
  readonly link?: OptionalLink;
}
export interface Profile {
  readonly id: string;
  readonly name: string;
  readonly brand: { readonly firstName: string; readonly lastName: string };
  readonly role: string;
  readonly availability?: LocalizedText;
  readonly experienceYears?: number;
  readonly contacts: readonly Contact[];
  readonly resume?: Readonly<
    Record<
      Language,
      {
        readonly src: `assets/documents/${string}.pdf`;
        readonly language: 'pt-BR' | 'en';
      }
    >
  >;
  readonly editorial: EditorialReview;
}
export type SectionId =
  'home' | 'projects' | 'skills' | 'about' | 'learning' | 'contact';
export interface NavigationItem {
  readonly id: Exclude<SectionId, 'home'>;
  readonly labelIndex: 0 | 1 | 2 | 3 | 4;
}
export interface Translation {
  readonly navigation: readonly [string, string, string, string, string];
  readonly tag: string;
  readonly heading: string;
  readonly hero: string;
  readonly cta: string;
  readonly works: string;
  readonly selected: string;
  readonly selectedLead: string;
  readonly skills: string;
  readonly skillsLead: string;
  readonly about: string;
  readonly aboutText: string;
  readonly learning: string;
  readonly learningLead: string;
  readonly contact: string;
  readonly contactLead: string;
  readonly email: string;
  readonly source: string;
  readonly projectLinks: Readonly<
    Record<
      'repository' | 'backendRepository' | 'frontendRepository' | 'store',
      string
    >
  >;
  readonly private: string;
  readonly more: string;
  readonly footer: string;
  readonly soon: string;
  readonly languageSwitchCode: string;
  readonly heroIntro: string;
  readonly heroAccent: string;
  readonly heroDomains: string;
  readonly scrollHint: string;
  readonly kickers: Readonly<Record<Exclude<SectionId, 'home'>, string>>;
  readonly aboutAccent: string;
  readonly methodLabel: string;
  readonly methodText: string;
  readonly conversationLabel: string;
  readonly contactNotice: string;
  readonly contactStatus: string;
  readonly contactForm: {
    readonly labels: Readonly<Record<'name' | 'email' | 'message', string>>;
    readonly required: Readonly<Record<'name' | 'email' | 'message', string>>;
    readonly invalidEmail: string;
    readonly profileLink: string;
  };
  readonly backToTop: string;
  readonly downloadResume: string;
  readonly accessibility: {
    readonly navigation: string;
    readonly footerNavigation: string;
    readonly skipToContent: string;
    readonly changeLanguage: string;
    readonly openMenu: string;
    readonly closeMenu: string;
  };
  readonly projectImageAlt: string;
  readonly openOriginalImage: string;
  readonly skillLabels: Readonly<Record<SkillId, string>>;
  readonly metadata: { readonly title: string; readonly description: string };
}
export type Translations = Readonly<Record<Language, Translation>>;
export interface SectionProps {
  readonly language: Language;
  readonly text: Translation;
}

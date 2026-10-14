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
export type ProjectNature =
  'commercial' | 'own-product' | 'independent' | 'educational';
export type FunctionalStatus =
  'implemented' | 'published' | 'not-deployed' | 'discontinued';
export type ProjectLinkKind = 'repository' | 'demo' | 'store' | 'caseStudy';
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
  readonly image: string;
  readonly links?: Partial<Readonly<Record<ProjectLinkKind, OptionalLink>>>;
}
export interface Course {
  readonly id: string;
  readonly title: string;
  readonly institution: string;
  readonly completedYear?: number;
  readonly credential?: OptionalLink;
  readonly editorial: EditorialReview;
}
export type SkillIcon =
  'server' | 'code' | 'smartphone' | 'layers' | 'database' | 'book';
export interface Skill {
  readonly id: string;
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
  readonly private: string;
  readonly more: string;
  readonly footer: string;
  readonly soon: string;
}
export type Translations = Readonly<Record<Language, Translation>>;
export interface SectionProps {
  readonly language: Language;
  readonly text: Translation;
}

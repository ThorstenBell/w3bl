// Minimal local stand-in for Portable Text content until real rendering is designed.
export type PortableTextBlock = Record<string, unknown>;

export interface SanityImage {
  _type: 'image';
  asset?: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface CtaLink {
  label?: string;
  href?: string;
}

export interface HeroBlock {
  _type: 'hero';
  _key: string;
  variant?: 'home' | 'vertical' | 'index' | 'simple';
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export interface ProofStripItem {
  _key: string;
  label?: string;
  icon?: SanityImage;
  type?: 'stack' | 'credential';
}

export interface ProofStripBlock {
  _type: 'proofStrip';
  _key: string;
  items?: ProofStripItem[];
}

export interface TeaserGridItem {
  _key: string;
  title?: string;
  description?: string;
  href?: string;
  tag?: string;
  image?: SanityImage;
}

export interface TeaserGridBlock {
  _type: 'teaserGrid';
  _key: string;
  variant?: 'verticals' | 'cases';
  heading?: string;
  items?: TeaserGridItem[];
}

export interface CaseHighlightItem {
  _key: string;
  title?: string;
  oneLiner?: string;
  href?: string;
}

export interface CaseHighlightStripBlock {
  _type: 'caseHighlightStrip';
  _key: string;
  introText?: string;
  items?: CaseHighlightItem[];
}

export interface AboutSummaryBlock {
  _type: 'aboutSummary';
  _key: string;
  heading?: string;
  body?: PortableTextBlock[];
  image?: SanityImage;
}

export interface CtaBannerBlock {
  _type: 'ctaBanner';
  _key: string;
  variant?: 'general' | 'partnership' | 'earlyAccess' | 'quote';
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ProblemStatementBlock {
  _type: 'problemStatement';
  _key: string;
  heading?: string;
  body?: PortableTextBlock[];
}

export interface BuildingInPublicItem {
  _key: string;
  title?: string;
  status?: 'inProgress' | 'concept';
  description?: string;
  href?: string;
}

export interface BuildingInPublicListBlock {
  _type: 'buildingInPublicList';
  _key: string;
  heading?: string;
  items?: BuildingInPublicItem[];
}

export interface FeatureHighlightBlock {
  _type: 'featureHighlight';
  _key: string;
  heading?: string;
  body?: PortableTextBlock[];
  image?: SanityImage;
  href?: string;
  ctaLabel?: string;
}

export interface CaseStudyHeaderBlock {
  _type: 'caseStudyHeader';
  _key: string;
  title?: string;
  client?: string;
  role?: string;
  duration?: string;
  stackTags?: string[];
  summary?: string;
}

export interface CaseStudyBodyBlock {
  _type: 'caseStudyBody';
  _key: string;
  sectionType?: 'problem' | 'approach' | 'solution';
  heading?: string;
  body?: PortableTextBlock[];
}

export interface CaseStudyMetric {
  _key: string;
  label?: string;
  value?: string;
  description?: string;
}

export interface CaseStudyResultsBlock {
  _type: 'caseStudyResults';
  _key: string;
  heading?: string;
  metrics?: CaseStudyMetric[];
}

export interface CaseStudyGalleryImage {
  _key: string;
  image?: SanityImage;
  caption?: string;
}

export interface CaseStudyGalleryBlock {
  _type: 'caseStudyGallery';
  _key: string;
  images?: CaseStudyGalleryImage[];
}

export interface NextCaseNavBlock {
  _type: 'nextCaseNav';
  _key: string;
  nextCase?: {
    title?: string;
    href?: string;
  };
  backToCasesHref?: string;
}

export interface ContactFormBlock {
  _type: 'contactForm';
  _key: string;
  heading?: string;
  subheading?: string;
  segmentOptions?: string[];
  submitLabel?: string;
}

export type PageBlock =
  | HeroBlock
  | ProofStripBlock
  | TeaserGridBlock
  | CaseHighlightStripBlock
  | AboutSummaryBlock
  | CtaBannerBlock
  | ProblemStatementBlock
  | BuildingInPublicListBlock
  | FeatureHighlightBlock
  | CaseStudyHeaderBlock
  | CaseStudyBodyBlock
  | CaseStudyResultsBlock
  | CaseStudyGalleryBlock
  | NextCaseNavBlock
  | ContactFormBlock;

export interface PageDocument {
  _id: string;
  _type: 'page';
  title: string;
  slug: {current: string};
  blocks?: PageBlock[];
}

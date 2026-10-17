export interface ExternalCitation {
  name: string;
  url: string;
  organization: string;
  description: string;
}

export interface InternalLinkItem {
  anchor: string;
  path: string;
  context: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  level: 'h2' | 'h3';
  isQuestionBased?: boolean;
  directAnswer?: string;
  content: string[];
  bulletPoints?: string[];
  tableData?: {
    caption?: string;
    headers: string[];
    rows: (string | number)[][];
  };
  callout?: {
    type: 'definition' | 'insight' | 'warning' | 'example';
    title: string;
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  url: string;
  title: string;
  htmlTitle: string; // 50-60 chars
  metaDescription: string; // 150-160 chars
  h1: string;
  primaryKeyword: string;
  relatedKeywords: [string, string];
  questionH2: string;
  directAnswer: string;
  featuredImage: string;
  imageAlt: string;
  excerpt: string;
  readingTime: string;
  wordCount: number;
  publishedDate: string;
  category: string;
  sections: ArticleSection[];
  keyTakeaways: string[];
  externalCitations: ExternalCitation[];
  internalLinks: InternalLinkItem[];
  relatedSlugs: string[];
  interactiveToolType?: 'budget' | 'emergency' | 'compound';
}

export interface SEOMatrixRow {
  page: string;
  path: string;
  mainKeyword: string;
  relatedKeywords: string[];
  searchIntent: 'Informational' | 'Transactional' | 'Navigational' | 'Commercial';
  searchVolume: string;
  questionItAnswers: string;
  onPageFocus: string;
}

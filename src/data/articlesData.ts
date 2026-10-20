import { Article } from '../types';
import { CORE_ARTICLES } from './articles/coreArticles';
import { STUDENT_ARTICLES_PART1 } from './articles/studentArticlesPart1';
import { STUDENT_ARTICLES_PART2 } from './articles/studentArticlesPart2';

// Canonical production site URL
export const SITE_URL = 'https://moneywise-starter-liard.vercel.app';

// Reliable high-definition Unsplash imagery
export const HERO_IMAGE = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80';
export const DEBT_MANAGEMENT_IMAGE = 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80';

export const ARTICLES_DATA: Article[] = [
  ...CORE_ARTICLES,
  ...STUDENT_ARTICLES_PART1,
  ...STUDENT_ARTICLES_PART2
];

import { SEOMatrixRow } from '../types';

export const SEO_MATRIX_DATA: SEOMatrixRow[] = [
  {
    page: "Homepage",
    path: "/",
    mainKeyword: "personal finance for beginners",
    relatedKeywords: [
      "money management basics",
      "financial planning for beginners"
    ],
    searchIntent: "Informational",
    searchVolume: "Verify in keyword research tool",
    questionItAnswers: "What should beginners learn about managing money?",
    onPageFocus: "Comprehensive hub introducing five foundational pillars: cash flow budgeting, low-income saving strategies, emergency cash reserves, credit score health, and disciplined index investing."
  },
  {
    page: "Article 1: Budgeting for Beginners",
    path: "/budgeting-for-beginners/",
    mainKeyword: "budgeting for beginners",
    relatedKeywords: [
      "how to create a monthly budget",
      "personal budgeting tips"
    ],
    searchIntent: "Informational",
    searchVolume: "Verify in keyword research tool",
    questionItAnswers: "How can beginners create a monthly budget?",
    onPageFocus: "Targeted guide detailing net income calculation, fixed vs. variable categorization, realistic zero-based and 50/30/20 budget allocations, and mitigation of tracking fatigue."
  },
  {
    page: "Article 2: How to Save Money on a Low Income",
    path: "/save-money-on-low-income/",
    mainKeyword: "how to save money on a low income",
    relatedKeywords: [
      "money-saving tips",
      "how to reduce monthly expenses"
    ],
    searchIntent: "Informational",
    searchVolume: "Verify in keyword research tool",
    questionItAnswers: "How can someone save money on a low income?",
    onPageFocus: "Actionable low-overhead cash conservation strategies including micro-saving, audit of recurring utility and subscription leaks, intentional grocery shopping, and debt avoidance without extreme deprivation."
  },
  {
    page: "Article 3: Emergency Fund Guide",
    path: "/emergency-fund-guide/",
    mainKeyword: "emergency fund guide",
    relatedKeywords: [
      "how much emergency savings do I need",
      "emergency fund for beginners"
    ],
    searchIntent: "Informational",
    searchVolume: "Verify in keyword research tool",
    questionItAnswers: "How much should a beginner save for emergencies?",
    onPageFocus: "Step-by-step buffer construction from an initial $500–$1,000 starter cushion to 3–6 months essential living expenses in high-yield FDIC/NCUA-insured liquid savings accounts."
  },
  {
    page: "Article 4: Credit Score Basics",
    path: "/credit-score-basics/",
    mainKeyword: "credit score basics",
    relatedKeywords: [
      "how to improve your credit score",
      "factors that affect credit score"
    ],
    searchIntent: "Informational",
    searchVolume: "Verify in keyword research tool",
    questionItAnswers: "What affects a credit score?",
    onPageFocus: "Demystifying credit bureau scoring variables: payment history, credit utilization ratio, account age, credit mix, and inquiry velocity across international credit regulatory differences."
  },
  {
    page: "Article 5: Investing for Beginners",
    path: "/investing-for-beginners/",
    mainKeyword: "investing for beginners",
    relatedKeywords: [
      "investment basics",
      "risk and return explained"
    ],
    searchIntent: "Informational",
    searchVolume: "Verify in keyword research tool",
    questionItAnswers: "How can beginners understand investing?",
    onPageFocus: "Fundamental education comparing saving vs. investing, asset classes (stocks, bonds, broad-market index funds), expense ratios, compound growth horizons, and risk management."
  }
];

export const SEO_METHODOLOGY_NOTE = {
  assignmentContext: "College SEO and Answer Engine Optimization (AEO) Academic Assignment",
  targetAudience: "Novice savers, students, and first-time earners seeking trustworthy, non-promotional financial education.",
  searchVolumeNotice: "Search volumes are designated as 'Verify in keyword research tool' in accordance with academic integrity guidelines. To obtain localized, current monthly search volumes and competition metrics, verify target queries using tools such as Ubersuggest, Google Keyword Planner, Ahrefs, or Semrush for your specific geographic region.",
  aeoArchitecture: "Every article features an Answer Engine Optimization (AEO) direct-response module positioned directly under the primary question heading. This matches Google's Featured Snippet and conversational AI answer extraction criteria (40–60 word declarative answer followed by structural evidence)."
};

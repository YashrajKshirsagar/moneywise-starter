import React from 'react';
import { ARTICLES_DATA, HERO_IMAGE } from '../data/articlesData';
import { Article } from '../types';
import { ArrowRight, BookOpen, ShieldCheck, Compass, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const handleArticleClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const learningPillars = [
    {
      title: 'Cash Flow & Budgeting',
      summary: 'Learn how to calculate take-home pay and balance needs, wants, and savings without restrictive deprivation.',
      targetArticle: '/budgeting-for-beginners/'
    },
    {
      title: 'Saving on a Low Income',
      summary: 'Practical micro-savings habits and daily expense reductions designed specifically for tight household budgets.',
      targetArticle: '/save-money-on-low-income/'
    },
    {
      title: 'Emergency Cash Reserves',
      summary: 'Step-by-step guidance on creating a starter cushion and building a 3-to-6-month liquid security buffer.',
      targetArticle: '/emergency-fund-guide/'
    },
    {
      title: 'Credit Score Demystification',
      summary: 'Understand the exact factors credit bureaus score, how utilization works, and why interest is unnecessary.',
      targetArticle: '/credit-score-basics/'
    },
    {
      title: 'Disciplined Long-Term Investing',
      summary: 'Master stocks, bonds, broad-market index funds, and compound growth without falling for hype or speculation.',
      targetArticle: '/investing-for-beginners/'
    }
  ];

  return (
    <>
      <SEOHead
        title="MoneyWise Starter – Simple Money Lessons for a Smarter Financial Future"
        description="Master personal finance basics with free educational guides on budgeting for beginners, low-income saving, emergency funds, credit scores, and investing."
        canonicalUrl="https://moneywisestarter.edu/"
        ogType="website"
      />

      <div className="space-y-20 pb-16">
        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section className="pt-8 sm:pt-14 pb-12 border-b border-[#e5dfd4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Editorial Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="text-xs uppercase tracking-widest font-semibold text-[#8b6b23]">
                  Educational Personal Finance Resource
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#16382c] tracking-tight leading-[1.12] text-balance">
                  Simple Money Lessons for a Smarter Financial Future.
                </h1>

                <p className="text-lg sm:text-xl text-[#3f4b44] font-serif italic leading-relaxed">
                  Clear, grounded financial literacy designed for beginners, students, and everyday savers.
                </p>

                <p className="text-base text-[#526058] leading-relaxed max-w-2xl">
                  Personal finance is rarely taught in school, leaving many adults to navigate banking, credit cards, and investments through stressful trial and error. MoneyWise Starter provides five clear, comprehensive guides written in plain English to help you build resilient money habits step by step.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('featured-articles');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#16382c] text-white font-medium text-sm rounded-lg hover:bg-[#102a21] transition-colors shadow-sm"
                  >
                    <span>Read The Five Core Guides</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="/seo-project-matrix/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/seo-project-matrix/');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#ede7db] text-[#16382c] font-medium text-sm rounded-lg hover:bg-[#e2dacb] transition-colors"
                  >
                    <span>Explore SEO Matrix</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Quiet Editorial Indicators (NO PILLS) */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#6a7970]">
                  <span>5 Comprehensive Guides</span>
                  <span aria-hidden="true">·</span>
                  <span>Interactive Financial Calculators</span>
                  <span aria-hidden="true">·</span>
                  <span>Non-Commercial Curriculum</span>
                </div>
              </div>

              {/* Right Column: High-Res Editorial Photography */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#ded6c7] bg-[#f2ede4] aspect-[16/10] lg:aspect-[4/3]">
                  <img
                    src={HERO_IMAGE}
                    alt="Neat personal finance workspace with an open budget ledger, wooden desk, brass pen, and ceramic coffee mug bathed in soft morning light"
                    className="w-full h-full object-cover"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 text-white text-xs">
                    <p className="font-serif italic text-[#f4efe8]">
                      Intentional cash flow planning turns money from a stressor into a reliable tool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* WHAT YOU WILL LEARN SECTION */}
        {/* ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8b6b23] block mb-2">
              Curriculum Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#16382c] tracking-tight">
              What You Will Learn
            </h2>
            <p className="text-base text-[#526058] mt-3">
              Five progressive milestones to take you from financial uncertainty to long-term confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {learningPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white border border-[#e5dfd4] rounded-xl p-5 flex flex-col justify-between hover:border-[#16382c] transition-all"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#8b6b23] mb-3">
                    0{index + 1}.
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#16382c] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#5f6f66] leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#f0eae0]">
                  <a
                    href={pillar.targetArticle}
                    onClick={(e) => handleArticleClick(pillar.targetArticle, e)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#16382c] hover:underline"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* FEATURED ARTICLES SECTION (ALL 5 ARTICLES) */}
        {/* ========================================================= */}
        <section id="featured-articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#e5dfd4]">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8b6b23] block mb-1">
                Foundational Series
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#16382c] tracking-tight">
                Featured Educational Articles
              </h2>
            </div>
            <p className="text-xs text-[#63726a] max-w-sm">
              Each article is structured with direct Answer Engine (AEO) responses, data tables, and reputable government citations.
            </p>
          </div>

          <div className="space-y-12">
            {ARTICLES_DATA.map((article: Article, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={article.id}
                  className="bg-white border border-[#e5dfd4] rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Visual Asset */}
                    <div className={`lg:col-span-5 relative bg-[#f2ede4] min-h-[260px] ${isEven ? '' : 'lg:order-2'}`}>
                      <img
                        src={article.featuredImage}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Article Details */}
                    <div className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${isEven ? '' : 'lg:order-1'}`}>
                      <div>
                        {/* Clean Metadata (NO PILLS) */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#6a7970] mb-3">
                          <span className="font-semibold text-[#16382c] uppercase tracking-wider">
                            {article.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{article.readingTime}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.wordCount} words</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#16382c] tracking-tight mb-3">
                          <a
                            href={article.url}
                            onClick={(e) => handleArticleClick(article.url, e)}
                            className="hover:text-[#255241] transition-colors"
                          >
                            {article.title}
                          </a>
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm text-[#4c5952] leading-relaxed mb-4">
                          {article.excerpt}
                        </p>

                        {/* AEO Question Callout Box */}
                        <div className="bg-[#faf8f4] border border-[#e4ded2] rounded-lg p-3.5 mb-5 text-xs">
                          <p className="font-semibold text-[#16382c] mb-1">
                            Key Question: {article.questionH2}
                          </p>
                          <p className="text-[#526058] italic leading-relaxed">
                            "{article.directAnswer}"
                          </p>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-[#f0eae0] flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-[#707f76]">
                          Primary Keyword:{' '}
                          <code className="font-mono bg-[#f4efe8] px-1.5 py-0.5 rounded text-[#16382c]">
                            {article.primaryKeyword}
                          </code>
                        </div>

                        <a
                          href={article.url}
                          onClick={(e) => handleArticleClick(article.url, e)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#16382c] hover:text-[#29634e] hover:underline"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* PERSONAL FINANCE ROADMAP SECTION */}
        {/* ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f5efe4] border border-[#dfd7c6] rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8b6b23] block mb-1">
                Strategic Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#16382c]">
                The Beginner Financial Order of Operations
              </h2>
              <p className="text-sm text-[#526058] mt-2">
                Beginners often try to invest in stocks before they have cash to cover an urgent car repair. Follow this orderly sequence to build genuine resilience:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-xl border border-[#ded6c7]">
                <div className="text-xs font-mono font-bold text-[#16382c] mb-2">Step 01</div>
                <h4 className="text-base font-serif font-bold text-[#16382c] mb-1">Budgeting & Cash Flow</h4>
                <p className="text-xs text-[#526058] leading-relaxed">
                  Establish a monthly spending plan. Track net income and assign every dollar a purpose before the month begins.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#ded6c7]">
                <div className="text-xs font-mono font-bold text-[#16382c] mb-2">Step 02</div>
                <h4 className="text-base font-serif font-bold text-[#16382c] mb-1">$1,000 Starter Buffer</h4>
                <p className="text-xs text-[#526058] leading-relaxed">
                  Save an initial safety buffer in an insured account to break the reliance on credit cards for routine surprises.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#ded6c7]">
                <div className="text-xs font-mono font-bold text-[#16382c] mb-2">Step 03</div>
                <h4 className="text-base font-serif font-bold text-[#16382c] mb-1">High-Interest Debt Payoff</h4>
                <p className="text-xs text-[#526058] leading-relaxed">
                  Eliminate credit card debt and loans charging double-digit APR using the Avalanche or Snowball method.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#ded6c7]">
                <div className="text-xs font-mono font-bold text-[#16382c] mb-2">Step 04</div>
                <h4 className="text-base font-serif font-bold text-[#16382c] mb-1">Long-Term Index Growth</h4>
                <p className="text-xs text-[#526058] leading-relaxed">
                  Automate monthly contributions into broad, diversified, low-cost index funds for retirement and wealth creation.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#dfd7c6] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#63726a]">
                Need help tackling high-interest credit card debt before investing?
              </p>
              <a
                href="/debt-management/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/debt-management/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#16382c] hover:underline inline-flex items-center gap-1"
              >
                <span>Read Debt Management Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* EDUCATIONAL DISCLAIMER BANNER */}
        {/* ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white border border-[#dfd7c6] rounded-xl flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#16382c] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#5d6c64] leading-relaxed">
              <p className="font-semibold text-[#16382c]">
                Educational Integrity & Non-Commercial Notice
              </p>
              <p>
                MoneyWise Starter does not sell financial products, recommend proprietary investments, or accept affiliate kickbacks. This platform is built solely as an open educational asset for personal finance beginners and academic research into search engine indexing and answer engine optimization.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/articlesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { BudgetCalculator } from '../components/BudgetCalculator';
import { EmergencyFundCalculator } from '../components/EmergencyFundCalculator';
import { CompoundInterestCalculator } from '../components/CompoundInterestCalculator';
import { 
  ArrowRight, 
  ExternalLink, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  ArrowLeft,
  Share2,
  Check
} from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  onNavigate: (path: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const relatedArticles = ARTICLES_DATA.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.h1,
    name: article.title,
    description: article.metaDescription,
    image: `https://moneywisestarter.edu${article.featuredImage}`,
    datePublished: '2026-10-17T09:00:00+00:00',
    dateModified: '2026-10-17T10:00:00+00:00',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://moneywisestarter.edu${article.url}`
    },
    author: {
      '@type': 'Organization',
      name: 'MoneyWise Starter Editorial Team',
      url: 'https://moneywisestarter.edu/'
    },
    publisher: {
      '@type': 'Organization',
      name: 'MoneyWise Starter',
      url: 'https://moneywisestarter.edu/'
    },
    keywords: [article.primaryKeyword, ...article.relatedKeywords].join(', '),
    articleSection: article.category,
    wordCount: article.wordCount
  };

  return (
    <>
      <SEOHead
        title={`${article.htmlTitle} | MoneyWise Starter`}
        description={article.metaDescription}
        canonicalUrl={`https://moneywisestarter.edu${article.url}`}
        ogType="article"
        articleData={{
          publishedTime: '2026-10-17',
          category: article.category,
          wordCount: article.wordCount
        }}
        jsonLd={jsonLdData}
      />

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#16382c] z-50 transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Article reading progress"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: article.category, path: '/' },
            { label: article.title }
          ]}
          onNavigate={onNavigate}
        />

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          {/* Metadata Text (NO PILLS) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#65756d]">
            <span className="font-semibold text-[#16382c] uppercase tracking-wider">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishedDate}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.wordCount} words</span>
          </div>

          {/* Primary H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#16382c] tracking-tight leading-[1.18] text-balance">
            {article.h1}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-lg font-serif italic text-[#4e5c54] leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author Byline & Sharing */}
          <div className="pt-4 border-t border-[#e8e2d6] flex items-center justify-between text-xs text-[#6e7d75]">
            <div className="flex items-center gap-2">
              <span>By MoneyWise Starter Editorial Team</span>
              <span aria-hidden="true">·</span>
              <span>Educational Review</span>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-xs text-[#16382c] hover:underline"
              aria-label="Copy article link"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Article'}</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <figure className="rounded-2xl overflow-hidden border border-[#ded6c7] bg-[#f2ede4] shadow-sm">
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              className="w-full max-h-[500px] object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <figcaption className="px-4 py-3 bg-[#f8f5ee] border-t border-[#ded6c7] text-xs font-serif italic text-[#63726a]">
              Fig. 1 — {article.imageAlt}
            </figcaption>
          </figure>
        </div>

        {/* Quick Table of Contents Jump Box */}
        <div className="bg-[#f5efe4] border border-[#ded6c7] rounded-xl p-5 mb-10">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#16382c] mb-3">
            Table of Contents
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {article.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-[#415147] hover:text-[#16382c] hover:underline line-clamp-1"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Article Body */}
        <div className="space-y-12 text-[#2d3832] text-base leading-[1.8] font-sans">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
              {/* Heading */}
              {section.level === 'h2' ? (
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#16382c] tracking-tight pt-4">
                  {section.heading}
                </h2>
              ) : (
                <h3 className="text-xl font-serif font-semibold text-[#16382c] tracking-tight pt-2">
                  {section.heading}
                </h3>
              )}

              {/* AEO Direct Answer Box (For Question-Based Headings) */}
              {section.isQuestionBased && section.directAnswer && (
                <div className="bg-[#f9f7f2] border-2 border-[#16382c] rounded-xl p-5 my-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#16382c] mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16382c]" />
                    <span>Quick Answer (Direct Summary)</span>
                  </div>
                  <p className="text-sm font-medium text-[#1c2c24] leading-relaxed">
                    {section.directAnswer}
                  </p>
                </div>
              )}

              {/* Paragraphs */}
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-[#3b4740]">
                  {paragraph}
                </p>
              ))}

              {/* Bullet Points */}
              {section.bulletPoints && (
                <ul className="space-y-2.5 my-4 pl-4 border-l-2 border-[#ded6c7]">
                  {section.bulletPoints.map((item, bIdx) => (
                    <li key={bIdx} className="text-sm text-[#44524a] leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Data Table */}
              {section.tableData && (
                <div className="my-6 overflow-x-auto rounded-lg border border-[#ded6c7] bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    {section.tableData.caption && (
                      <caption className="text-xs font-medium text-[#65756d] p-3 text-left bg-[#f8f5ee] border-b border-[#ded6c7]">
                        {section.tableData.caption}
                      </caption>
                    )}
                    <thead>
                      <tr className="bg-[#f0eae0] border-b border-[#ded6c7]">
                        {section.tableData.headers.map((header, hIdx) => (
                          <th
                            key={hIdx}
                            className="p-3 font-semibold text-[#16382c] whitespace-nowrap"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eee7da]">
                      {section.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#faf7f2] transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3 text-[#3d4b43] ${
                                cIdx === 0 ? 'font-medium text-[#16382c]' : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Editorial Callout */}
              {section.callout && (
                <div className="my-6 p-5 rounded-xl border border-[#ded6c7] bg-[#f5efe4]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8b6b23] mb-1">
                    {section.callout.title}
                  </p>
                  <p className="text-sm text-[#3f4d45] leading-relaxed italic">
                    "{section.callout.text}"
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Interactive Tool Placement based on article theme */}
          {article.interactiveToolType === 'budget' && <BudgetCalculator />}
          {article.interactiveToolType === 'emergency' && <EmergencyFundCalculator />}
          {article.interactiveToolType === 'compound' && <CompoundInterestCalculator />}

          {/* Key Takeaways Box */}
          <section className="bg-[#f5efe4] border border-[#dfd7c6] rounded-xl p-6 my-10">
            <h3 className="text-lg font-serif font-bold text-[#16382c] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16382c]" />
              <span>Key Takeaways for Beginners</span>
            </h3>
            <ul className="space-y-2 text-sm text-[#3e4c44]">
              {article.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5">
                  <span className="text-[#8b6b23] font-bold font-mono">0{tIdx + 1}.</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Reputable External Authority References */}
          <section className="pt-8 border-t border-[#e2dacf] space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#16382c]">
              Reputable External Resources & Citations
            </h3>
            <p className="text-xs text-[#63726a]">
              MoneyWise Starter cites recognized government bodies and nonprofit consumer education organizations for independent verification:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {article.externalCitations.map((citation, cIdx) => (
                <a
                  key={cIdx}
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white border border-[#ded6c7] rounded-lg hover:border-[#16382c] transition-colors block text-xs"
                >
                  <div className="flex items-center justify-between font-semibold text-[#16382c] mb-1">
                    <span>{citation.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8b6b23]" />
                  </div>
                  <p className="text-[#728279] mb-1">{citation.organization}</p>
                  <p className="text-[#4b5952]">{citation.description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Internal Cross-Linking Recommendations */}
          <section className="pt-8 border-t border-[#e2dacf] space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#16382c]">
              Next Steps in Your Financial Learning
            </h3>
            <p className="text-xs text-[#63726a]">
              Continue exploring related foundational lessons on MoneyWise Starter:
            </p>
            <div className="space-y-2">
              {article.internalLinks.map((link, lIdx) => (
                <div key={lIdx} className="flex items-start gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-[#16382c] shrink-0 mt-1" />
                  <div>
                    <a
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(link.path);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-semibold text-[#16382c] hover:underline"
                    >
                      {link.anchor}
                    </a>
                    <span className="text-xs text-[#617068] block sm:inline sm:ml-2">
                      — {link.context}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-10 border-t border-[#ded6c7]">
            <h3 className="text-2xl font-serif font-bold text-[#16382c] mb-6">
              Related Educational Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border border-[#ded6c7] rounded-xl overflow-hidden hover:border-[#16382c] transition-all flex flex-col justify-between"
                >
                  <div className="aspect-[16/9] bg-[#f0eae0] overflow-hidden">
                    <img
                      src={rel.featuredImage}
                      alt={rel.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-[#6b7b72] mb-1">{rel.category}</div>
                      <h4 className="text-base font-serif font-bold text-[#16382c] mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#526159] line-clamp-2">{rel.excerpt}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[#f4efe8]">
                      <a
                        href={rel.url}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(rel.url);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#16382c] hover:underline"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back to Homepage Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => {
              onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#16382c] bg-[#ede7db] rounded-lg hover:bg-[#e2dacb] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Lessons</span>
          </button>
        </div>
      </article>
    </>
  );
};

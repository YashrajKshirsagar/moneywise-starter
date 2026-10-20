import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f2ece1] border-t border-[#dfd7c6] text-[#2c3530] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="text-2xl font-serif font-bold text-[#16382c] tracking-tight inline-block"
            >
              MoneyWise Starter
            </a>
            <p className="text-base font-serif italic text-[#4e5c54] max-w-md">
              “Simple Money Lessons for a Smarter Financial Future.”
            </p>
            <p className="text-sm text-[#5d6b63] leading-relaxed max-w-lg">
              A foundational personal finance curriculum designed for first-time earners, students, and everyday savers. We break down budgeting, emergency savings, credit health, and long-term investing into actionable, jargon-free lessons.
            </p>
          </div>

          {/* Core Guides Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#16382c] mb-4">
              Foundational Guides
            </h3>
            <ul className="space-y-2 text-sm text-[#444f48]">
              <li>
                <a
                  href="/blog/student-budget-planner"
                  onClick={(e) => handleLinkClick('/blog/student-budget-planner', e)}
                  className="hover:text-[#16382c] hover:underline transition-colors"
                >
                  Student Budget Planner
                </a>
              </li>
              <li>
                <a
                  href="/blog/investing-for-beginners"
                  onClick={(e) => handleLinkClick('/blog/investing-for-beginners', e)}
                  className="hover:text-[#16382c] hover:underline transition-colors"
                >
                  Investing for Beginners
                </a>
              </li>
              <li>
                <a
                  href="/blog/credit-score-guide"
                  onClick={(e) => handleLinkClick('/blog/credit-score-guide', e)}
                  className="hover:text-[#16382c] hover:underline transition-colors"
                >
                  Credit & Debt Guide
                </a>
              </li>
              <li>
                <a
                  href="/blog/emergency-fund-for-students"
                  onClick={(e) => handleLinkClick('/blog/emergency-fund-for-students', e)}
                  className="hover:text-[#16382c] hover:underline transition-colors"
                >
                  Student Emergency Fund
                </a>
              </li>
              <li>
                <a
                  href="/blog/education-loan-repayment"
                  onClick={(e) => handleLinkClick('/blog/education-loan-repayment', e)}
                  className="hover:text-[#16382c] hover:underline transition-colors"
                >
                  Education Loan Repayment
                </a>
              </li>
              <li>
                <a
                  href="/blog/digital-wallet-expense-tracking"
                  onClick={(e) => handleLinkClick('/blog/digital-wallet-expense-tracking', e)}
                  className="hover:text-[#16382c] hover:underline transition-colors"
                >
                  UPI & Digital Wallet Habits
                </a>
              </li>
              <li>
                <a
                  href="/debt-management"
                  onClick={(e) => handleLinkClick('/debt-management', e)}
                  className="hover:text-[#16382c] hover:underline transition-colors"
                >
                  Debt Management Strategies
                </a>
              </li>
            </ul>
          </div>

          {/* Academic & SEO Audit Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#16382c] mb-4">
              SEO & Assignment Resources
            </h3>
            <ul className="space-y-2.5 text-sm text-[#444f48]">
              <li>
                <a
                  href="/seo-project-matrix"
                  onClick={(e) => handleLinkClick('/seo-project-matrix', e)}
                  className="inline-flex items-center gap-1 font-medium text-[#16382c] hover:underline"
                >
                  <span>SEO Project Matrix</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#16382c] hover:underline"
                >
                  <span>XML Sitemap</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#16382c] hover:underline"
                >
                  <span>Robots.txt</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <span className="text-xs text-[#707d75] block pt-2">
                  Optimized for Search Engine & Answer Engine Extraction (AEO).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer Section */}
        <div className="pt-8 border-t border-[#dfd7c6] text-xs text-[#627068] leading-relaxed">
          <p className="font-semibold text-[#16382c] mb-1">Educational & Academic Disclaimer</p>
          <p>
            MoneyWise Starter is an educational publication developed for a college Search Engine Optimization (SEO) and Answer Engine Optimization (AEO) academic coursework project. All content is published solely for educational, illustrative, and informational purposes and does not constitute individualized financial, investment, tax, or legal advice. Financial laws, banking deposit insurance limits, and credit bureau scoring algorithms vary significantly by country and regulatory authority. Always consult with a licensed, certified financial advisor or appropriate authority before making significant monetary commitments.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-[#e2dacf] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#728078]">
          <p>© 2026 MoneyWise Starter. Built for educational excellence.</p>
          <p className="flex items-center gap-3">
            <span>Clean Editorial Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Zero-AI Slop Discipline</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Snowflake, 
  ExternalLink,
  ShieldAlert,
  ArrowLeft
} from 'lucide-react';

interface DebtManagementViewProps {
  onNavigate: (path: string) => void;
}

export const DebtManagementView: React.FC<DebtManagementViewProps> = ({ onNavigate }) => {
  const [selectedStrategy, setSelectedStrategy] = useState<'avalanche' | 'snowball'>('avalanche');

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Debt Management for Beginners: Avalanche vs. Snowball Payoff Strategies',
    name: 'Debt Management Strategies for Beginners',
    description: 'Learn how to manage and eliminate debt as a beginner. Compare the Debt Avalanche and Debt Snowball methods, understand interest costs, and reclaim cash flow.',
    url: 'https://moneywisestarter.edu/debt-management/',
    author: {
      '@type': 'Organization',
      name: 'MoneyWise Starter Editorial Team',
      url: 'https://moneywisestarter.edu/'
    },
    publisher: {
      '@type': 'Organization',
      name: 'MoneyWise Starter',
      url: 'https://moneywisestarter.edu/'
    }
  };

  return (
    <>
      <SEOHead
        title="Debt Management for Beginners: Avalanche vs. Snowball Guide | MoneyWise Starter"
        description="Comprehensive debt management guide for beginners. Learn how to pay down consumer debt, compare Avalanche vs Snowball methods, and avoid predatory loans."
        canonicalUrl="https://moneywisestarter.edu/debt-management/"
        ogType="article"
        jsonLd={jsonLdData}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Debt Management & Payoff Strategies' }
          ]}
          onNavigate={onNavigate}
        />

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#65756d]">
            <span className="font-semibold text-[#16382c] uppercase tracking-wider">
              Debt Management Guide
            </span>
            <span aria-hidden="true">·</span>
            <span>6 min read</span>
            <span>·</span>
            <span>Educational Curriculum</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#16382c] tracking-tight leading-[1.18] text-balance">
            Debt Management for Beginners: Strategies to Accelerate Payoff and Reclaim Cash Flow
          </h1>

          <p className="text-lg font-serif italic text-[#4e5c54] leading-relaxed">
            Eliminating high-interest consumer debt is the single most mathematically effective investment a beginner can make.
          </p>
        </header>

        {/* Direct Answer Box for Debt Elimination */}
        <div className="bg-[#f9f7f2] border-2 border-[#16382c] rounded-xl p-5 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#16382c] mb-1.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16382c]" />
            <span>Core Principle of Debt Elimination</span>
          </div>
          <p className="text-sm font-medium text-[#1c2c24] leading-relaxed">
            Managing debt as a beginner requires separating high-interest revolving balances (such as credit cards with 20%+ APR) from lower-interest fixed installment loans. Beginners should maintain minimum payments on all accounts while directing every surplus dollar toward one prioritized balance using either the mathematically optimal Avalanche method or the psychologically empowering Snowball method.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-12 text-[#2d3832] text-base leading-[1.8] font-sans">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#16382c]">
              Understanding Good Debt vs. Bad Debt
            </h2>
            <p className="text-[#3b4740]">
              Not all debt carries identical consequences for your financial health. In personal finance, debt is evaluated based on two criteria: the annual interest rate (APR) and whether the borrowed capital acquires an appreciating asset or is consumed immediately.
            </p>
            <p className="text-[#3b4740]">
              <strong>High-Interest Consumer Debt (Dangerous):</strong> Revolving credit card balances, payday advances, and high-interest personal loans that charge 18% to 30%+ APR. Carrying balances at these rates drains your monthly income, as the majority of your payment goes toward financing charges rather than reducing principal.
            </p>
            <p className="text-[#3b4740]">
              <strong>Low-Rate Structured Installment Debt (Manageable):</strong> Fixed-rate mortgages, government student loans, or low-interest auto loans. While all debt represents a future obligation, low-rate installment debt has predictable monthly schedules and does not compound destructively like unpaid credit cards.
            </p>
          </section>

          {/* Interactive Strategy Comparison: Avalanche vs Snowball */}
          <section className="space-y-6 pt-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#16382c]">
              The Two Proven Payoff Strategies: Avalanche vs. Snowball
            </h2>
            <p className="text-[#3b4740]">
              Choose the method that best aligns with your behavioral psychology:
            </p>

            <div className="flex items-center gap-2 p-1 bg-[#ede7db] rounded-lg max-w-sm">
              <button
                type="button"
                onClick={() => setSelectedStrategy('avalanche')}
                className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  selectedStrategy === 'avalanche'
                    ? 'bg-[#16382c] text-white shadow-sm'
                    : 'text-[#4e5c54] hover:text-[#16382c]'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Debt Avalanche</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedStrategy('snowball')}
                className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  selectedStrategy === 'snowball'
                    ? 'bg-[#16382c] text-white shadow-sm'
                    : 'text-[#4e5c54] hover:text-[#16382c]'
                }`}
              >
                <Snowflake className="w-3.5 h-3.5" />
                <span>Debt Snowball</span>
              </button>
            </div>

            {selectedStrategy === 'avalanche' ? (
              <div className="bg-[#f5efe4] border border-[#ded6c7] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#8b6b23] font-semibold text-sm">
                  <Flame className="w-4 h-4" />
                  <span>The Debt Avalanche Method (Mathematically Optimal)</span>
                </div>
                <p className="text-sm text-[#3b4740] leading-relaxed">
                  <strong>How it works:</strong> You list all debts from the highest interest rate (APR) to the lowest interest rate, regardless of balance size. Pay minimums on everything, and channel all extra money into the balance with the steepest interest charge.
                </p>
                <p className="text-xs text-[#5f6e65] leading-relaxed">
                  <strong>Why it wins:</strong> Saves the most money in total interest charges and mathematically accelerates your debt-free date the quickest.
                </p>
              </div>
            ) : (
              <div className="bg-[#f5efe4] border border-[#ded6c7] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#16382c] font-semibold text-sm">
                  <Snowflake className="w-4 h-4" />
                  <span>The Debt Snowball Method (Behaviorally Empowering)</span>
                </div>
                <p className="text-sm text-[#3b4740] leading-relaxed">
                  <strong>How it works:</strong> You list all debts from the smallest balance to the largest balance, regardless of interest rates. Pay minimums on everything, and target the smallest balance first with every spare dollar until it is wiped out.
                </p>
                <p className="text-xs text-[#5f6e65] leading-relaxed">
                  <strong>Why it wins:</strong> Quick early psychological victories build immense motivation and eliminate minimum payment line items from your budget fast.
                </p>
              </div>
            )}
          </section>

          {/* Sample Debt Comparison Table */}
          <section className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#16382c]">
              Sample Debt Payoff Order Comparison
            </h3>
            <div className="overflow-x-auto rounded-lg border border-[#ded6c7] bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#f0eae0] border-b border-[#ded6c7] text-[#16382c]">
                    <th className="p-3 font-semibold">Debt Account</th>
                    <th className="p-3 font-semibold">Balance</th>
                    <th className="p-3 font-semibold">Interest Rate (APR)</th>
                    <th className="p-3 font-semibold">Avalanche Priority</th>
                    <th className="p-3 font-semibold">Snowball Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee7da]">
                  <tr className="hover:bg-[#faf7f2]">
                    <td className="p-3 font-medium text-[#16382c]">Store Retail Card</td>
                    <td className="p-3">$850</td>
                    <td className="p-3 font-mono font-semibold text-[#8b6b23]">28.99%</td>
                    <td className="p-3 font-bold text-[#16382c]">#1 (Highest APR)</td>
                    <td className="p-3 font-bold text-[#16382c]">#1 (Smallest Balance)</td>
                  </tr>
                  <tr className="hover:bg-[#faf7f2]">
                    <td className="p-3 font-medium text-[#16382c]">Major Bank Credit Card</td>
                    <td className="p-3">$3,400</td>
                    <td className="p-3 font-mono">22.49%</td>
                    <td className="p-3">#2</td>
                    <td className="p-3">#3</td>
                  </tr>
                  <tr className="hover:bg-[#faf7f2]">
                    <td className="p-3 font-medium text-[#16382c]">Medical Bill Balance</td>
                    <td className="p-3">$1,200</td>
                    <td className="p-3 font-mono">0.00% (Plan)</td>
                    <td className="p-3">#4</td>
                    <td className="p-3">#2</td>
                  </tr>
                  <tr className="hover:bg-[#faf7f2]">
                    <td className="p-3 font-medium text-[#16382c]">Auto Loan Note</td>
                    <td className="p-3">$6,500</td>
                    <td className="p-3 font-mono">6.50%</td>
                    <td className="p-3">#3</td>
                    <td className="p-3">#4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Negotiating and Seeking Assistance */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#16382c]">
              Negotiating Rates and Working with Non-Profit Counseling
            </h2>
            <p className="text-[#3b4740]">
              If you have maintained an on-time payment record for at least six to twelve months, you can call your credit card issuer and ask politely for a temporary or permanent APR reduction. Many credit card companies have hardship or customer retention programs that reduce interest rates from 26% to 15% or lower upon request.
            </p>
            <p className="text-[#3b4740]">
              If your debt exceeds 40% of your annual income and minimum payments have become impossible, seek guidance from an accredited non-profit credit counseling organization (such as the National Foundation for Credit Counseling — NFCC). Accredited non-profits can help arrange a Debt Management Plan (DMP) that consolidates payments and caps interest without the damaging effects of predatory debt settlement companies.
            </p>
          </section>

          {/* Internal Links Navigation */}
          <section className="pt-8 border-t border-[#ded6c7] space-y-3">
            <h3 className="text-base font-serif font-bold text-[#16382c]">
              Connected Educational Lessons
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#16382c]" />
                <a
                  href="/credit-score-basics/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/credit-score-basics/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-semibold text-[#16382c] hover:underline"
                >
                  Credit Score Basics Guide
                </a>
                <span className="text-xs text-[#63726a]">— Understand how lowering balances directly improves your credit utilization ratio.</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#16382c]" />
                <a
                  href="/budgeting-for-beginners/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/budgeting-for-beginners/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-semibold text-[#16382c] hover:underline"
                >
                  Budgeting for Beginners
                </a>
                <span className="text-xs text-[#63726a]">— Build a monthly cash flow system to fund your debt payoff goals.</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#16382c]" />
                <a
                  href="/emergency-fund-guide/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/emergency-fund-guide/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-semibold text-[#16382c] hover:underline"
                >
                  Emergency Fund Guide
                </a>
                <span className="text-xs text-[#63726a]">— Why saving an initial $1,000 buffer prevents new credit card debt while paying off old balances.</span>
              </div>
            </div>
          </section>
        </div>

        {/* Back Button */}
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

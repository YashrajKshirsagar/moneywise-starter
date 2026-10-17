import React, { useState } from 'react';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

export const CompoundInterestCalculator: React.FC = () => {
  const [initialDeposit, setInitialDeposit] = useState<number>(1000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(200);
  const [annualReturn, setAnnualReturn] = useState<number>(7);
  const [years, setYears] = useState<number>(20);

  // Compound interest calculation
  const months = years * 12;
  const monthlyRate = annualReturn / 100 / 12;

  let balance = initialDeposit;
  let totalDeposited = initialDeposit;

  for (let i = 0; i < months; i++) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
    totalDeposited += monthlyContribution;
  }

  const totalInterestEarned = Math.max(0, Math.round(balance - totalDeposited));
  const finalBalance = Math.round(balance);

  // Generate milestone data points
  const milestones = [5, 10, 15, 20, 25, 30].filter((y) => y <= Math.max(years, 30));

  return (
    <div className="my-10 bg-[#f7f3ec] border border-[#dfd7c6] rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-[#16382c] text-white rounded-lg">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#16382c]">
            Interactive Compound Growth Simulator
          </h3>
          <p className="text-xs text-[#5f6d65]">
            Experience how regular monthly contributions and time compound into wealth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Initial Principal ($):
          </label>
          <input
            type="number"
            min={0}
            step={100}
            value={initialDeposit || ''}
            onChange={(e) => setInitialDeposit(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Monthly Contribution ($):
          </label>
          <input
            type="number"
            min={0}
            step={25}
            value={monthlyContribution || ''}
            onChange={(e) => setMonthlyContribution(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Est. Annual Return (%):
          </label>
          <input
            type="number"
            min={1}
            max={15}
            step={0.5}
            value={annualReturn || ''}
            onChange={(e) => setAnnualReturn(Math.max(0.1, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Time Horizon (Years):
          </label>
          <input
            type="number"
            min={1}
            max={45}
            step={1}
            value={years || ''}
            onChange={(e) => setYears(Math.max(1, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>
      </div>

      {/* Projection Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-[#e4ded2] p-4 rounded-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5a6860] block mb-1">
            Total Money Contributed
          </span>
          <p className="text-2xl font-mono font-bold text-[#16382c]">
            ${Math.round(totalDeposited).toLocaleString()}
          </p>
          <p className="text-xs text-[#73827a] mt-1">
            Actual cash deposited from your earnings.
          </p>
        </div>

        <div className="bg-white border border-[#e4ded2] p-4 rounded-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#b38a38] block mb-1">
            Compound Growth Earned
          </span>
          <p className="text-2xl font-mono font-bold text-[#b38a38]">
            +${totalInterestEarned.toLocaleString()}
          </p>
          <p className="text-xs text-[#73827a] mt-1">
            Money generated purely from reinvested investment returns.
          </p>
        </div>

        <div className="bg-[#16382c] text-white p-4 rounded-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#d2ded8] block mb-1">
            Estimated Total Portfolio
          </span>
          <p className="text-2xl font-mono font-bold text-white">
            ${finalBalance.toLocaleString()}
          </p>
          <p className="text-xs text-[#a3b8ad] mt-1">
            Projected value after {years} years of patient compounding.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-[#5a6860] pt-2 border-t border-[#e2dacf]">
        <CheckCircle2 className="w-4 h-4 text-[#16382c] shrink-0 mt-0.5" />
        <p>
          <strong>Educational Reality Check:</strong> Historical stock market returns fluctuate year to year. A nominal 7% annual estimate reflects the long-term historical inflation-adjusted average of broad-market benchmarks like the S&P 500, but returns are never guaranteed in any individual year.
        </p>
      </div>
    </div>
  );
};

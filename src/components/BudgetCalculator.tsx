import React, { useState } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

export const BudgetCalculator: React.FC = () => {
  const [netIncome, setNetIncome] = useState<number>(3200);

  const needsAmount = Math.round(netIncome * 0.5);
  const wantsAmount = Math.round(netIncome * 0.3);
  const savingsAmount = Math.round(netIncome * 0.2);

  return (
    <div className="my-10 bg-[#f7f3ec] border border-[#dfd7c6] rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-[#16382c] text-white rounded-lg">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#16382c]">
            Interactive 50/30/20 Budget Calculator
          </h3>
          <p className="text-xs text-[#5f6d65]">
            Calculate your recommended monthly baseline spending targets.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="monthly-net-income"
          className="block text-sm font-semibold text-[#16382c] mb-2"
        >
          Your Monthly Take-Home Pay (Net Income):
        </label>
        <div className="relative max-w-xs">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base font-semibold text-[#5f6d65]">
            $
          </span>
          <input
            id="monthly-net-income"
            type="number"
            min={500}
            max={50000}
            step={50}
            value={netIncome || ''}
            onChange={(e) => setNetIncome(Math.max(0, Number(e.target.value)))}
            className="w-full pl-8 pr-4 py-2.5 bg-white border border-[#cfc6b5] rounded-md text-lg font-mono font-semibold text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>
      </div>

      {/* Target Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Needs (50%) */}
        <div className="bg-white border border-[#e4ded2] p-5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#16382c]">
              Essential Needs (50%)
            </span>
          </div>
          <p className="text-2xl font-mono font-bold text-[#16382c]">
            ${needsAmount.toLocaleString()}
          </p>
          <p className="text-xs text-[#63726a] mt-2 leading-relaxed">
            Rent, basic groceries, utilities, basic health supplies, and required transit to work.
          </p>
        </div>

        {/* Wants (30%) */}
        <div className="bg-white border border-[#e4ded2] p-5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#b38a38]">
              Flexible Wants (30%)
            </span>
          </div>
          <p className="text-2xl font-mono font-bold text-[#b38a38]">
            ${wantsAmount.toLocaleString()}
          </p>
          <p className="text-xs text-[#63726a] mt-2 leading-relaxed">
            Dining out, leisure, video streaming subscriptions, hobbies, gifts, and personal treats.
          </p>
        </div>

        {/* Savings & Debt (20%) */}
        <div className="bg-white border border-[#e4ded2] p-5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#355e4b]">
              Savings & Debt (20%)
            </span>
          </div>
          <p className="text-2xl font-mono font-bold text-[#355e4b]">
            ${savingsAmount.toLocaleString()}
          </p>
          <p className="text-xs text-[#63726a] mt-2 leading-relaxed">
            Emergency cash reserve buffer, extra debt principal payments, and retirement accounts.
          </p>
        </div>
      </div>

      {/* Proportion visual bar */}
      <div className="w-full h-3 bg-[#e4ded2] rounded-full overflow-hidden flex mb-4">
        <div className="bg-[#16382c] h-full" style={{ width: '50%' }} title="Needs: 50%" />
        <div className="bg-[#b38a38] h-full" style={{ width: '30%' }} title="Wants: 30%" />
        <div className="bg-[#355e4b] h-full" style={{ width: '20%' }} title="Savings: 20%" />
      </div>

      <div className="flex items-start gap-2 text-xs text-[#5a6860] pt-2 border-t border-[#e2dacf]">
        <CheckCircle2 className="w-4 h-4 text-[#16382c] shrink-0 mt-0.5" />
        <p>
          <strong>Beginner Rule of Thumb:</strong> If your essential housing costs exceed 50% in a high-cost area, adjust your ratio to 60/20/20 or 70/15/15 rather than abandoning the framework completely.
        </p>
      </div>
    </div>
  );
};

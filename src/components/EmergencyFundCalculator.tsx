import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export const EmergencyFundCalculator: React.FC = () => {
  const [rent, setRent] = useState<number>(1100);
  const [groceries, setGroceries] = useState<number>(350);
  const [utilities, setUtilities] = useState<number>(180);
  const [transit, setTransit] = useState<number>(150);
  const [debtMin, setDebtMin] = useState<number>(120);

  const monthlyEssentialTotal = rent + groceries + utilities + transit + debtMin;
  const threeMonths = monthlyEssentialTotal * 3;
  const sixMonths = monthlyEssentialTotal * 6;

  return (
    <div className="my-10 bg-[#f7f3ec] border border-[#dfd7c6] rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-[#16382c] text-white rounded-lg">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#16382c]">
            Interactive Emergency Fund Target Estimator
          </h3>
          <p className="text-xs text-[#5f6d65]">
            Calculate your exact essential survival baseline and safety net tiers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Housing / Rent ($/mo):
          </label>
          <input
            type="number"
            min={0}
            step={25}
            value={rent || ''}
            onChange={(e) => setRent(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Baseline Groceries ($/mo):
          </label>
          <input
            type="number"
            min={0}
            step={25}
            value={groceries || ''}
            onChange={(e) => setGroceries(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Essential Utilities ($/mo):
          </label>
          <input
            type="number"
            min={0}
            step={10}
            value={utilities || ''}
            onChange={(e) => setUtilities(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Work Transit / Gas ($/mo):
          </label>
          <input
            type="number"
            min={0}
            step={10}
            value={transit || ''}
            onChange={(e) => setTransit(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#16382c] mb-1">
            Minimum Debt Payments ($/mo):
          </label>
          <input
            type="number"
            min={0}
            step={10}
            value={debtMin || ''}
            onChange={(e) => setDebtMin(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#cfc6b5] rounded-md font-mono text-sm text-[#16382c] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
          />
        </div>

        <div className="bg-[#ede7db] p-3 rounded-md flex flex-col justify-center">
          <span className="text-xs text-[#526058] font-medium">1-Month Baseline:</span>
          <span className="text-lg font-mono font-bold text-[#16382c]">
            ${monthlyEssentialTotal.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Target Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white border border-[#e4ded2] p-4 rounded-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#b38a38] block mb-1">
            Milestone 1: Starter Buffer
          </span>
          <p className="text-2xl font-mono font-bold text-[#16382c]">$1,000</p>
          <p className="text-xs text-[#63726a] mt-1">
            First priority before tackling aggressive debt. Handles flat tires and sudden minor medical copays.
          </p>
        </div>

        <div className="bg-white border border-[#e4ded2] p-4 rounded-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#16382c] block mb-1">
            Milestone 2: 3-Month Fund
          </span>
          <p className="text-2xl font-mono font-bold text-[#16382c]">
            ${threeMonths.toLocaleString()}
          </p>
          <p className="text-xs text-[#63726a] mt-1">
            Standard recommendation for dual-income households with predictable W-2 employment.
          </p>
        </div>

        <div className="bg-white border border-[#e4ded2] p-4 rounded-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#355e4b] block mb-1">
            Milestone 3: 6-Month Fund
          </span>
          <p className="text-2xl font-mono font-bold text-[#355e4b]">
            ${sixMonths.toLocaleString()}
          </p>
          <p className="text-xs text-[#63726a] mt-1">
            Recommended for single earners, freelancers, contractors, or commission-dependent workers.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-[#5a6860] pt-2 border-t border-[#e2dacf]">
        <CheckCircle2 className="w-4 h-4 text-[#16382c] shrink-0 mt-0.5" />
        <p>
          <strong>Account Recommendation:</strong> Deposit this balance in a liquid High-Yield Savings Account (HYSA) with FDIC or NCUA insurance. Do not lock it in illiquid certificates or volatile equities.
        </p>
      </div>
    </div>
  );
};

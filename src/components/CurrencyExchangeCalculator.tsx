
'use client';

import React, { useState } from 'react';

interface Rate {
  A: number;
  B: number;
}

const CurrencyExchangeCalculator: React.FC = () => {
  const [baseRate, setBaseRate] = useState<Rate>({ A: 1, B: 1 });
  const [exchangeRate, setExchangeRate] = useState<Rate>({ A: 1, B: 1 });
  const [fee, setFee] = useState<number | null>(null);

  const calculateFee = () => {
    if (baseRate.A === 0 || exchangeRate.A === 0) {
      setFee(null);
      return;
    }
    const calculatedFee = 1 - (exchangeRate.B * baseRate.A) / (exchangeRate.A * baseRate.B);
    setFee(calculatedFee);
  };

  return (
    <div className="p-4 sm:p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">Currency Exchange Fee Calculator</h1>
      <div className="mb-4 text-center">
        <p className="text-base sm:text-lg font-semibold">Formula:</p>
        <p className="font-mono text-sm sm:text-base">Fee = 1 - (B&apos;/A&apos;)/(B/A)</p>
      </div>
      <div className="mb-4">
        <h2 className="text-base sm:text-lg font-semibold mb-2">Base Rate (A -> B)</h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="number"
            value={baseRate.A}
            onChange={(e) => setBaseRate({ ...baseRate, A: parseFloat(e.target.value) || 0 })}
            className="border rounded px-2 py-1 w-full sm:w-1/2"
            placeholder="Currency A"
          />
          <input
            type="number"
            value={baseRate.B}
            onChange={(e) => setBaseRate({ ...baseRate, B: parseFloat(e.target.value) || 0 })}
            className="border rounded px-2 py-1 w-full sm:w-1/2"
            placeholder="Currency B"
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-base sm:text-lg font-semibold mb-2">Exchange Rate (A&apos; -> B&apos;)</h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="number"
            value={exchangeRate.A}
            onChange={(e) => setExchangeRate({ ...exchangeRate, A: parseFloat(e.target.value) || 0 })}
            className="border rounded px-2 py-1 w-full sm:w-1/2"
            placeholder="Currency A'"
          />
          <input
            type="number"
            value={exchangeRate.B}
            onChange={(e) => setExchangeRate({ ...exchangeRate, B: parseFloat(e.target.value) || 0 })}
            className="border rounded px-2 py-1 w-full sm:w-1/2"
            placeholder="Currency B'"
          />
        </div>
      </div>
      <button
        onClick={calculateFee}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Calculate Fee
      </button>
      {fee !== null && (
        <div className="mt-4 text-center">
          <h2 className="text-base sm:text-lg font-semibold">Calculated Fee:</h2>
          <p className="text-lg sm:text-xl">{(fee * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyExchangeCalculator;

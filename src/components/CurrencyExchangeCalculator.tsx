
'use client';  // この行を追加

import React, { useState } from 'react';
import UserCounter from './UserCounter';

interface Rate {
  A: number;
  B: number;
}

const CurrencyExchangeCalculator: React.FC = () => {
  const [baseRate, setBaseRate] = useState<Rate>({ A: 1, B: 1 });
  const [exchangeRate, setExchangeRate] = useState<Rate>({ A: 1, B: 1 });
  const [fee, setFee] = useState<number>(0);

  const calculateFee = () => {
    const baseFee = baseRate.B / baseRate.A;
    const actualFee = exchangeRate.B / exchangeRate.A;
    const calculatedFee = (baseFee - actualFee) / baseFee;
    setFee(calculatedFee);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Currency Exchange Fee Calculator</h1>
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold">Formula:</p>
        <p className="font-mono">Fee = 1 - (B'/A')/(B/A)</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Base Rate (A → B)</h2>
        <div className="flex space-x-2">
          <input
            type="number"
            value={baseRate.A}
            onChange={(e) => setBaseRate({ ...baseRate, A: parseFloat(e.target.value) })}
            className="border rounded px-2 py-1 w-1/2"
            placeholder="Currency A"
          />
          <input
            type="number"
            value={baseRate.B}
            onChange={(e) => setBaseRate({ ...baseRate, B: parseFloat(e.target.value) })}
            className="border rounded px-2 py-1 w-1/2"
            placeholder="Currency B"
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Exchange Rate (A' → B')</h2>
        <div className="flex space-x-2">
          <input
            type="number"
            value={exchangeRate.A}
            onChange={(e) => setExchangeRate({ ...exchangeRate, A: parseFloat(e.target.value) })}
            className="border rounded px-2 py-1 w-1/2"
            placeholder="Currency A'"
          />
          <input
            type="number"
            value={exchangeRate.B}
            onChange={(e) => setExchangeRate({ ...exchangeRate, B: parseFloat(e.target.value) })}
            className="border rounded px-2 py-1 w-1/2"
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
      {fee !== 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Calculated Fee Rate:</h2>
          <p className="text-xl">{fee.toFixed(6)} </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyExchangeCalculator;

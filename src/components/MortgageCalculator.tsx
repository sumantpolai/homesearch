import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Calendar, Percent } from 'lucide-react';
import Button from './ui/Button';

const MortgageCalculator: React.FC = () => {
  const [homeValue, setHomeValue] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(4.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    calculateMortgage();
  }, [homeValue, downPayment, loanTerm, interestRate]);

  const calculateMortgage = () => {
    const principal = homeValue - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const x = Math.pow(1 + monthlyRate, numberOfPayments);
      const monthly = (principal * x * monthlyRate) / (x - 1);
      setMonthlyPayment(monthly);
    } else {
      setMonthlyPayment(0);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-2">
              <Calculator className="h-6 w-6 text-blue-900 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Mortgage Calculator</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plan your finances with our easy-to-use mortgage calculator and estimate your monthly payments
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">Home Value</label>
                    <span className="text-blue-900 font-medium">{formatCurrency(homeValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="10000"
                    value={homeValue}
                    onChange={(e) => setHomeValue(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$50,000</span>
                    <span>$2,000,000</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">Down Payment</label>
                    <span className="text-blue-900 font-medium">{formatCurrency(downPayment)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={homeValue * 0.5}
                    step="5000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$0</span>
                    <span>{formatCurrency(homeValue * 0.5)}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">Loan Term</label>
                    <span className="text-blue-900 font-medium">{loanTerm} years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="5"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5 years</span>
                    <span>30 years</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">Interest Rate</label>
                    <span className="text-blue-900 font-medium">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1%</span>
                    <span>10%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Your Estimated Payment</h3>
                  
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-blue-900 mb-2">
                      {monthlyPayment ? formatCurrency(monthlyPayment) : '$0'}<span className="text-sm text-gray-500 font-normal">/month</span>
                    </p>
                    <p className="text-gray-600 text-sm">Principal & Interest</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-blue-900 mr-2" />
                        <span className="text-gray-700">Loan Amount</span>
                      </div>
                      <span className="font-medium">{formatCurrency(homeValue - downPayment)}</span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-blue-900 mr-2" />
                        <span className="text-gray-700">Loan Term</span>
                      </div>
                      <span className="font-medium">{loanTerm} years</span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <Percent className="w-4 h-4 text-blue-900 mr-2" />
                        <span className="text-gray-700">Interest Rate</span>
                      </div>
                      <span className="font-medium">{interestRate}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-2">
                  <Button variant="secondary" fullWidth>
                    Get Pre-Approved
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    *This is only an estimate. Contact a mortgage specialist for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
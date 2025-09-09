"use client";

import React, { useState, useEffect } from "react";

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  unit = "",
}) => (
  <div>
    <label className="flex justify-between items-center text-gray-700 font-medium">
      <span>{label}</span>
      <span className="text-gray-900 font-bold">{format(value)}</span>
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
    />
  </div>
);


export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [principalAndInterest, setPrincipalAndInterest] = useState(0);
  const [propertyTax, setPropertyTax] = useState(0);
  const [homeInsurance, setHomeInsurance] = useState(0);

  useEffect(() => {
    const downPaymentAmount = homePrice * (downPayment / 100);
    const principal = homePrice - downPaymentAmount;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPropertyTax = (homePrice * 0.011) / 12;
    const monthlyHomeInsurance = (homePrice * 0.005) / 12;

    let pni = 0;
    if (principal > 0 && monthlyInterestRate > 0) {
      pni =
        (principal *
          (monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    }

    const totalMonthlyPayment = pni + monthlyPropertyTax + monthlyHomeInsurance;

    setPrincipalAndInterest(pni);
    setPropertyTax(monthlyPropertyTax);
    setHomeInsurance(monthlyHomeInsurance);
    setMonthlyPayment(totalMonthlyPayment);
  }, [homePrice, downPayment, loanTerm, interestRate]);

  const chartData = [
    {
      name: "Principal & interest",
      value: principalAndInterest,
      color: "text-green-600",
      stroke: "stroke-green-600",
    },
    {
      name: "Property tax",
      value: propertyTax,
      color: "text-sky-500",
      stroke: "stroke-sky-500",
    },
    {
      name: "Home insurance",
      value: homeInsurance,
      color: "text-green-400",
      stroke: "stroke-green-400",
    },
  ];
  const circumference = 2 * Math.PI * 45;

  let accumulatedOffset = 0;
  const chartSegments = chartData.map((item) => {
    const percentage = (item.value / monthlyPayment) * 100;
    const strokeDashoffset =
      circumference - (accumulatedOffset / 100) * circumference;
    accumulatedOffset += percentage;
    return {
      ...item,
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: strokeDashoffset,
    };
  });
  const formatCurrency = (val) => `$${Math.round(val).toLocaleString()}`;
  const formatPercent = (val) => `${val}%`;

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Mortgage Calculator
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Estimate your monthly mortgage payment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
            <Slider
              label="Home price"
              value={homePrice}
              min={50000}
              max={2000000}
              step={1000}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              format={formatCurrency}
            />
            <Slider
              label="Down payment"
              value={downPayment}
              min={0}
              max={100}
              step={1}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              format={formatPercent}
            />
            <Slider
              label="Loan term"
              value={loanTerm}
              min={10}
              max={30}
              step={5}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              format={(val) => `${val} years`}
            />
            <Slider
              label="Interest rate"
              value={interestRate}
              min={2}
              max={12}
              step={0.1}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              format={formatPercent}
            />

            <div>
              <label className="text-gray-700 font-medium">Zip code</label>
              <input
                type="text"
                defaultValue="94105"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>


          <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-24">
            <h2 className="text-lg font-medium text-gray-600">
              Estimated monthly payment
            </h2>
            <p className="text-5xl font-bold text-gray-900 mt-2">
              {formatCurrency(monthlyPayment)}
            </p>

            <div className="mt-8 flex justify-center">
              <svg
                width="200"
                height="200"
                viewBox="0 0 100 100"
                className="-rotate-90"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="stroke-gray-200"
                  strokeWidth="10"
                  fill="transparent"
                />
                {chartSegments.map((segment, index) => (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="45"
                    className={segment.stroke}
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={segment.strokeDasharray}
                    strokeDashoffset={segment.strokeDashoffset}
                  />
                ))}
              </svg>
            </div>

            <ul className="mt-8 space-y-4">
              {chartData.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="flex items-center">
                    <span
                      className={`w-3 h-3 rounded-full mr-3 ${item.color.replace(
                        "text-",
                        "bg-"
                      )}`}
                    ></span>
                    <span className={`font-medium ${item.color}`}>
                      {item.name}
                    </span>
                  </span>
                  <span className="font-semibold text-gray-800">
                    {formatCurrency(item.value)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

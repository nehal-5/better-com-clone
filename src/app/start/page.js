"use client";

import { useState } from "react";
import Link from "next/link";
const RadioOption = ({
  id,
  name,
  value,
  label,
  description,
  checked,
  onChange,
}) => (
  <label
    htmlFor={id}
    className={`relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ${
      checked ? "border-green-600 ring-2 ring-green-600" : "border-gray-300"
    }`}
  >
    <input
      type="radio"
      name={name}
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <span className="flex flex-1">
      <span className="flex flex-col">
        <span className="block text-sm font-medium text-gray-900">{label}</span>
        <span className="mt-1 flex items-center text-sm text-gray-500">
          {description}
        </span>
      </span>
    </span>
    <svg
      className={`h-5 w-5 text-green-600 ${checked ? "block" : "hidden"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  </label>
);

export default function StartPage() {
  const [goal, setGoal] = useState("buy");

  return (
    <div className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-auto text-green-600"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Let's get started
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Answer a few questions to see your personalized rates.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div>
            <label className="text-base font-medium text-gray-900">
              What are you looking to do?
            </label>
            <div className="mt-4 space-y-4">
              <RadioOption
                id="goal-buy"
                name="goal"
                value="buy"
                label="Buy a new home"
                description="Find a great loan for your new property."
                checked={goal === "buy"}
                onChange={(e) => setGoal(e.target.value)}
              />
              <RadioOption
                id="goal-refinance"
                name="goal"
                value="refinance"
                label="Refinance"
                description="Lower your payment or cash out."
                checked={goal === "refinance"}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              Where is the property you're considering?
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="zip"
                id="zip"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3"
                placeholder="Enter a Zip Code"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full border border-transparent bg-green-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Continue
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="#"
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

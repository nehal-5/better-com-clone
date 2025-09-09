"use client";

import React, { useState } from "react";
import Link from "next/link";


const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Mortgage", href: "#" },
    { name: "Calculators", href: "/mortgage-calculator" },
    { name: "About us", href: "/about-us" },
    { name: "Help", href: "#" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-green-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
              </svg>
              <span className="text-2xl font-bold text-gray-900">better</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Log in
            </Link>
            <Link
              href="/start"
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-all"
            >
              Get started
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <Icon
                  path="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  className="w-6 h-6"
                />
              ) : (
                <Icon
                  path="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-600 font-medium px-3 py-2 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t pt-4 space-y-4">
              <Link
                href="#"
                className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2 rounded-md"
              >
                Log in
              </Link>
              <Link
                href="/start"
                className="block text-center bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-all"
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

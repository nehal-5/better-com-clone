import Link from "next/link";

export default function Footer() {
  const sections = [
    {
      title: "Company",
      links: [
        { name: "About us", href: "/about-us" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Help center", href: "#" },
        { name: "Calculators", href: "/mortgage-calculator" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy policy", href: "#" },
        { name: "Terms of use", href: "#" },
        { name: "Licenses", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-8">
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
            <p className="mt-4 text-sm text-gray-500 max-w-sm">
              Better Mortgage Corporation. NMLS #330511.
              <br />&copy; 2025 Better Holdco, Inc. and/or its affiliates.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-sm text-gray-500 text-center">
          <p>
            Making homeownership simpler, faster, and more accessible for all
            Americans.
          </p>
        </div>
      </div>
    </footer>
  );
}

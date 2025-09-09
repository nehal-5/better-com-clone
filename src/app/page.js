import Link from "next/link";

const FeatureIcon = ({ path }) => (
  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  </div>
);

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a7fab2] to-[#31ca39] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The future of homeownership is here
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Buy a home or refinance with a fast, simple, and transparent online
            process. Get pre-approved in minutes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/start"
              className="rounded-full bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors"
            >
              Get started now
            </Link>
            <Link
              href="/mortgage-calculator"
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              See your rates <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 tracking-tight">
            Why choose Better?
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
            <div className="text-center">
              <FeatureIcon path="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Faster process
              </h3>
              <p className="mt-2 text-gray-600">
                Our digital process is built for speed. Get a loan estimate in
                seconds and close on your home faster than the industry average.
              </p>
            </div>

            <div className="text-center">
              <FeatureIcon path="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9A2.25 2.25 0 0018.75 6.75h-1.5a3 3 0 00-3-3h-1.5a3 3 0 00-3 3H7.5A2.25 2.25 0 005.25 9v3" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Lower costs
              </h3>
              <p className="mt-2 text-gray-600">
                We cut out commissions and unnecessary fees, saving our
                customers thousands over the life of their loan.
              </p>
            </div>

            <div className="text-center">
              <FeatureIcon path="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM5.25 9a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Transparent experience
              </h3>
              <p className="mt-2 text-gray-600">
                No hidden fees, no confusing jargon. We provide clear,
                straightforward information so you can make confident decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

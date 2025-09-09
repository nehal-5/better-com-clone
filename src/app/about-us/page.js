import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold leading-7 text-green-600">
            Our mission
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Making homeownership simpler, faster, and more accessible.
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            At Better, we're not just a mortgage company. We're a team of
            innovators, problem-solvers, and customer advocates dedicated to
            transforming the home finance industry from the ground up.
          </p>
        </div>

        <div className="my-20">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
            alt="A team of professionals collaborating around a laptop in a bright, modern workspace."
            width={1471}
            height={735}
            className="aspect-[2/1] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our story
            </h2>
            <p className="mt-6 text-gray-600 leading-7">
              Better was founded in 2016 by a group of friends who were
              frustrated with the traditional mortgage process. It was slow,
              opaque, and filled with unnecessary fees and paperwork. They knew
              there had to be a better way.
            </p>
            <p className="mt-4 text-gray-600 leading-7">
              Using technology, we've rebuilt the mortgage infrastructure to
              create a seamless, digital experience. We've eliminated lender
              fees, agent commissions, and we've made the process radically
              simple. Today, we've funded over $100 billion in loans and are
              just getting started.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500"
              alt="Two colleagues in an office discussing work"
              width={500}
              height={500}
              className="rounded-xl shadow-md w-full h-full object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500"
              alt="Diverse group of coworkers brainstorming"
              width={500}
              height={500}
              className="rounded-xl shadow-md w-full h-full object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500"
              alt="A modern open-plan office space"
              width={500}
              height={250}
              className="rounded-xl shadow-md col-span-2 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

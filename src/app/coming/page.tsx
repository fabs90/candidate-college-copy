n"use client";
import { Footer, Navbar, CTA } from "@/components";
import Link from "next/link";
import Image from "next/image"

const Coming = () => {
  return (
    <main className="bg-white h-full">
      {/* Navbar */}
      <Navbar />

      <section className="flex flex-col w-full h-full lg:pt-[140px] mx-auto md:pt-[165px] pt-[185px] px-5 py-8 mb-14 md:max-w-6xl md:mx-auto justify-center md:items-center relative md:h-3/6 lg:h-screen">
      <Image src={'/decoration/coming.png'} width={0} height={0}
          className='lg: w-[600px] mx-auto' 
          alt='Coming Soon Decoration'
          title='Coming Soon Decoration'
        />

        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-semibold text-primary text-center lg:text-[40px] p-1 text-[30px] md:text-center leading-[50%]">
            Coming Soon
          </h1>

          <p className="text-gray text-sm text-center leading-2 md:pt-4 pt-2 md:text-center w-full lg:text-base md:w-[70%]">
            This still developing Candidaters! <br className="hidden" />
            Stay tuned
          </p>

          <Link
            href="/"
            title="Back to Home"
            about="Back to Home"
            className="bg-secondary text-primary font-medium self-center text-center text-base rounded-full px-20 py-4 text-center justify-center md:self-center self-start cursor-pointer mt-2 md:mt-[11px]"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <section className="bg-primary h-full">
      {/* CTA */}
      <CTA />
      {/* Footer */}
      <Footer />
      </section>
    </main>
  );
};

export default Coming;
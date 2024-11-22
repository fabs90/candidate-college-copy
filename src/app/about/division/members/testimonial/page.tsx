"use client"

// Components
import { Navbar } from "@/components"
import { TestimonialForm } from "@/components/about/division/members/testimonial/TestimonialForm"

export default function TestimonialPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <Navbar isDetail={false} />
      {/* Content */}
      <section className="px-8 lg:py-32 xxsm:py-28">
        {/* Content Title */}
        <div className="flex flex-col gap-1 text-primary">
          {/* Title */}
          <div className="text-[30px] font-bold">
            Add Internship Testimonial
          </div>
          {/* Description */}
          <div className="text-[16px] font-normal">
            Share your story & inspire future interns.
          </div>
        </div>
        {/* Form */}
        <div className="bg-primary w-full mt-8 p-6 rounded-xl">
          {/* Form Title */}
          <div className="flex flex-col gap-1 border-b-2 border-b-[#90A3BF] pb-4">
            {/* Title */}
            <div className="text-[20px] font-normal text-[#FFFFFF]">
              How is your internship at Candidate College?
            </div>
            {/* Description */}
            <div className="text-[14px] font-light text-[#90A3BF]">
              Spill the tea! What did you learn at your internship? Share your biggest takeaways, accomplishments, and how it influenced your career goals.
            </div>
          </div>
          {/* Form Content */}
          <div className="mt-10">
            <TestimonialForm />
          </div>
        </div>
      </section>
    </main>
  )
}
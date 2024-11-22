  "use client";
import { Navbar } from "@/components";

import { FormTemp } from "@/components/about/division/members/add/FormTemp";

export default function AddPage() {
  return (
    <main className="w-full bg-white min-h-screen ">
      <Navbar active="About Us" isDetail={false} />
      <section className="text-primary sm:pt-[120px] pt-[120px] md:px-[70px] px-5 py-48">
        <h1 className="text-[28px] font-bold">Add New Data</h1>
        <span className="text-[14px]">Add new member data</span>

        <div className="bg-primary w-full mt-6 p-6 rounded-lg text-white">
          <div className="border-b-2 pb-4 border-b-[#90A3BF]">
            <h2 className="text-[24px] font-medium">Add Member</h2>
            <span className="text-[14px] text-[#90A3BF]">
              Please fill out all required fields correctly
            </span>
          </div>

          <div className="mt-6">
            <FormTemp />
          </div>
        </div>
      </section>
    </main>
  );
}

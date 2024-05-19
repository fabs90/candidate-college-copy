"use client";

import "driver.js/dist/driver.css";
import styles from "@/styles/border.module.css";
import Input from "@/components/dashboard/profile/Input";
import Textarea from "@/components/dashboard/weekly-report/Textarea";
import Navbar from "@/components/dashboard/Navbar";
import { useState } from "react";
import ButtonSubmit from "@/components/dashboard/weekly-report/ButtonSubmit";
import ButtonDelete from "@/components/dashboard/weekly-report/ButtonDelete";
import useSuccessReport from "@/hooks/useSuccessReport";
import DropInputFile from "@/components/dashboard/profile/DropInputFile";

export default function DashboardStaffPage() {
  const [cover, setCover] = useState<Blob | string>("");
  const { setIsActive } = useSuccessReport();
  return (
    <main>
      <nav className="flex justify-between items-center">
        <h1 className="text-dash-nav font-bold">Profile</h1>
      </nav>
      <section
        className={`${styles.border_section} p-7 bg-[#0D2735] mt-5 rounded-lg`}
      >
        <DropInputFile className="mt-4" value={cover} setValue={setCover} />
        <div className="grid grid-cols-2 gap-5 mt-12">
          <Input value="Uzumaki Naruto" name="name" title="Name" />
          <Input value="Staff" name="position" title="Position" />
          <Input value="Web Development" name="division" title="Division" />
          <Input value="Batch 4" name="batch" title="Batch" />
        </div>

        <div className="flex gap-4 mx-auto max-w-[50%] relative mt-5">
          <ButtonSubmit onClick={() => setIsActive()}>
            Update Profile
          </ButtonSubmit>
        </div>
      </section>
    </main>
  );
}

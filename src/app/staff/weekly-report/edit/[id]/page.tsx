"use client";

import "driver.js/dist/driver.css";
import styles from "@/styles/border.module.css";
import InputDate from "@/components/dashboard/weekly-report/InputDate";
import Textarea from "@/components/dashboard/weekly-report/Textarea";
import Navbar from "@/components/dashboard/Navbar";
import DropInputFile from "@/components/dashboard/weekly-report/DropInputFile";
import { useState } from "react";
import ButtonSubmit from "@/components/dashboard/weekly-report/ButtonSubmit";
import ButtonDelete from "@/components/dashboard/weekly-report/ButtonDelete";
import useSuccessReport from "@/hooks/useSuccessReport";

export default function DashboardStaffPage() {
  const [cover, setCover] = useState<Blob | string>("");
  const { setIsActive } = useSuccessReport();
  return (
    <main>
      <Navbar title="Weekly Report" />
      <section
        className={`${styles.border_section} p-7 bg-[#0D2735] mt-5 rounded-lg`}
      >
        <InputDate />
        <Textarea className="mt-4" />

        <DropInputFile className="mt-4" value={cover} setValue={setCover} />

        <div className="flex gap-4 px-5 relative mt-5">
          <ButtonSubmit onClick={() => setIsActive()}>Edit Report</ButtonSubmit>
          <ButtonDelete onClick={() => setIsActive()}>Delete</ButtonDelete>
        </div>
      </section>
    </main>
  );
}

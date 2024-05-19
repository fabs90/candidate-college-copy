"use client";

import "driver.js/dist/driver.css";
import styles from "@/styles/border.module.css";
import InputDate from "@/components/dashboard/weekly-report/InputDate";
import Textarea from "@/components/dashboard/weekly-report/Textarea";
import Navbar from "@/components/dashboard/Navbar";
import DropInputFile from "@/components/dashboard/weekly-report/DropInputFile";
import { useState } from "react";
import { Button } from "@/components/dashboard/weekly-report/Button";

export default function DashboardStaffPage() {
  const [cover, setCover] = useState<Blob | string>("");
  return (
    <main>
      <Navbar title="Weekly Report" />
      <section
        className={`${styles.border_section} p-7 bg-[#0D2735] mt-5 rounded-lg`}
      >
        <InputDate />
        <Textarea className="mt-4" />

        <DropInputFile className="mt-4" value={cover} setValue={setCover} />

        <div className="w-[40%] mx-auto relative mt-5">
          <Button>Submit Report</Button>
        </div>
      </section>
    </main>
  );
}

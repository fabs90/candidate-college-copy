"use client";

import "driver.js/dist/driver.css";
import styles from "@/styles/border.module.css";

import Navbar from "@/components/dashboard/Navbar";

import { useState } from "react";

import useSuccessReport from "@/hooks/useSuccessReport";
import Select from "@/components/dashboard/Select";
import { staffreport } from "@/data/dummy";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/dashboard/Button";
import ButtonSubmit from "@/components/dashboard/weekly-report/ButtonSubmit";

export default function MyStaffReportPage() {
  const [cover, setCover] = useState<Blob | string>("");
  const { setIsActive } = useSuccessReport();
  const month = [
    { name: "Jun", value: "jun" },
    { name: "Jul", value: "jul" },
    { name: "Aug", value: "aug" },
    { name: "Sep", value: "sep" },
  ];

  const week = [
    { name: "Week 1", value: "Week 1" },
    { name: "Week 2", value: "Week 2" },
    { name: "Week 3", value: "Week 3" },
    { name: "Week 4", value: "Week 4" },
  ];
  return (
    <main>
      <Navbar title="Weekly Report" />
      <section
        className={`${styles.border_section} p-7 bg-[#0D2735] mt-5 rounded-lg`}
      >
        <div className="flex justify-between relative">
          <h3 className="text-xl font-bold">Choose Staff</h3>
          <h4 className="font-bold text-xl">July 2024</h4>
        </div>
        <div className="flex mt-5 gap-5">
          <div className="w-4/12  flex flex-col gap-3">
            {staffreport.map((v, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-3 border-2 items-center ${
                    v.active && "bg-[#164159]"
                  } border-[#164159] rounded-[4px] py-3 px-4`}
                >
                  <Image
                    src={"/assets/image/Avatar.png"}
                    className="w-[44px] aspect-square rounded-full"
                    alt="Staff Profile"
                    height={100}
                    width={100}
                  />
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-medium text-sm">{v.name}</span>
                    <span className="text-[10px] text-grey">{v.jab}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col flex-1 gap-3 max-h-[600px] relative overflow-auto rm-scroll">
            <div className="w-full relative">
              <label
                className="text-white font-medium block"
                htmlFor={"feedback"}
              >
                Your Feedback <span className="text-danger">*</span>
              </label>
              <textarea
                id={"feedback"}
                rows={8}
                className="text-white outline-none text-sm mt-2 w-full  px-[18px] py-4 border rounded-[4px] bg-transparent border-grey"
              ></textarea>
              <div className="flex mt-3 justify-center mx-auto w-[90%]">
                <ButtonSubmit>Sunmit Feedback</ButtonSubmit>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

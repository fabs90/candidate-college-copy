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
          <h3 className="text-xl font-bold">Staff List</h3>
          <div className="flex gap-2">
            <Select data={month} />
            <Select data={week} />
          </div>
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
            <article className="bg-[#164159] p-4 rounded-[4px]">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm text-grey">Wednesday</h4>
                  <h5 className="font-semibold text-white text-base">
                    5 Jun 2024
                  </h5>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Image
                  height={100}
                  width={100}
                  className="w-[80px] h-[56px] object-cover rounded-[4px]"
                  alt="Image Article"
                  src={"/assets/image/Picture.png"}
                />

                <div className="">
                  <p className="font-light text-xs text-grey">
                    Hari ini saya sudah menulis 8000 baris kode, menyelesaikan
                    12 tasks yang diberikan, dan juga mempelajari lebih lanjut
                    mengenai tugas yang kemarin sempat diberikan. Saya
                    rencananya besok akan melanjutkan menulis 16000 baris kode
                    lagi dan menyelesaikan semua task untuk sprint ini.
                  </p>
                  <Link
                    href={"/"}
                    className="text-secondary text-xs font-medium"
                  >
                    Show More
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-[#164159] p-4 rounded-[4px]">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm text-grey">Wednesday</h4>
                  <h5 className="font-semibold text-white text-base">
                    5 Jun 2024
                  </h5>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Image
                  height={100}
                  width={100}
                  className="w-[80px] h-[56px] object-cover rounded-[4px]"
                  alt="Image Article"
                  src={"/assets/image/Picture.png"}
                />

                <div className="">
                  <p className="font-light text-xs text-grey">
                    Hari ini saya sudah menulis 8000 baris kode, menyelesaikan
                    12 tasks yang diberikan, dan juga mempelajari lebih lanjut
                    mengenai tugas yang kemarin sempat diberikan. Saya
                    rencananya besok akan melanjutkan menulis 16000 baris kode
                    lagi dan menyelesaikan semua task untuk sprint ini.
                  </p>
                  <Link
                    href={"/"}
                    className="text-secondary text-xs font-medium"
                  >
                    Show More
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-[#164159] p-4 rounded-[4px]">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm text-grey">Wednesday</h4>
                  <h5 className="font-semibold text-white text-base">
                    5 Jun 2024
                  </h5>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Image
                  height={100}
                  width={100}
                  className="w-[80px] h-[56px] object-cover rounded-[4px]"
                  alt="Image Article"
                  src={"/assets/image/Picture.png"}
                />

                <div className="">
                  <p className="font-light text-xs text-grey">
                    Hari ini saya sudah menulis 8000 baris kode, menyelesaikan
                    12 tasks yang diberikan, dan juga mempelajari lebih lanjut
                    mengenai tugas yang kemarin sempat diberikan. Saya
                    rencananya besok akan melanjutkan menulis 16000 baris kode
                    lagi dan menyelesaikan semua task untuk sprint ini.
                  </p>
                  <Link
                    href={"/"}
                    className="text-secondary text-xs font-medium"
                  >
                    Show More
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-[#164159] p-4 rounded-[4px]">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm text-grey">Wednesday</h4>
                  <h5 className="font-semibold text-white text-base">
                    5 Jun 2024
                  </h5>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Image
                  height={100}
                  width={100}
                  className="w-[80px] h-[56px] object-cover rounded-[4px]"
                  alt="Image Article"
                  src={"/assets/image/Picture.png"}
                />

                <div className="">
                  <p className="font-light text-xs text-grey">
                    Hari ini saya sudah menulis 8000 baris kode, menyelesaikan
                    12 tasks yang diberikan, dan juga mempelajari lebih lanjut
                    mengenai tugas yang kemarin sempat diberikan. Saya
                    rencananya besok akan melanjutkan menulis 16000 baris kode
                    lagi dan menyelesaikan semua task untuk sprint ini.
                  </p>
                  <Link
                    href={"/"}
                    className="text-secondary text-xs font-medium"
                  >
                    Show More
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-[#164159] p-4 rounded-[4px]">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm text-grey">Wednesday</h4>
                  <h5 className="font-semibold text-white text-base">
                    5 Jun 2024
                  </h5>
                </div>
              </div>

              <div className="mt-3">
                <p className="font-light text-xs text-grey">
                  Hari ini saya sudah menulis 8000 baris kode, menyelesaikan 12
                  tasks yang diberikan, dan juga mempelajari lebih lanjut
                  mengenai tugas yang kemarin sempat diberikan. Saya rencananya
                  besok akan melanjutkan menulis 16000 baris kode lagi dan
                  menyelesaikan semua task untuk sprint ini.
                </p>
                <Link href={"/"} className="text-secondary text-xs font-medium">
                  Show More
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

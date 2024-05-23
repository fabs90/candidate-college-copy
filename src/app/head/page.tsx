"use client";
import CompletionReport from "@/components/dashboard/CompletionReport";
import EditReport from "@/components/dashboard/EditReport";
import MyReport from "@/components/dashboard/MyReport";
import Navbar from "@/components/dashboard/Navbar";
import PerformanceFeedback from "@/components/dashboard/PerformanceFeedback";
import PerformanceGrade from "@/components/dashboard/PerformanceGrade";

import "driver.js/dist/driver.css";

import ListStaff from "@/components/dashboard/ListStaff";
import { staff } from "@/data/dummy";

export default function DashboardStaffPage() {
  return (
    <main>
      <Navbar title="Dashboard" />

      <div className="grid grid-cols-[55%_45%] gap-5 mt-5 min-h-screen">
        <div className="flex flex-col gap-5 w-full h-full">
          <div className="flex gap-5">
            <EditReport />
            <CompletionReport />
          </div>

          <ListStaff data={staff} />
          <MyReport />
        </div>
        <div className="flex flex-col w-full  h-full">
          <PerformanceGrade />

          <PerformanceFeedback />
        </div>
      </div>
    </main>
  );
}

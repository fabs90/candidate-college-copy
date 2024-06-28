"use client";

import Navbar from "@/components/dashboard/Navbar";

import "driver.js/dist/driver.css";
// <Select data={month} />;

import MyData from "@/components/dashboard/MyData";
import ListStaff from "@/components/dashboard/c-level/ListStaff";
import MyReport from "@/components/dashboard/c-level/MyReport";

export default function DashboardStaffPage() {
  return (
    <main>
      <Navbar title="Dashboard" />

      <div className="mt-5 min-h-screen">
        <div className="flex  gap-5 w-full h-full">
          <div className="w-8/12">
            <ListStaff root="/c-level" />
          </div>
          <div className="w-4/12">
            <MyData />
          </div>
        </div>
        <MyReport />
      </div>
    </main>
  );
}

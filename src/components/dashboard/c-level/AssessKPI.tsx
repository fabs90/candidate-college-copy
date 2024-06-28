"use client";
import styles from "@/styles/border.module.css";
import Select from "@/components/dashboard/Select";
import scrollbar from "@/styles/scrollbar-custom.module.css";
import useDriver from "@/hooks/useDriver";
import { useState } from "react";
const web = [
  { name: "Web Development", value: "Web Development" },
  { name: "Web Design", value: "Web Design" },
];

export default function AssessKPI() {
  const [menu, setMenu] = useState(web[0].value);
  const { driverObj } = useDriver({ root: "/c-level/division-kpi/add" });
  return (
    <section
      className={`${styles.border_section} p-7 bg-[#0D2735] mt-5 rounded-lg`}
    >
      <div className="flex justify-between items-center relative">
        <h3 className="text-xl font-bold">Choose a Division to Assess KPI</h3>
        <div className="flex gap-4">
          <Select
            value={menu}
            setValue={setMenu}
            id="third-driver-division-clevel-kpi"
            data={web}
          />
          <button
            id="twelvth-driver-division-clevel-kpi"
            onClick={() => {
              driverObj.drive();
            }}
            className="text-sm rounded-[30px] hover:bg-primary py-2 px-6 font-medium text-secondary border border-secondary"
          >
            Show Tutorial
          </button>
        </div>
      </div>
      <div
        id="second-driver-division-clevel-kpi"
        className={` ${scrollbar.scrollCustom} mt-5 w-full relative rounded-lg overflow-x-auto`}
      >
        <table
          className={`${styles.border_table} w-full relative text-center rounded-lg`}
        >
          <colgroup>
            <col />
            <col id="fourth-driver-division-clevel-kpi" />
            <col id="fifth-driver-division-clevel-kpi" />
            <col id="sixth-driver-division-clevel-kpi" />
            <col id="seventh-driver-division-clevel-kpi" />

            <col span={2} id="ninth-driver-division-clevel-kpi" />
          </colgroup>
          <thead className="font-medium">
            <tr>
              <th className="p-3 border-white/30  border-r font-medium">No.</th>
              <th className="p-3 border-white/30  border-x font-medium">
                Key Performance Indicator (KPI)
              </th>
              <th className="p-3 font-medium border-white/30  border-x">
                Weight
              </th>
              <th className="p-3 font-medium border-white/30  border-x">
                Target
              </th>
              <th className="p-3 font-medium border-white/30  border-x">
                End-of-Month Realization
              </th>
              <th className="p-3 font-medium border-white/30  border-x">
                Score
              </th>
              <th className="p-3 font-medium border-white/30  border-l">
                Final Score
              </th>
            </tr>
          </thead>
          <tbody className="bg-primary/60 relative  text-white/60">
            <tr className="">
              <td className="border-white/30 p-3 border-r text-center border-collapse">
                1
              </td>
              <td className="border-white/30 p-3 border-x text-center border-collapse">
                Design Website CC Careers
              </td>
              <td className="border-white/30 p-3 border-x text-center border-collapse">
                10
              </td>
              <td className="border-white/30 p-3 border-x text-center border-collapse">
                100%
              </td>
              <td className="border-white/30 relative   border-x text-center border-collapse">
                <input
                  type="text"
                  placeholder="Click to enter the value"
                  className="bg-transparent outline-secondary text-center absolute inset-0 h-full border-none"
                />
              </td>
              <td className="border-white/30 p-3 border-x text-center border-collapse">
                2
              </td>
              <td className="border-white/30 p-3 border-l text-center border-collapse">
                0
              </td>
            </tr>
            <tr className="">
              <td className="border-white/30 p-3 border-r text-center border-collapse">
                1
              </td>
              <td className="border-white/30 p-3 border-x text-center border-collapse">
                Design Website CC Careers
              </td>
              <td className="border-white/30 p-3 border-x text-center border-collapse">
                10
              </td>
              <td className="border-white/30 p-3 border-x text-center border-collapse">
                100%
              </td>
              <td className="border-white/30 relative   border-x text-center border-collapse">
                <input
                  type="text"
                  placeholder="Click to enter the value"
                  className="bg-transparent outline-secondary text-center absolute inset-0 h-full border-none"
                />
              </td>
              <td className="border-white/30 p-3 border-x text-center border-collapse">
                2
              </td>
              <td className="border-white/30 p-3 border-l text-center border-collapse">
                0
              </td>
            </tr>
          </tbody>
          <tfoot className="bg-primary/60 relative text-white/60">
            <tr>
              <td
                className="border-white/30 text-start p-3 border-r border-t"
                colSpan={2}
              >
                Grand Total
              </td>
              <td className="border-white/30 p-3 border-t border-x">100</td>
              <td
                colSpan={3}
                className="border-white/30 p-3 border-t border-x"
              ></td>
              <td className="border-white/30 p-3 border-t border-l">10</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="w-full flex justify-center mt-8">
        <button
          id="tenth-driver-division-clevel-kpi"
          className="bg-secondary py-4 w-[40%] rounded-[30px] text-primary font-semibold"
        >
          Submit Assessment
        </button>
      </div>
    </section>
  );
}

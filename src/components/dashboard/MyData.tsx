import styles from "@/styles/border.module.css";
import { DataIcon } from "../icons";
export default function MyData() {
  return (
    <section
      id="third-driver"
      className={`${styles.border_section} h-full w-full overflow-hidden flex flex-col justify-between  relative rounded-[8px]  p-4 bg-[#0D2735]`}
    >
      <div className="bg-secondary pl-2 pb-2 flex justify-center items-center   absolute right-0 top-0 rounded-bl-full  w-12 h-12">
        <DataIcon />
      </div>
      <h3 className="font-bold relative text-xl">My Data</h3>
      <div className="flex gap-3 mt-5 relative">
        <div className="bg-primary flex-1   py-3 px-4 rounded-lg">
          <span className="font-medium text-sm block">Total Divisions</span>
          <span className="font-bold text-[40px] mt-2 leading-[56px] block">
            2
          </span>
        </div>
        <div className="bg-primary flex-1  py-3 px-4 rounded-lg">
          <span className="font-medium text-sm block">Total Staffs</span>
          <span className="font-bold text-[40px] leading-[56px] mt-2 block">
            14
          </span>
        </div>
      </div>
    </section>
  );
}
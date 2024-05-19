import styles from "@/styles/border.module.css";
import { EditIcon, TrashIcon } from "../icons";
import Image from "next/image";
import Link from "next/link";
import Select from "./Select";

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

export default function MyReport() {
  return (
    <section
      id="fourth-driver"
      className={`${styles.border_section}  overflow-y-hidden   relative rounded-[8px]  p-5 bg-[#0D2735]`}
    >
      <div className="flex justify-between relative">
        <h4>My Weekly Report</h4>
        <div className="flex gap-4 relative">
          <Select data={month} />
          <Select data={week} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6 overflow-y-auto relative rm-scroll h-[420px]">
        {/* article can edit */}
        <article className="bg-[#164159] p-4 rounded-[4px]">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-sm text-grey">Wednesday</h4>
              <h5 className="font-semibold text-white text-base">5 Jun 2024</h5>
            </div>
            <div className="flex gap-2 items-center">
              <button className="bg-secondary rounded-[4px] p-1">
                <EditIcon />
              </button>
              <button className="bg-danger rounded-[4px] p-1">
                <TrashIcon />
              </button>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="w-2/12">
              <Image
                height={100}
                width={100}
                className="w-full object-cover rounded-[4px]"
                alt="Image Article"
                src={"/assets/image/Picture.png"}
              />
            </div>
            <div className="w-10/12">
              <p className="font-light text-xs text-grey">
                Hari ini saya sudah menulis 8000 baris kode, menyelesaikan 12
                tasks yang diberikan, dan juga mempelajari lebih lanjut mengenai
                tugas yang kemarin sempat diberikan. Saya rencananya besok akan
                melanjutkan menulis 16000 baris kode lagi dan menyelesaikan
                semua task untuk sprint ini.
              </p>
              <Link href={"/"} className="text-secondary text-xs font-medium">
                Show More
              </Link>
            </div>
          </div>
        </article>
        {new Array(5).fill(0).map((_, idx) => {
          return (
            <article key={idx} className="bg-[#164159] p-4 rounded-[4px]">
              <div>
                <h4 className="text-sm text-grey">Wednesday</h4>
                <h5 className="font-semibold text-white text-base">
                  5 Jun 2024
                </h5>
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
          );
        })}
      </div>
    </section>
  );
}

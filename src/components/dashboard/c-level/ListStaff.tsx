import { getDateNow } from "@/utils/getDateNow";
import Image from "next/image";
import styles from "@/styles/border.module.css";
import { FaCheck } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Select from "../Select";

export default function ListStaff({ data }: { data: { name: string }[] }) {
  return (
    <section
      id="second-driver"
      className={`${styles.border_section}  overflow-y-hidden   relative rounded-[8px]  p-5 bg-[#0D2735]`}
    >
      <div className="flex relative justify-between">
        <div>
          <h3 className="text-sm text-grey">My Staff Report Completion</h3>
          <h4 className="font-bold">{getDateNow()}</h4>
        </div>
        <Select
          data={[
            { name: "Web Development", value: "Web Development" },
            {
              name: "Web Design",
              value: "Web Design",
            },
          ]}
        />
      </div>
      <div className="flex relative gap-3 mt-8 items-center justify-around">
        <button className="bg-secondary flex items-center justify-center text-xl text-primary rounded-full p-1 h-fit">
          <IoIosArrowBack />
        </button>
        {data.map((v, index) => {
          return (
            <div key={index} className="flex flex-col gap-2 items-center">
              <Image
                src={"/assets/image/Avatar.png"}
                className="w-[36px] aspect-square rounded-full"
                alt="Staff Image"
                height={100}
                width={100}
              />
              <span className="text-xs">{v.name}</span>
              <div className="w-[24px] text-sm text-primary flex rounded-full justify-center items-center aspect-square bg-[#62A584]">
                <FaCheck />
              </div>
            </div>
          );
        })}
        <button className="bg-secondary flex items-center justify-center text-xl text-primary rounded-full p-1 h-fit">
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

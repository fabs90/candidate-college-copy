import styles from "@/styles/border.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function SidebarMenu({
  path,
  mode,
  data,
}: {
  mode: "MOBILE" | "DESKTOP";
  path: string;
  data: { title: string; icon: React.ReactNode; data: any[] };
}) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <button
        onClick={() => setIsActive((v) => !v)}
        className={`${styles.border_link} ${
          pathname.startsWith(path) && styles.border_link_active
        } rounded-[10px] ${
          mode == "DESKTOP" ? "w-full" : "w-fit"
        }  px-5 py-3 flex gap-4 items-center text-[#8DA6B5] group hover:text-white text-[14px]`}
      >
        {mode == "DESKTOP" ? (
          <>
            {data.icon} {data.title}
            <IoIosArrowDown
              className={`transition-all ${isActive && "rotate-180"}`}
            />
          </>
        ) : (
          <>{data.icon}</>
        )}
      </button>
      <div
        className={`grid ${
          isActive ? "grid-rows-1" : "grid-rows-[0px]"
        } overflow-hidden relative rounded-[10px]  text-[#8DA6B5]  text-[14px]`}
      >
        <ul>
          {data.data.map((v, index) => {
            return (
              <Link
                key={index}
                href={v.url}
                className={`${styles.border_link} ${
                  pathname.startsWith(v.url) && styles.border_link_active
                } ${
                  mode == "MOBILE" && "w-fit"
                } rounded-[10px] px-5 py-3 flex flex-col gap-4 text-[#8DA6B5] hover:text-white text-[14px]`}
              >
                {mode == "DESKTOP" ? (
                  <> {v.title}</>
                ) : (
                  <>{v.title.substring(0, 3)}</>
                )}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}

import { useState } from "react";
import Image from "next/image";

// import { LogoutIcon } from "@/components/icons";

import styles from "@/styles/border.module.css";

import iconStyles from "@/styles/icon.module.css";
import useActive from "@/hooks/useActive";
// import Separator from "@/components/sidebar/Separator";
import Link from "next/link";
import Separator from "./Separator";
import { LogoutIcon } from "../icons";
// import useAlert from "@/hooks/useAlert";

// Import Components
// import Logout from "../Logout";

export default function SidebarDesktop({
  navLink,
  pathname,
  root,
}: {
  navLink: any;
  root: string;
  pathname: string;
}) {
  const { isActive } = useActive();

  const [open, setOpen] = useState<boolean>(false);

  // Used to open log out popup
  const handleClick = () => setOpen(false);
  return (
    <section
      className={`${styles.border_nav}  z-10 transition-all ${
        isActive
          ? "  animate-hilang  !absolute inset-y-0"
          : "animate__animated animate__fadeIn"
      }  flex flex-col bg-[#0D2735] h-full py-6 w-[256px] `}
    >
      <div className="relative">
        <Image
          className="w-[142px]  h-[80px] mx-auto"
          alt="Logo Candidate College"
          width={100}
          height={100}
          src={"/assets/image/logo-full-cc.png"}
        />
      </div>

      <div className="flex gap-3 relative justify-center w-full mt-3 px-5 ">
        <Image
          src="/assets/image/Avatar.png"
          className="w-[48px] h-[48px] rounded-full"
          width={100}
          height={100}
          alt="Photo Profile"
        />
        <div className="flex flex-col justify-center">
          <h4 className="text-[11px] uppercase text-[##FFFFFF52] font-medium">
            Academic Development
          </h4>
          <h3 className="font-medium text-[14px] text-white">Maudy Ayunda</h3>
        </div>
      </div>
      <Separator />
      <div className="mt-4 px-4 overflow-y-auto">
        <ul className="flex mt-2 relative flex-col">
          {navLink.map(({ title, path, icon }: any, index: number) => {
            return (
              <Link
                id={title == "Weekly Report" ? "seventh-driver" : ""}
                key={index}
                href={path}
                className={`${styles.border_link} ${
                  path == root
                    ? pathname == path && styles.border_link_active
                    : pathname.startsWith(path) && styles.border_link_active
                } rounded-[10px]  px-5 py-3 flex gap-4 items-center text-[#8DA6B5] group hover:text-white text-[14px]`}
              >
                {icon} {title}
              </Link>
            );
          })}
        </ul>
      </div>

      <button className="flex relative flex-auto pl-4 gap-2   mt-4 mx-5 items-end">
        <LogoutIcon />{" "}
        <span className="text-grey text-sm font-medium">Logout</span>
      </button>
      {/* Logout Modal */}
      {/* <Logout open={open} onClick={handleClick} /> */}
    </section>
  );
}

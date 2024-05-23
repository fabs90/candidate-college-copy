import Image from "next/image";

// import { LogoutIcon } from "@/components/icons";
import { usePathname } from "next/navigation";

import styles from "@/styles/border.module.css";

import iconStyles from "@/styles/icon.module.css";
import useActive from "@/hooks/useActive";
// import Separator from "@/components/sidebar/Separator";
import Link from "next/link";
// import useAlert from "@/hooks/useAlert";
// import Logout from "../Logout";
import { useState } from "react";
import Separator from "./Separator";
import { LogoutIcon } from "../icons";
import useLogout from "@/hooks/useLogout";

export default function SidebarMobile({
  root,
  navLink,
  pathname,
  profileLink,
}: {
  root: string;
  navLink: any;
  profileLink: string;
  pathname: any;
}) {
  const { isActive } = useActive();
  // const handleClick = () => setOpen(false);
  const { setIsActive } = useLogout();
  // const [open, setOpen] = useState<boolean>(false);
  return (
    <section
      className={`${styles.border_nav}  transition-all ${
        isActive
          ? "z-20   animate__animated animate__fadeIn"
          : " animate__animated animate__fadeOut !absolute"
      }   flex flex-col bg-[#0D2735] h-full py-6 w-[104px] `}
    >
      <div className="py-2 px-4 relative">
        <Image
          className="w-[60px] h-[60px] mx-auto"
          alt="Logo Candidate College"
          width={100}
          height={100}
          src={"/assets/image/logo-cc.png"}
        />
      </div>

      <div className="  relative   w-full mt-5 px-4 ">
        <div
          className={`${styles.border_link} ${
            pathname.startsWith(profileLink) && styles.border_link_active
          } justify-center px-3 py-2 flex gap-3 relative`}
        >
          <Image
            src="/assets/image/Avatar.png"
            className="w-[48px] h-[48px] rounded-full"
            width={100}
            height={100}
            alt="Photo Profile"
          />
        </div>
      </div>
      <Separator />
      <div className="mt-4 px-4 overflow-y-auto mx-auto">
        <ul className="flex mt-2 relative z- flex-col">
          {navLink.map(({ title, path, icon }: any, index: number) => {
            return (
              <Link
                key={index}
                href={path}
                className={`${styles.border_link} ${
                  path == root
                    ? pathname == path && styles.border_link_active
                    : pathname.startsWith(path) && styles.border_link_active
                } rounded-[10px]  px-5 py-3 flex gap-4 items-center group text-[14px]`}
              >
                {icon}
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-auto relative justify-end mx-auto items-end">
        <div className={`w-full h-fit`}>
          <button onClick={() => setIsActive()}>
            <LogoutIcon />
          </button>
        </div>
      </div>
      {/* <Logout open={open} onClick={handleClick} /> */}
    </section>
  );
}

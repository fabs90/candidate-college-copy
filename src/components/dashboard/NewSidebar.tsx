"use client";

import useActive from "@/hooks/useActive";

import { usePathname } from "next/navigation";
import "animate.css";

import {
  DashboardIcon,
  MessageAddIcon,
  PeopleIcon,
  TaskSquareIcon,
} from "@/components/icons";
import ButtonSidebar from "./ButtonSidebar";
import SidebarMobile from "./SidebarMobile";
import SidebarMenu from "./SidebarMenu";
import SidebarDesktop from "./SidebarDesktop";

type SidebarProps = {
  navLink: {
    title: string;
    menu?: { title: string; url: string }[];
    path: string | RegExp;
    icon: React.ReactNode;
  }[];
  linkProfile: string;
  root: string;
};

export default function NewSidebar({
  navLink,
  linkProfile,
  root,
}: SidebarProps) {
  return (
    <div id="first-driver" className="fixed z-20 inset-y-0">
      {/* // <> */}
      <ButtonSidebar />
      {/* Sidebar mobile */}
      <SidebarMobile profileLink={linkProfile} root={root} navLink={navLink}>
        {navLink
          .filter((v) => v.menu)
          .map((v, i) => {
            return (
              <SidebarMenu
                key={i}
                mode="MOBILE"
                data={{
                  icon: v.icon,
                  title: v.title,
                  menu: v.menu as unknown as any[],
                }}
                path={v.path}
              />
            );
          })}
      </SidebarMobile>
      {/* Sidebar Desktop */}
      <SidebarDesktop profileLink={linkProfile} root={root} navLink={navLink}>
        <div id="eleven-driver">
          {navLink
            .filter((v) => v.menu)
            .map((v, i) => {
              return (
                <SidebarMenu
                  key={i}
                  mode="DESKTOP"
                  data={{
                    icon: v.icon,
                    title: v.title,
                    menu: v.menu as unknown as any[],
                  }}
                  path={v.path}
                />
              );
            })}
        </div>
      </SidebarDesktop>
    </div>
  );
}

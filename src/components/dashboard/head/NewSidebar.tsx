"use client";

import useActive from "@/hooks/useActive";

import { usePathname } from "next/navigation";
import "animate.css";
import styles from "@/styles/border.module.css";

import ButtonSidebar from "../ButtonSidebar";
import SidebarMobile from "../SidebarMobile";
import SidebarDesktop from "../SidebarDesktop";
import {
  DashboardIcon,
  MessageAddIcon,
  PeopleIcon,
  TaskSquareIcon,
} from "@/components/icons";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import SidebarMenu from "../SidebarMenu";

export default function NewSidebar() {
  const { isActive } = useActive();
  const [isCoba, setIsCoba] = useState<boolean>(false);
  const pathname = usePathname();
  const navLink = [
    {
      title: "Dashboard",
      path: "/head",
      icon: <DashboardIcon />,
    },
    {
      title: "Weekly Report",
      path: "/head/weekly-report",
      icon: <TaskSquareIcon />,
    },
    {
      title: "My Staff Report",
      path: "/head/my-staff-report",
      icon: <PeopleIcon />,
    },
  ];

  const linkProfile = "/head/profile";

  return (
    <div id="first-driver" className="fixed z-20 inset-y-0">
      {/* // <> */}
      <ButtonSidebar />
      {/* Sidebar mobile */}
      <SidebarMobile
        profileLink={linkProfile}
        pathname={pathname}
        root="/head"
        navLink={navLink}
      >
        <SidebarMenu
          mode="MOBILE"
          data={{
            icon: <MessageAddIcon />,
            title: "Add Feedback",
            data: [
              { title: "June", url: "/head/feedback/add/june" },
              { title: "July", url: "/head/feedback/add/july" },
              { title: "August", url: "/head/feedback/add/august" },
              { title: "September", url: "/head/feedback/add/september" },
            ],
          }}
          path={"/head/feedback/add"}
        />
      </SidebarMobile>
      {/* Sidebar Desktop */}
      <SidebarDesktop
        profileLink={linkProfile}
        pathname={pathname}
        root="/head"
        navLink={navLink}
      >
        <div id="eleven-driver">
          <SidebarMenu
            mode="DESKTOP"
            data={{
              icon: <MessageAddIcon />,
              title: "Add Feedback",
              data: [
                { title: "June", url: "/head/feedback/add/june" },
                { title: "July", url: "/head/feedback/add/july" },
                { title: "August", url: "/head/feedback/add/august" },
                { title: "September", url: "/head/feedback/add/september" },
              ],
            }}
            path={"/head/feedback/add"}
          />
        </div>
      </SidebarDesktop>
    </div>
  );
}

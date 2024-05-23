"use client";

import useActive from "@/hooks/useActive";

import { usePathname } from "next/navigation";
import "animate.css";

import ButtonSidebar from "../ButtonSidebar";
import SidebarMobile from "../SidebarMobile";
import SidebarDesktop from "../SidebarDesktop";
import { DashboardIcon, TaskSquareIcon } from "@/components/icons";

// import Image from "next/image";
// import Link from "next/link";

// import {
//   ArticleIcon,
//   BriefcaseIcon,
//   LogoutIcon,
//   PeopleIcon,
//   StickNoteIcon,
//   DashboardIcon,
// } from "@/components/icons";

// import styles from "@/styles/border.module.css";

// import iconStyles from "@/styles/icon.module.css";
// import "animate.css";
// import useActive from "@/hooks/useActive";
// import ButtonSidebar from "@/components/sidebar/ButtonSidebar";
// import SidebarMobile from "./SidebarMobile";
// import SidebarDesktop from "./SidebarDesktop";
// import { usePathname } from "next/navigation";

export default function NewSidebar() {
  const { isActive } = useActive();
  const pathname = usePathname();
  const navLink = [
    {
      title: "Dashboard",
      path: "/staff",
      icon: <DashboardIcon />,
    },
    {
      title: "Weekly Report",
      path: "/staff/weekly-report",
      icon: <TaskSquareIcon />,
    },
  ];

  const linkProfile = "/staff/profile";

  return (
    <div id="first-driver" className="fixed z-20 inset-y-0">
      {/* // <> */}
      <ButtonSidebar />
      {/* Sidebar mobile */}
      <SidebarMobile
        profileLink={linkProfile}
        pathname={pathname}
        root="/staff"
        navLink={navLink}
      />
      {/* Sidebar Desktop */}
      <SidebarDesktop
        profileLink={linkProfile}
        pathname={pathname}
        root="/staff"
        navLink={navLink}
      />
    </div>
  );
}

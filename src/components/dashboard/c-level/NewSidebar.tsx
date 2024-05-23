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

import SidebarMenu from "../SidebarMenu";
import TaskIcon from "@/components/icons/Task";

export default function NewSidebar() {
  const pathname = usePathname();
  const navLink = [
    {
      title: "Dashboard",
      path: "/c-level",
      icon: <DashboardIcon />,
    },
  ];

  const linkProfile = "/c-level/profile/edit/1";

  return (
    <div id="first-driver" className="fixed z-20 inset-y-0">
      {/* // <> */}
      <ButtonSidebar />
      {/* Sidebar mobile */}
      <SidebarMobile
        profileLink={linkProfile}
        pathname={pathname}
        root="/c-level"
        navLink={navLink}
      >
        <SidebarMenu
          mode="MOBILE"
          data={{
            icon: <MessageAddIcon />,
            title: "Add Feedback",
            data: [
              { title: "June", url: "/c-level/feedback/add/june" },
              { title: "July", url: "/c-level/feedback/add/july" },
              { title: "August", url: "/c-level/feedback/add/august" },
              { title: "September", url: "/c-level/feedback/add/september" },
            ],
          }}
          path={/\/c-level\/feedback\/add/i}
        />
        <SidebarMenu
          mode="MOBILE"
          data={{
            icon: <TaskIcon />,
            title: "All Feedbacks",
            data: [
              { title: "June", url: "/c-level/feedback/June" },
              { title: "July", url: "/c-level/feedback/July" },
              { title: "August", url: "/c-level/feedback/August" },
              { title: "September", url: "/c-level/feedback/September" },
            ],
          }}
          path={/c-level\/feedback\/(?!add)/i}
        />
      </SidebarMobile>
      {/* Sidebar Desktop */}
      <SidebarDesktop
        profileLink={linkProfile}
        pathname={pathname}
        root="/c-level"
        navLink={navLink}
      >
        <div id="fifth-driver">
          <SidebarMenu
            mode="DESKTOP"
            data={{
              icon: <MessageAddIcon />,
              title: "Add Feedback",
              data: [
                { title: "June", url: "/c-level/feedback/add/june" },
                { title: "July", url: "/c-level/feedback/add/july" },
                { title: "August", url: "/c-level/feedback/add/august" },
                { title: "September", url: "/c-level/feedback/add/september" },
              ],
            }}
            path={/\/c-level\/feedback\/add/i}
          />
        </div>
        <div id="seventh-driver">
          <SidebarMenu
            mode="DESKTOP"
            data={{
              icon: <TaskIcon />,
              title: "All Feedbacks",
              data: [
                { title: "June", url: "/c-level/feedback/June" },
                { title: "July", url: "/c-level/feedback/July" },
                { title: "August", url: "/c-level/feedback/August" },
                { title: "September", url: "/c-level/feedback/September" },
              ],
            }}
            path={/c-level\/feedback\/(?!add)/i}
          />
        </div>
      </SidebarDesktop>
    </div>
  );
}

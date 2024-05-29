"use client";

import Alert from "@/components/dashboard/Alert";
import Logout from "@/components/dashboard/Logout";
import NewSidebar from "@/components/dashboard/NewSidebar";

import Success from "@/components/dashboard/weekly-report/Success";
import { DashboardIcon, MessageAddIcon } from "@/components/icons";
import TaskIcon from "@/components/icons/Task";
import useActive from "@/hooks/useActive";

export default function LayoutSuperAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isActive } = useActive();
  const navLink = [
    {
      title: "Dashboard",
      path: "/c-level",
      icon: <DashboardIcon />,
    },
    {
      icon: <MessageAddIcon />,
      title: "Add Feedback",
      menu: [
        { title: "June", url: "/c-level/feedback/add/june" },
        { title: "July", url: "/c-level/feedback/add/july" },
        { title: "August", url: "/c-level/feedback/add/august" },
        { title: "September", url: "/c-level/feedback/add/september" },
      ],
      path: /\/c-level\/feedback\/add/i,
    },
    {
      icon: <TaskIcon />,
      title: "All Feedbacks",
      menu: [
        { title: "June", url: "/c-level/feedback/June" },
        { title: "July", url: "/c-level/feedback/July" },
        { title: "August", url: "/c-level/feedback/August" },
        { title: "September", url: "/c-level/feedback/September" },
      ],
      path: /c-level\/feedback\/(?!add)/i,
    },
  ];

  const linkProfile = "/c-level/profile/edit/1";

  return (
    <main className="flex w-full min-h-screen z-10 shadow-lg bg-primary text-primary">
      <NewSidebar linkProfile={linkProfile} navLink={navLink} root="/c-level" />
      <Alert root="/c-level" />
      <Success />
      <Logout />
      <div
        className={`transition-all z-10 bg-primary w-full min-h-screen ease-linear  duration-[400ms] absolute overflow-hidden ${
          isActive ? "pl-[104px]" : "pl-[256px]"
        } text-white`}
      >
        <div className="py-6 px-8">{children}</div>
      </div>
    </main>
  );
}

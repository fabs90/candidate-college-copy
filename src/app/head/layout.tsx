"use client";

import Alert from "@/components/dashboard/Alert";
import Logout from "@/components/dashboard/Logout";
import NewSidebar from "@/components/dashboard/NewSidebar";

import Success from "@/components/dashboard/weekly-report/Success";
import {
  DashboardIcon,
  MessageAddIcon,
  PeopleIcon,
  TaskSquareIcon,
} from "@/components/icons";
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
    {
      icon: <MessageAddIcon />,
      title: "Add Feedback",
      path: "/head/feedback/add",
      menu: [
        { title: "June", url: "/head/feedback/add/june" },
        { title: "July", url: "/head/feedback/add/july" },
        { title: "August", url: "/head/feedback/add/august" },
        { title: "September", url: "/head/feedback/add/september" },
      ],
    },
  ];

  const linkProfile = "/head/profile/edit/1";

  return (
    <main className="flex w-full min-h-screen z-10 shadow-lg bg-primary text-primary">
      <NewSidebar linkProfile={linkProfile} navLink={navLink} root="/head" />
      <Alert root="/head" />
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

"use client";

import NewSidebar from "@/components/dashboard/NewSidebar";
import useActive from "@/hooks/useActive";

export default function LayoutSuperAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isActive } = useActive();
  return (
    <main className="flex w-full min-h-screen z-10 shadow-lg bg-primary text-primary">
      <NewSidebar />
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

import { useState } from "react";
import styles from "@/styles/border.module.css";
import { CloseIcon, TickCircle } from "@/components/icons";
import Button from "@/components/dashboard/Button";

import { useRouter } from "next/navigation";
import useSuccessReport from "@/hooks/useSuccessReport";

export default function Success() {
  const { isActive, setIsActive } = useSuccessReport();

  const router = useRouter();
  return (
    <div
      className={`${
        isActive ? "flex" : "hidden"
      } inset-0 rounded-[8px] fixed justify-center items-center    bg-black/60 z-30`}
    >
      <div
        className={`${styles.border_driver} rounded-[16px] relative py-12  gap-3  w-[35%] flex flex-col justify-center items-center bg-primary`}
      >
        <TickCircle />
        <div
          onClick={() => setIsActive()}
          className="absolute cursor-pointer top-5 right-5"
        >
          <CloseIcon />
        </div>
        <div className="max-w-[80%] relative">
          <h1 className="text-white text-2.5xl font-bold text-center">
            Report Submitted!
          </h1>
          <p className="text-grey mt-3 relative  text-center">
            You have submitted today&apos;s report. You have the option to edit
            or delete it.
          </p>
        </div>
        <Button
          onClick={() => {
            setIsActive();
            router.push("/staff");
          }}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}

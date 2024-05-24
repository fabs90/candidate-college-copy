import { Dispatch, useRef, useState } from "react";
import styles from "@/styles/border.module.css";
import { TickIcon } from "@/components/icons";

import { CopyIcon } from "@/components/icons";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";

export default function AlertSuccess({
  isData,
  setIsData,
}: {
  isData: string;
  setIsData: Dispatch<string>;
}) {
  const passwordRef = useRef<HTMLParagraphElement | null>(null);

  return (
    <div
      className={`flex inset-0 rounded-[8px] fixed justify-center items-center    bg-black/60 z-30`}
    >
      <div
        className={`${styles.border_driver} rounded-[16px] relative py-12  gap-3  w-[35%] flex flex-col justify-center items-center bg-primary`}
      >
        <TickIcon />
        <button
          onClick={() => {
            setIsData("");
          }}
          className="text-lg absolute right-3 top-3"
        >
          <IoClose />
        </button>
        <div className="max-w-[80%] relative">
          <h1 className="text-white text-[28px] leading-[40px] font-bold text-center">
            Password Reset Requested
          </h1>
          <p className="text-[#FFFFFF8F] mt-1 relative  text-center">
            Please check your email to receive the OTP code.
          </p>
        </div>
        <button className="bg-secondary mt-5 rounded-[30px] cursor-pointer text-[#1B4E6B] relative text-sm font-medium py-2 px-6">
          Enter OTP Code
        </button>
      </div>
    </div>
  );
}

import { Dispatch, useRef, useState } from "react";
import styles from "@/styles/border.module.css";
import TickIcon from "./icons/TickIcon";

import CopyIcon from "./icons/CopyIcon";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import Link from "next/link";

export default function AlertVerify({
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
            Account Created!
          </h1>
          <p className="text-[#FFFFFF8F] mt-1 relative  text-center">
            Your account password is:
          </p>
          <div className="flex gap-1 mt-2 justify-center items-center">
            <p ref={passwordRef} className="text-center">
              {isData}
            </p>
            <button
              onClick={async () => {
                if (passwordRef.current?.textContent) {
                  await navigator.clipboard.writeText(
                    passwordRef.current.textContent
                  );
                  Swal.fire({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon: "success",
                    title: "Password Copied to Clipboard",
                    width: "412px",
                    text: "Make sure to save your password",
                  });
                }
              }}
            >
              <CopyIcon />
            </button>
          </div>
        </div>
        <Link href={"https://weekly-report.candidatecollege.org"}>
          <button className="bg-secondary mt-5 rounded-[30px] cursor-pointer text-[#1B4E6B] relative text-sm font-medium py-2 px-6">
            Access Your Account
          </button>
        </Link>
      </div>
    </div>
  );
}

"use client";

import AlertError from "@/components/AlertError";
import AlertResend from "@/components/AlertResend";
import AlertVerify from "@/components/AlertVerify";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const correctOTP = "1311"; // validate from your server

export default function AddPage() {
  const router = useRouter();
  const numberOfDigits = 4;
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>("");
  const [resend, setResend] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const otpBoxReference = useRef<any>([]);
  const search = useSearchParams();

  function handleChange(value: any, index: any) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  const handleResend = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const form = new FormData();
      const token = search.get("token") as unknown as string;

      form.append("token", token);
      setIsLoading(true);
      const result = await axios.post("/api/resend", form, {
        headers: {
          Accept: "application/json",
        },
      });
      setIsLoading(false);
      console.log(result.data);
      setResend(result.data.token);
    } catch (err: any) {
      console.log(err);
      setIsLoading(false);
      setError(err.response.data.data);
    }
  };

  const handleVerify = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const form = new FormData();
      form.append("otp", otp.join(""));
      const token = search.get("token") as unknown as string;

      form.append("token", token);
      setIsLoading(true);
      const result = await axios.post("/api/verify", form, {
        headers: {
          Accept: "application/json",
        },
      });
      setIsLoading(false);
      setSuccess(result.data.user.password);
    } catch (err: any) {
      console.log(err);
      setIsLoading(false);
      setError(err.response.data.data);
    }
  };

  function handleBackspaceAndEnter(e: any, index: any) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  return (
    <>
      {/* <AlertVerify isData={isSucce} setIsActive={setIsSuccess} /> */}
      {isLoading && (
        <div className="fixed z-50  backdrop-blur-sm flex justify-center items-center  inset-0">
          <AiOutlineLoading3Quarters className="animate-spin text-[42px] text-black" />
        </div>
      )}
      {error && <AlertError isData={error} setisData={setError} />}
      {resend && <AlertResend isData={resend} setIsData={setResend} />}
      {success && <AlertVerify isData={success} setIsData={setSuccess} />}
      <main className=" bg-primary justify-center items-center flex relative h-screen w-screen p-5">
        <BackgroundGradientAnimation className="absolute"></BackgroundGradientAnimation>
        <Image
          alt="Logo CC"
          width={100}
          className="absolute w-[120px] left-12 top-10"
          height={100}
          src={"/logo/logo-full-cc.png"}
        />
        <div className="absolute py-12 px-16 rounded-2xl translate-x-[-50%] bg-primary left-[50%]">
          <h1 className="font-bold text-center text-[28px] leading-10">
            Enter OTP Code
          </h1>
          <h2 className="font-medium mt-2 text-xl text-center text-[#B3C4CE]">
            Enter the 4-digit code sent to your email address.
          </h2>
          <div className="flex gap-3 w-full mt-12 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                value={digit}
                maxLength={1}
                className={`border-2 w-[96px] aspect-square border-secondary rounded-lg outline-none inset-0 font-bold ${
                  digit ? "bg-white" : "bg-[#B3C4CE]"
                } text-[68px] leading-[92px] text-center text-primary`}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                ref={(reference) =>
                  (otpBoxReference.current[index] = reference)
                }
              />
            ))}
          </div>
          <button
            onClick={handleVerify}
            className="bg-secondary mt-12 rounded-[30px] py-4 w-full text-primary font-semibold"
          >
            Verify
          </button>
          <p className="text-sm text-center mt-3 font-medium">
            Didn’t Receive The Code?{" "}
            <button onClick={handleResend} className="text-secondary">
              Resend Code
            </button>
          </p>
        </div>
      </main>
    </>
  );
}

import React from "react";

export default function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      required
      className="mt-2 outline-none text-[14px] rounded-sm p-3 bg-transparent w-full border border-[#90A3BF]"
    />
  );
}

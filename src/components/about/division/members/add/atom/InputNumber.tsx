import React from "react";

export default function InputNumber({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative mt-2 flex">
      <div className="border text-sm border-[#90A3BF] p-3 bg-[#416B84] rounded-e-none items-center">
        +62
      </div>
      <input
        {...props}
        required
        className="  text-[14px] outline-none  rounded-s-none rounded-sm p-2 bg-transparent w-full border-l-0 border border-[#90A3BF]"
      />
    </div>
  );
}

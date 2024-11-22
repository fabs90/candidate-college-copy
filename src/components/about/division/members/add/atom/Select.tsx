import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export default function Select({ children, ...props }: SelectProps) {
  return (
    <select
      className="mt-2 text-[#90A3BF] rounded-sm text-[14px] p-2 bg-transparent w-full border border-[#90A3BF]"
      {...props}
    >
      {children}
    </select>
  );
}

import React from "react";
import Label from "./atom/Label";
import Input from "./atom/Input";

export default function InputForm({ children }: { children: React.ReactNode }) {
  return <div className="text-[16px]">{children}</div>;
}

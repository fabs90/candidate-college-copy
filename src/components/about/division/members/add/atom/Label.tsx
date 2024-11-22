import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label className="block" {...props}>
      {children}
    </label>
  );
}

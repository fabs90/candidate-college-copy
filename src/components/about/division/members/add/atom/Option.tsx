import React from "react";

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

export default function Option({ children, ...props }: OptionProps) {
  return (
    <option
      className="odd:bg-secondary mb-52 rounded-sm odd:text-primary even:bg-primary even:text-secondary"
      {...props}
    >
      {children}
    </option>
  );
}

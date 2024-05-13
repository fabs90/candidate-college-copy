import { HTMLInputTypeAttribute } from "react";

export default function InputLogin({
  name,
  id,
  type,
  placeholder,
  className,
}: {
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  className: string;
}) {
  return (
    <div className={className}>
      <label className="block" htmlFor={id}>
        {name}
      </label>
      <input
        id={id}
        className="bg-transparent mt-2 w-full text-sm rounded-[4px] py-[18px] px-[16px] outline-none border border-grey"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

// mt-12 w-full

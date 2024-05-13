import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

export default function InputLogin({
  name,
  id,
  type,
  placeholder,
  value,
  setValue,
  className,
}: {
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  className: string;
}) {
  return (
    <div className={className}>
      <label className="block" htmlFor={id}>
        {name}
      </label>
      <input
        id={id}
        name={id}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="bg-transparent mt-2 w-full text-sm rounded-[4px] py-[18px] px-[16px] outline-none border border-grey"
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

// mt-12 w-full

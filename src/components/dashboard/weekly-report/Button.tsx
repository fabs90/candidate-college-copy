import React, {
  ClassAttributes,
  HTMLAttributes,
  ForwardedRef,
  forwardRef,
} from "react";

type HTMLProps<T> = ClassAttributes<T> & HTMLAttributes<T>;

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <button
        {...props}
        className="bg-secondary w-full mt-5 rounded-[30px] cursor-pointer text-[#1B4E6B] relative font-semibold py-4"
      >
        {props.children}
      </button>
    );
  }
);

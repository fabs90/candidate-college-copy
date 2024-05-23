import { FieldApi, FormApi } from "@tanstack/react-form";
import { HTMLInputTypeAttribute } from "react";

import { z } from "zod";

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <div className="absolute text-secondary text-xs mt-1 ">
      {field.state.meta.touchedErrors ? (
        <em>{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </div>
  );
}

export default function InputLogin({
  name,

  type,
  placeholder,
  form,
  className,
}: {
  name: string;

  type: HTMLInputTypeAttribute;
  placeholder: string;
  form: FormApi<any, any>;
  className: string;
}) {
  return (
    <div className={`${className} relative`}>
      <form.Field
        name={name}
        validators={{
          onChange: z
            .string()
            .min(3, "First name must be at least 3 characters"),
          onChangeAsyncDebounceMs: 500,
          onChangeAsync: z.string().refine(
            async (value) => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              return !value.includes("error");
            },
            {
              message: "No 'error' allowed in first name",
            }
          ),
        }}
      >
        {(field) => {
          // Avoid hasty abstractions. Render props are great!
          return (
            <>
              <label className="block" htmlFor={field.name}>
                {name}
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="bg-transparent mt-2 w-full text-sm rounded-[4px] py-[18px] px-[16px] outline-none border border-grey"
                type={type}
                placeholder={placeholder}
              />

              <FieldInfo field={field} />
            </>
          );
        }}
      </form.Field>
      {/* <label className="block" htmlFor={id}>
        {name}
      </label>
      <input
        id={id}
        className="bg-transparent mt-2 w-full text-sm rounded-[4px] py-[18px] px-[16px] outline-none border border-grey"
        type={type}
        placeholder={placeholder}
      /> */}
    </div>
  );
}

// mt-12 w-full

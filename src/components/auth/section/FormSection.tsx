import { useState } from "react";
import InputLogin from "../form/InputLogin";
import RememberMe from "../form/RememberMe";

import { zodValidator } from "@tanstack/zod-form-adapter";
import { useForm } from "@tanstack/react-form";
import useAddData from "@/hooks/useAddData";

export default function FormSection() {
  const [rememberme, setRememberme] = useState<boolean>(false);
  const { mutation } = useAddData({ url: "/login" });
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      mutation.mutate({ ...value });
    },
    validatorAdapter: zodValidator,
  });

  return (
    <section className="flex-1">
      <div className="flex w-full h-full max-w-[80%] lg:max-w-[70%] m-auto flex-col justify-center   ">
        <h2 className="text-center  text-3xl font-medium">
          Welcome to CC Weekly Report
        </h2>

        <p className="text-grey mt-3 text-center  text-xl   font-medium">
          Login with your account to get started
        </p>
        <div className="max-w-[90%] lg:max-w-[75%] w-full mx-auto">
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <InputLogin
              className="mt-12 w-full"
              form={form}
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <InputLogin
              className="mt-5 w-full"
              form={form}
              name="password"
              placeholder="Enter your password"
              type="password"
            />

            <div className="flex justify-between mt-5">
              <RememberMe
                rememberme={rememberme}
                setRememberme={setRememberme}
              />
              <span className="text-sm text-secondary">Forgot Password?</span>
            </div>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <button
                  disabled={!canSubmit}
                  type="submit"
                  className="w-full mt-12 bg-secondary text-primary rounded-[30px] font-semibold py-4 text-center"
                >
                  {isSubmitting ? "..." : "Submit"}
                </button>
              )}
            </form.Subscribe>
          </form>
          <p className="font-medium mt-3 text-sm text-center">
            Don’t Have An Account?{" "}
            <span className="text-secondary">Contact Your Admin</span>
          </p>
        </div>
      </div>
    </section>
  );
}

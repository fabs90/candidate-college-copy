import { useEffect, useState } from "react";
import InputLogin from "../form/InputLogin";
import RememberMe from "../form/RememberMe";

import { zodValidator } from "@tanstack/zod-form-adapter";
import { useForm } from "@tanstack/react-form";
import useAddData from "@/hooks/useAddData";
import AlertError from "./alert/AlertError";
import AlertSuccess from "./alert/AlertSuccess";

export default function FormSection() {
  const [rememberme, setRememberme] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const { mutation } = useAddData({ url: "/forgot-password" });
  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      mutation.mutate({ ...value });
    },
    validatorAdapter: zodValidator,
  });

  useEffect(() => {
    setError(mutation.error?.response?.data?.data);

    setSuccess(mutation.data?.data?.message);
  }, [mutation.error, mutation.data]);

  return (
    <section className="flex-1">
      {error && <AlertError isData={error} setisData={setError} />}
      {success && <AlertSuccess isData={success} setIsData={setSuccess} />}
      <div className="flex w-full h-full max-w-[80%] lg:max-w-[70%] m-auto flex-col justify-center   ">
        <h2 className="text-center  text-3xl font-medium">
          Forgot Your Password?
        </h2>

        <p className="text-grey mt-3 text-center max-w-[90%] mx-auto text-xl   font-medium">
          Enter your email address to receive the OTP code and reset your
          password.
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
                  {isSubmitting
                    ? "Loading..."
                    : mutation.isPending
                    ? "Loading..."
                    : "Submit"}
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

import { useEffect, useState } from "react";
import InputLogin from "../form/InputLogin";
import RememberMe from "../form/RememberMe";

import { zodValidator } from "@tanstack/zod-form-adapter";
import { useForm } from "@tanstack/react-form";
import useAddData from "@/hooks/useAddData";
import Link from "next/link";
import { z } from "zod";
import Swal from "sweetalert2";
import { getToken, setTokenWithExpiration } from "@/utils/token";
import { redirectBasedRole } from "@/utils/redirectBasedRole";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

export default function FormSection() {
  const router = useRouter();
  const token = getToken();
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

  useEffect(() => {
    if (mutation.error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: "error",
        title: "Login failed. Please try again.",
      });
    }
  }, [mutation.error]);
  useEffect(() => {
    //  setError(mutation.error?.response?.data?.data);
    //  setToken(mutation.data?.data?.debug?.token);
    //  setSuccess(mutation.data?.data?.message);
    if (mutation.data) {
      setCookie("token", mutation.data.data?.authorization?.token, {
        maxAge: 60 * 60,
      });

      setTokenWithExpiration(mutation.data.data, 3600);
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: "success",
        title: "Successfully logged in!",
      });

      const nextroute = redirectBasedRole(
        mutation.data.data?.authorization?.token
      );

      router.push(nextroute);
    }
  }, [mutation.data]);

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
              validator={{
                // onChange: z.string().email("Only email valid"),
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: z.string().refine(
                  async (value) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return !value.includes("error");
                  },
                  {
                    message: "No 'error' allowed in email",
                  }
                ),
              }}
              className="mt-12 w-full"
              form={form}
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <InputLogin
              validator={{
                onChange: z.string().min(1),
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: z.string().refine(
                  async (value) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return !value.includes("error");
                  },
                  {
                    message: "No 'error' allowed in password",
                  }
                ),
              }}
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
              <Link href={"/auth/forget-password"}>
                <span className="text-sm text-secondary">Forgot Password?</span>
              </Link>
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

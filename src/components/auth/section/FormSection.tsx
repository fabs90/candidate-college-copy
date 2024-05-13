import { useEffect, useState } from "react";
import InputLogin from "../form/InputLogin";
import RememberMe from "../form/RememberMe";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useLoginForm from "@/hooks/useLoginForm";

export default function FormSection() {
  const {
    email,
    password,
    rememberme,
    setEmail,
    mutation,
    setPassword,
    setRememberme,
    onSubmit,
  } = useLoginForm();

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
          <form onSubmit={onSubmit}>
            <InputLogin
              className="mt-12 w-full"
              id="email"
              value={email}
              setValue={setEmail}
              name="Email"
              placeholder="Enter your email"
              type="email"
            />
            <InputLogin
              className="mt-5 w-full"
              value={password}
              id="password"
              setValue={setPassword}
              name="Password"
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

            <button
              type="submit"
              className="w-full mt-12 bg-secondary text-primary rounded-[30px] font-semibold py-4 text-center"
            >
              Login
            </button>
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

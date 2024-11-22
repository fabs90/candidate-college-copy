"use client";

import React from "react";
import {Footer, Navbar } from "@/components";
// import Link from "next/link"; // Jangan lupa untuk import Link dari next/link

const Login = () => {
    return (
        <main className="bg-primary h-full">
            {/* Navbar */}
            <Navbar
                className="animate__animated animate__fadeInDownBig"
                active="Login"
                isDetail={false}
            />



            <main className="bg-white h-screen flex">
                {/* Left side (Sign In Form) */}
                <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
                    <div className="max-w-md w-full">
                        <h1 className="text-4xl font-bold mb-6">Sign in</h1>
                        <p style={{ color: '#4A4159', opacity: 0.75 }}>
                            If you don't have an account, {" "}
                            <a href="/signup" className="text-blue-600 font-semibold">
                                Register here!
                            </a>
                        </p>
                        <form className="mt-8">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#4A4159', opacity: 0.75 }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    style={{ color: '#4A4159', opacity: 0.75 }}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium" style={{ color: '#4A4159', opacity: 0.75 }}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    style={{ color: '#4A4159', opacity: 0.75 }}
                                />
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <input type="checkbox" id="remember" className="mr-2" />
                                    <label htmlFor="remember" className="text-sm" style={{ color: '#4A4159', opacity: 0.75 }}>Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-blue-600 font-semibold">
                                    Forgot Password?
                                </a>
                            </div>
                            <a href="/"
                                type="submit"
                                className="w-full bg-blue-600 text-white text-center nppy-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Login
                            </a>
                        </form>
                        {/*<p className="mt-6 text-center text-sm" style={{ color: '#333', opacity: 0.75 }}>or continue with</p>*/}
                        <div className="flex justify-center mt-4">
                            <button className="mx-2">
                                {/*<img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />*/}
                            </button>
                            {/* <button className="mx-2">
              <img src="/icons/apple.svg" alt="Apple" className="w-6 h-6" />
            </button> */}
                            {/* <button className="mx-2">
              <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
            </button> */}
                        </div>
                    </div>
                </div>

                {/* Right side (Promotional Text) */}
                <div className="w-1/2 flex justify-center items-center bg-blue-800 text-white p-8">
                    <div className="max-w-md text-center">
                        <div className="rounded-lg shadow-lg p-6 bg-blue-700">
                            {/*<img*/}
                            {/*    src="/path/to/your/image.png"*/}
                            {/*    alt="Person with tablet"*/}
                            {/*    className="w-full h-auto mb-6"*/}
                            {/*/>*/}
                            <h2 className="text-3xl font-bold mb-4">Very good study are waiting for you</h2>
                            <p className="text-lg font-semibold">Login Now!!!</p>
                        </div>
                    </div>
                </div>

            </main>



            {/* Footer */}

        </main>
    );
};

export default Login;
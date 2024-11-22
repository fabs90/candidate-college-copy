"use client";

import React from "react";
import {Footer, Navbar } from "@/components";

const SignUppage = () => {
    return (
        <main className="bg-white h-screen flex">{/* Navbar */}
            <Navbar
                className="animate__animated animate__fadeInDownBig"
                active="Register"
                isDetail={false}
            />
            {/* Left side (Sign Up Form) */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
                <div className="max-w-md w-full">
                    <h1 className="text-4xl font-bold mb-6">Sign up</h1>
                    <p style={{color: '#4A4159', opacity: 0.75}}>
                        If you already have an account, {" "}
                        <a href="/login" className="text-blue-600 font-semibold">
                            Login here!
                        </a>
                    </p>
                    <form className="mt-8">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium"
                                   style={{color: '#4A4159', opacity: 0.75}}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                style={{color: '#4A4159', opacity: 0.75}}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium"
                                   style={{color: '#4A4159', opacity: 0.75}}>
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your User name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                style={{color: '#4A4159', opacity: 0.75}}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium"
                                   style={{color: '#4A4159', opacity: 0.75}}>
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                style={{color: '#4A4159', opacity: 0.75}}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-sm font-medium"
                                   style={{color: '#4A4159', opacity: 0.75}}>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Confirm your password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                style={{color: '#4A4159', opacity: 0.75}}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Register
                        </button>
                    </form>
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
                        <p className="text-lg font-semibold">Register Now!!!</p>
                    </div>
                </div>
            </div>

            {/*<div className="w-full bg-primary">*/}
            {/*    <Footer/>*/}
            {/*</div>*/}
        </main>
    );
};

export default SignUppage;
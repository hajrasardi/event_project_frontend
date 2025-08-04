"use client";
import * as React from "react";
import Image from "next/image";
import AccountImage from "../../../public/access_account.svg";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/core/formInput";
import { useRouter } from "next/navigation";
import { apiCall } from "@/helper/apiCall";

export default function RegisterPage() {
  const router = useRouter();

  // Refs for all input fields
  const inUsernameRef = React.useRef<HTMLInputElement>(null);
  const inNameRef = React.useRef<HTMLInputElement>(null);
  const inEmailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confPasswordRef = React.useRef<HTMLInputElement>(null);
  const inPhoneNumberRef = React.useRef<HTMLInputElement>(null);
  const inReferalCodeRef = React.useRef<HTMLInputElement>(null);

  const onSignUp = async () => {
    try {
      const username = inUsernameRef.current?.value;
      const name = inNameRef.current?.value;
      const email = inEmailRef.current?.value;
      const password = passwordRef.current?.value;
      const confPassword = confPasswordRef.current?.value;
      const phone_number = inPhoneNumberRef.current?.value;
      const referral = inReferalCodeRef.current?.value;

      if (
        !username ||
        !name ||
        !email ||
        !password ||
        !confPassword ||
        !phone_number
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      if (password !== confPassword) {
        alert("Password and confirmation do not match");
        return;
      }

      await apiCall.post("/auth/register", {
        username,
        name,
        email,
        password,
        phone_number,
        referral,
      });

      alert("Account registration successful!");
      router.push("/sign-in");
    } catch (error) {
      console.error(error);
      alert("Account registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-fuchsia-700 to-red-600">
      <div className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-purple-700 to-fuchsia-600 relative">
          <Image
            src={AccountImage}
            alt="Register Illustration"
            width={350}
            priority
            className="m-auto drop-shadow-xl"
          />
          <div className="absolute bottom-8 text-white text-2xl font-bold drop-shadow-lg">
            Join Bo-box Cinema!
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
            Create Account
          </h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSignUp();
            }}
          >
            <FormInput
              type="text"
              name="username"
              label="Username"
              ref={inUsernameRef}
            />
            <FormInput
              type="text"
              name="name"
              label="Full Name"
              ref={inNameRef}
            />
            <FormInput
              type="email"
              name="email"
              label="Email"
              ref={inEmailRef}
            />
            <FormInput
              type="password"
              name="password"
              label="Password"
              ref={passwordRef}
            />
            <FormInput
              type="password"
              name="confPassword"
              label="Confirm Password"
              ref={confPasswordRef}
            />
            <FormInput
              type="number"
              name="phoneNumber"
              label="Phone Number"
              ref={inPhoneNumberRef}
            />
            <FormInput
              type="text"
              name="referralCode"
              label="Referral Code (Optional)"
              ref={inReferalCodeRef}
            />

            <Button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-lg shadow hover:bg-purple-800 transition"
            >
              Sign Up
            </Button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <span
              className="text-purple-700 font-semibold cursor-pointer hover:underline"
              onClick={() => router.push("/sign-in")}
            >
              Sign in here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

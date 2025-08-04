"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/core/formInput";
import AccountImage from "../../../public/access_account.svg";
import { apiCall } from "@/helper/apiCall";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";

export default function SignInPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const onSignIn = async () => {
    try {
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      if (!email || !password) {
        alert("Please fill out all fields.");
        return;
      }
      const res = await apiCall.post("/auth/login", { email, password });
      alert(res.data.result.message);
      // dispatch(setSignIn(res.data.result)); // store token if needed
      router.replace("/");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("tkn")) {
      router.replace("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-fuchsia-700 to-red-600">
      <div className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-purple-700 to-fuchsia-600 relative">
          <Image
            src={AccountImage}
            alt="Sign In Illustration"
            width={350}
            priority
            className="m-auto drop-shadow-xl"
          />
          <div className="absolute bottom-8 text-white text-2xl font-bold drop-shadow-lg">
            Welcome Back!
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h1 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
            Sign In
          </h1>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              onSignIn();
            }}
          >
            <FormInput name="email" type="email" label="Email" ref={emailRef} />
            <FormInput
              name="password"
              type="password"
              label="Password"
              ref={passwordRef}
            />
            <Button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-lg shadow hover:bg-purple-800 transition"
            >
              Sign In
            </Button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don&apos;t have an account?{" "}
            <span
              className="text-purple-700 font-semibold cursor-pointer hover:underline"
              onClick={() => router.push("/sign-up")}
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

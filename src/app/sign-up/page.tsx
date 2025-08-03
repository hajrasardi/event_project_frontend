"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    referralCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-red-700">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-purple-700 to-red-600 relative">
          <Image
            src="/images/loginregister.jpg"
            alt="Cinema"
            width={400}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl font-bold drop-shadow-lg">
            Welcome to Bo-box Cinema!
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex gap-3"></div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="confirmPassword"
              >
                Verify Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="username">
                Phone number
              </label>
              <input
                id="username"
                name="phone"
                type="number"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="referralCode"
              >
                Referral Code (optional)
              </label>
              <input
                id="referralCode"
                name="referralCode"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.referralCode}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded font-semibold hover:bg-purple-800 transition"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <span className="text-sm text-gray-600">Already registered?</span>
            <Link
              href="/sign-in"
              className="ml-2 text-sm text-purple-700 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

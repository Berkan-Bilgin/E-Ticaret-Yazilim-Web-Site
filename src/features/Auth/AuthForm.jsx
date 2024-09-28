"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";

const AuthForm = () => {
  const pathname = usePathname();
  const activeTab = pathname === "/register" ? "register" : "login";

  useEffect(() => {
    console.log("AuthForm tetiklendi");
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="flex border-b border-gray-200">
        <Link href="/login" className="w-1/2 text-center">
          <button
            className={`w-full py-2 cursor-pointer ${
              activeTab === "login"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
        </Link>
        <Link href="/register" className="w-1/2 text-center">
          <button
            className={`w-full py-2 cursor-pointer ${
              activeTab === "register"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </Link>
      </div>
      <div className="p-4">
        {activeTab === "login" && <LoginForm />}
        {activeTab === "register" && <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthForm;

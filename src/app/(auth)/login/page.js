"use client";
import React from "react";
import AuthForm from "@/features/Auth/AuthForm";
import isGuest from "@/common/guards/isGuest";

const Login = () => {
  return (
    <>
      <AuthForm defaultActiveTab="login" />
    </>
  );
};

export default isGuest(Login);

"use client";
import React, { useEffect, useState } from "react";
import AuthService from "../services/authService";
import { jwtDecode } from "jwt-decode";
import { loginSuccess } from "@/common/store/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Login Form Tetiklendi");
  }, []);

  const handleLogin = async () => {
    try {
      const credentials = { email, password };
      const response = await AuthService.login(credentials);
      console.log("Login Successful:", response);

      //Http Only eklemen lazım buraya
      document.cookie = `token=${response.token}; path=/ `;
      // Burada başarılı login sonrası yapılacak işlemleri ekleyebilirsiniz.

      // Redux store'a token'ı dispatch et ve loginSuccess aksiyonunu çağır
      dispatch(loginSuccess(response.token)); // Token'ı Redux store'a kaydediyoruz
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            E-Posta12
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-Posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Şifre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleLogin}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

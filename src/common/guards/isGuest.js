"use client";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// Bu guard sadece kimliği olmayan kullanıcıların girmesini sağlar
export default function isGuest(Component) {
  return function IsGuest(props) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const router = useRouter();
    useEffect(() => {
      if (isLoggedIn) {
        // Eğer kimliği varsa (giriş yapmışsa) dashboard'a yönlendir
        router.push("/");
        // return redirect("/");
      }
    }, [isLoggedIn]);

    if (isLoggedIn) {
      return null; // Yönlendirme yapılırken hiçbir şey render etmeyiz
    }

    return <Component {...props} />;
  };
}

"use client";
import Appbar from "@/app/components/Appbar";
import Bottom from "@/app/components/Bottom";
import Drawer from "@/app/components/Drawer";
import Footer from "@/app/components/Footer";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";


const LoginPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <main className="min-h-screen">
        <Appbar onMenuToggle={handleMenuToggle}></Appbar>
        <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>

        <h2>
          {" "}
          Logado como: {session.user.name}, e-mail: {session.user.email} <br />
        </h2>

        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => router.push("/profile/complete-profile")}
        >
          Complete your profile
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
        <Footer></Footer>
      </main>
    );
  }
  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <h2> You are not signed in!!</h2>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => signIn()}
      >
        Sign in
      </button>
      <Bottom></Bottom>
    </main>
  );
};
export default LoginPage;

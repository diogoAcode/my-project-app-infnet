"use client";
import Appbar from "./components/Appbar";
import Bottom from "./components/Bottom";
import Drawer from "./components/Drawer";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <main className="min-h-screen bg-white">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-3 rounded-full"
        onClick={() => router.push("/login")}
      >
        {" "}
        Login
      </button>

      <Bottom></Bottom>
    </main>
  );
}

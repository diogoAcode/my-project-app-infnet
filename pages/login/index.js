"use client";
import Appbar from "@/app/components/Appbar";
import Bottom from "@/app/components/Bottom";
import Drawer from "@/app/components/Drawer";
import React, { useState } from "react";
import "@/app/globals.css";

const LoginPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <main className="min-h-screen bg-white">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>


      
      
      <Bottom></Bottom>
    </main>
  );
};


export default LoginPage; 
"use client";
import Appbar from "@/app/components/Appbar";
import Bottom from "@/app/components/Bottom";
import Drawer from "@/app/components/Drawer";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const ProductsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const { data: session } = useSession();
  const router = useRouter();

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
        Produtos
      <Bottom></Bottom>
    </main>
  );
};
export default ProductsPage;

// https://fakestoreapi.com/

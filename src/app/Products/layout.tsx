"use client";
import React from "react";
import Navbar from "../component/Navbar";

export default function ProductLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Mobile menu */}

      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        {children}
      </main>
    </>
  );
}

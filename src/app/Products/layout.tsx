"use client";
import React from "react";
import Navbar from "../component/Navbar";

export default function ProductLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white">
      {/* Mobile menu */}

      <Navbar />
      <main>{children}</main>
    </div>
  );
}

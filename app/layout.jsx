"use client";

import React, { useState } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    // Toggle the "DARK" class on the body element
    document.body.classList.toggle("DARK");
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>M.I.N.T</title>
      </head>
      <body
        className={`bg-light_bg_bright font-poppins text-light_txt transition-all duration-1000 ease-in-out ${
          darkMode ? "" : "DARK"
        }`}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [blueMode, setBlueMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const startBlue = window.innerHeight * 2.55;
      const endBlue = window.innerHeight * 5.12;

      if (scrollY > startBlue && scrollY < endBlue) {
        setBlueMode(true);
      } else {
        setBlueMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 transition-all duration-500">

      {/* Brand */}
      <div
        className={`text-xl font-semibold tracking-wide transition-colors duration-500 ${
          blueMode ? "text-blue-900" : "text-[#f5f5f5]"
        }`}
      >
        Stefan Koprivica
      </div>

      {/* Button */}
      <a
        href="#contact"
        className={`px-5 py-2 rounded-full font-medium transition-all duration-500 ${
          blueMode
            ? "bg-blue-900 text-white hover:bg-blue-800"
            : "bg-white text-black hover:bg-white/90"
        }`}
      >
        Kontakt
      </a>
    </nav>
  );
}
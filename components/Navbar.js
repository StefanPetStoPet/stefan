"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [blueMode, setBlueMode] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hero passed
      const heroEnd = window.innerHeight * 0.9;

      setBlueMode(scrollY > heroEnd);

      // Hide/show navbar after hero
      if (scrollY > heroEnd) {
        if (scrollY > lastScrollY) {
          // scrolling down
          setShowNav(false);
        } else {
          // scrolling up
          setShowNav(true);
        }
      } else {
        // always visible in hero
        setShowNav(true);
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${
        showNav
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >

      <div
        className={`flex items-center justify-between px-10 py-6 w-full transition-all duration-700 ease-out ${
          blueMode
            ? "bg-white/85 backdrop-blur-xl border border-white/15 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >

        {/* Brand */}
        <div
          className={`text-xl font-semibold tracking-wide transition-colors duration-500 ${
            blueMode ? "text-blue-800" : "text-[#f5f5f5]"
          }`}
        >
          Stefan Koprivica
        </div>

        {/* Button */}
        <a
          href="#contact"
          className={`px-5 py-2 rounded-full font-medium transition-all duration-500 ${
            blueMode
              ? "bg-blue-800 text-white hover:bg-blue-600"
              : "bg-white text-black hover:bg-white/90"
          }`}
        >
          Kontakt
        </a>

      </div>
    </nav>
  );
}
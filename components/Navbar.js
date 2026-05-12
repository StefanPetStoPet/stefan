import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-transparent">

      {/* Brand */}
      <div className="text-[#f5f5f5] text-xl font-semibold tracking-wide">
        Stefan Koprivica
      </div>

      {/* Right side */}
      <div className="flex items-center gap-10 text-white/80 text-md tracking-wide">

        

        <a
          href="#contact"
          className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
        >
          Kontakt
        </a>

      </div>

    </nav>
  );
}
"use client";

import Hero from "./Hero";
import HeroMobile from "./HeroMobile";

export default function Heros() {
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <HeroMobile />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Hero />
      </div>
    </>
  );
}
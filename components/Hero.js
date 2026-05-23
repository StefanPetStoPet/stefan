"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [heroImg, setHeroImg] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setHeroImg((prev) => (prev + 1) % 4);
  }, 700);

  return () => clearInterval(interval);
}, []);

const images = [
  "/vina.png",
  "/amigurumi.png",
  "/asa2.png",
  "/biju3.png"
];

  const baseStartX = -900;

 const h1s = [
  {
    text: "Dizajnirano sa stilom",
    className:
      "text-[clamp(1.5rem,4vw,6.5rem)] font-light leading-tight mb-4 sm:mb-10",
    finalX: -240,
    opacity: 0.85,
  },
  {
    text: "Izrađeno iskustvom",
    className:
      "text-[clamp(1.6rem,4.5vw,7rem)] font-light leading-tight my-0 sm:my-1 mb-4 sm:mb-10",
    finalX: 0,
    opacity: 1,
  },
  {
    text: "Stvoreno za rezultate",
    className:
      "text-[clamp(1.5rem,4vw,6.5rem)] font-light leading-tight",
    finalX: 200,
    opacity: 0.85,
  },
];

  // calculate longest animation time so bottom appears after ALL H1s finish
  const maxDuration = Math.max(
    ...h1s.map((item) => {
      const distance = Math.abs(item.finalX - baseStartX);
      return (distance / 340) * 350;
    })
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBottom(true);
    }, maxDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-12 sm:pt-16">
      {/* Background Video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/background6.mp4"
        autoPlay
        muted
        loop
        playsInline
      /> */}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/15" /> */}

      {/* HERO WRAPPER */}
      <div className="relative w-full h-full flex flex-col items-center justify-start px-4 sm:px-10 pt-[clamp(1.5rem,5vh,4rem)] sm:pt-[clamp(2rem,7vh,6rem)]">

        {/* TEXT */}
        <div className="w-full flex flex-col items-center text-[#f5f5f5] px-4 sm:px-0 sm:fixed">

          {h1s.map((item, i) => {
            const distance = Math.abs(item.finalX - baseStartX);
            const duration = (distance / 340) * 900;
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

            return (
              <h1
                key={i}
                className={item.className}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transform: loaded && !isMobile
                    ? `translateX(${item.finalX}px)`
                    : `translateX(0px)`,
                  opacity: loaded ? (isMobile ? 1 : item.opacity) : 0,
                  transition: `
  transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1),
  opacity ${duration}ms ease-out
`,
                }}
              >
                {item.text}
              </h1>
            );
          })}
        </div>

        {/* BOTTOM BAR */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row items-end justify-between gap-4 sm:gap-6 px-6 sm:px-6 pb-6 sm:pb-6">

          {/* LEFT TEXT */}
          <div
            className="w-full sm:w-[420px] text-[#f5f5f5] order-2 sm:order-1"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              opacity: showBottom ? 1 : 0,
              transition: "opacity 1500ms ease-out",
            }}
          >
           <p className="text-lg sm:text-2xl font-light leading-tight mb-2 sm:mb-3">
  Posjetioci nisu cilj — klijenti jesu.
</p>

<p className="text-sm sm:text-xl text-[#f5f5f5]/90 leading-relaxed hidden sm:block">
  Svaki vlasnik online biznisa s vremenom shvati da snažan vizuelni identitet gradi povjerenje i stvara veću zaradu. Ali mnogi ne prepoznaju da strategija ima još veći uticaj.</p>
          </div>

          {/* RIGHT CTA */}
          <a
  href="#work"
  className="w-full sm:w-auto flex bg-[#fafafa] rounded-lg overflow-hidden shadow-lg shrink-0 order-1 sm:order-2"
  style={{
    opacity: showBottom ? 1 : 0,
    transition: "opacity 1500ms ease-out",
  }}
>

            <div
              className="flex items-center gap-2 sm:gap-3 px-5 sm:px-9 py-3 sm:py-0 whitespace-nowrap text-black/79 text-lg sm:text-xl font-bold bg-gradient-to-r from-[#fafafa] to-[#dcdee3]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="text-xl sm:text-2xl font-bold">→</span>
              <span className="text-base sm:text-base">Moji radovi</span>
            </div>

            <div className="p-1 sm:p-2 bg-[#dcdee3]">
              <div className="w-[120px] h-[60px] sm:w-[180px] sm:h-[80px] overflow-hidden rounded-md">
                <img
                  src={images[heroImg]}
                  className="w-full h-full object-cover"
                  alt="preview"
                />
              </div>
            </div>
          </a>




        </div>
      </div>
    </section>
  );
}
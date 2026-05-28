"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [heroImg, setHeroImg] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImg((prev) => (prev === 0 ? 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const baseStartX = -900;

  const h1s = [
    {
      text: "Dizajnirano sa stilom",
      // was text-[2.4rem] — hardcoded, too big on Samsung's larger-DPI screens
      className: "font-light leading-none",
      finalX: 0,
      opacity: 0.75,
    },
    {
      text: "Izrađeno iskustvom",
      className: "font-light leading-none my-1",
      finalX: 0,
      opacity: 0.9,
    },
    {
      text: "Stvoreno za rezultate",
      className: "font-light leading-none",
      finalX: 0,
      opacity: 1,
    },
  ];

  // slight stagger per line so they feel layered
  const fontSizes = [
    "clamp(2rem, 6svw, 2.5rem)",
    "clamp(2rem, 6svw, 2.5rem)",
    "clamp(2rem, 6svw, 2.5rem)",
  ];

  const maxDuration = Math.max(
    ...h1s.map((item) => {
      const distance = Math.abs(item.finalX - baseStartX);
      return (distance / 340) * 350;
    })
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowBottom(true), maxDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100svh] overflow-hidden pt-24">

      <div className="relative w-full h-full flex flex-col justify-between px-4 md:px-10 pt-10 pb-6">

        {/* TOP HEADLINES */}
        <div
          className="flex flex-col items-start text-[#f5f5f5]"
          style={{
            // kills Android Blink font-boosting — the root cause of Samsung inflation
            WebkitTextSizeAdjust: "100%",
            textSizeAdjust: "100%",
          }}
        >
          {h1s.map((item, i) => {
            const distance = Math.abs(item.finalX - baseStartX);
            const duration = (distance / 340) * 900;

            return (
              <h1
                key={i}
                className={item.className}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  // svw = small viewport width, consistent across Samsung/iOS unlike vw
                  fontSize: fontSizes[i],
                  transform: loaded
                    ? `translateX(${item.finalX}px)`
                    : `translateX(${baseStartX}px)`,
                  opacity: loaded ? item.opacity : 0,
                  transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease-out`,
                }}
              >
                {item.text}
              </h1>
            );
          })}
        </div>

        {/* BOTTOM STACK */}
        <div className="flex flex-col gap-12 md:absolute md:bottom-6 md:left-6 md:right-6 md:flex-row md:items-end justify-between text-[#f5f5f5] mt-auto">

          {/* TEXT BLOCK */}
          <div
            className="w-full md:w-[420px]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              opacity: showBottom ? 1 : 0,
              transition: "opacity 1500ms ease-out",
              WebkitTextSizeAdjust: "100%",
              textSizeAdjust: "100%",
            }}
          >
            {/* was text-4xl on mobile — way too big on Samsung */}
            <p style={{ fontSize: "clamp(2rem, 9svw, 3rem)" }} className="font-light leading-tight mb-4">
              Posjetioci nisu cilj — klijenti jesu.
            </p>
            {/* was text-2xl on mobile */}
            <p style={{ fontSize: "clamp(1.1rem, 5svw, 1.1rem)" }} className="text-[#f5f5f5]/90 leading-relaxed">
             Svaki vlasnik online biznisa s vremenom shvati da snažan vizuelni identitet gradi povjerenje i stvara veću zaradu. Ali mnogi ne prepoznaju da strategija ima još veći uticaj.   </p>
          </div>

          {/* CTA */}
          <div
            className="flex bg-[#fafafa] rounded-lg overflow-hidden shadow-lg w-full md:w-auto"
            style={{
              opacity: showBottom ? 1 : 0,
              transition: "opacity 1500ms ease-out",
            }}
          >
            <div
              className="flex items-center gap-3 px-6 md:px-9 whitespace-nowrap text-black/80 font-bold bg-gradient-to-r from-[#fafafa] to-[#dcdee3]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(0.9rem, 3svw, 1.25rem)",
              }}
            >
              <span className="text-2xl font-bold">→</span>
              <span>Moji radovi</span>
            </div>

            <div className="p-2 bg-[#dcdee3]">
              <div className="w-[160px] md:w-[180px] h-[70px] md:h-[80px] overflow-hidden rounded-md">
                <img
                  src={heroImg === 0 ? "/mockup.png" : "/mockup1.png"}
                  className="w-full h-full object-cover"
                  alt="preview"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
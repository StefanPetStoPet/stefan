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
      setHeroImg((prev) => (prev === 0 ? 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const baseStartX = -900;

 const h1s = [
  {
    text: "Dizajnirano s ukusom",
    className:
      "text-[clamp(2.7rem,5vw,6.5rem)] font-light leading-none mb-10",
    finalX: -240,
    opacity: 0.85,
  },
  {
    text: "Izrađeno sa iskustvom",
    className:
      "text-[clamp(3rem,6vw,7rem)] font-light leading-none my-1 mb-10",
    finalX: 0,
    opacity: 1,
  },
  {
    text: "Stvoreno za rezultate",
    className:
      "text-[clamp(2.7rem,5.5vw,6.5rem)] font-light leading-none",
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
    <section className="relative h-screen overflow-hidden pt-16">
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
      <div className="relative w-full h-full flex flex-col items-center justify-start px-10 pt-[clamp(2rem,7vh,6rem)]">

        {/* TEXT */}
        <div className="fixed flex flex-col items-center text-[#f5f5f5]">

          {h1s.map((item, i) => {
            const distance = Math.abs(item.finalX - baseStartX);
            const duration = (distance / 340) * 900;

            return (
              <h1
                key={i}
                className={item.className}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transform: loaded
                    ? `translateX(${item.finalX}px)`
                    : `translateX(${baseStartX}px)`,
                  opacity: loaded ? item.opacity : 0,
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
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">

          {/* LEFT TEXT */}
          <div
            className="fixed w-[420px] text-[#f5f5f5]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              opacity: showBottom ? 1 : 0,
              transition: "opacity 1500ms ease-out",
            }}
          >
           <p className="text-2xl font-light leading-tight mb-3">
  Posjetioci nisu cilj — klijenti jesu.
</p>

<p className="text-xl text-[#f5f5f5]/90 leading-relaxed">
  Ucim o vasem nacinu poslovanja,
  razmišljam strateški i dizajniram iskustva koja su napravljena da podstaknu akciju — pretvarajući posjetioce u klijente.
</p>
          </div>

          {/* RIGHT CTA */}
          <a
  href="#contact"
  className="fixed bottom-6 right-6 flex bg-[#fafafa] rounded-lg overflow-hidden shadow-lg shrink-0"
  style={{
    opacity: showBottom ? 1 : 0,
    transition: "opacity 1500ms ease-out",
  }}
>

            <div
              className="flex items-center gap-3 px-9 whitespace-nowrap text-black/79 text-xl font-bold bg-gradient-to-r from-[#fafafa] to-[#dcdee3]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="text-2xl font-bold">→</span>
              <span>Moji radovi</span>
            </div>

            <div className="p-2 bg-[#dcdee3]">
              <div className="w-[180px] h-[80px] overflow-hidden rounded-md">
                <img
                  src={heroImg === 0 ? "/mockup.png" : "/mockup1.png"}
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
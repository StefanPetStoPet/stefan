"use client";

import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="flex w-full max-w-6xl h-[78vh] rounded-2xl overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="w-[60%] h-full flex flex-col justify-center px-14">

          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              About Me
            </h2>
            <p className="text-white/50 mt-2 text-sm">
              Experience, background & what I focus on
            </p>
          </div>

          <div className="space-y-8 text-white">

            <div>
              <div className="text-xl font-medium">Experience</div>
              <div className="text-white/60 text-sm mt-1">
                3+ years working with UI/UX design and frontend development,
                focusing on modern web interfaces and interactive experiences.
              </div>
            </div>

            <div>
              <div className="text-xl font-medium">Work</div>
              <div className="text-white/60 text-sm mt-1">
                Freelance projects, startup collaborations, and personal SaaS
                products built with React, Next.js and Tailwind.
              </div>
            </div>

            <div>
              <div className="text-xl font-medium">Focus</div>
              <div className="text-white/60 text-sm mt-1">
                Clean design systems, smooth animations, and performance-first UI.
              </div>
            </div>

            <div>
              <div className="text-xl font-medium">Mindset</div>
              <div className="text-white/60 text-sm mt-1">
                Always improving structure, usability, and visual storytelling
                through minimal but expressive design.
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[40%] h-full flex items-center justify-center">
          <img
            src="/myimage.png"
            alt="profile"
            className="h-[70%] w-auto object-contain transition-all duration-700 ease-in-out"
          />
        </div>

      </div>
    </motion.div>
  );
}
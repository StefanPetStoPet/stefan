"use client";

import { motion } from "framer-motion";

export default function DesignProcess({
  steps,
  activeStep,
  setActiveStep,
}) {
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
      <div className="flex w-full max-w-6xl h-[90vh] rounded-3xl overflow-hidden">

        {/* LEFT SIDE (IMAGE AREA - controlled by parent state) */}
        <div className="w-[65%] h-full flex items-center justify-start pl-10">
          <img
            src={`/mockup${activeStep + 1}.png`}
            alt="process mockup"
            className="w-[92%] h-[88%] object-contain transition-all duration-700 ease-in-out"
          />
        </div>

        {/* RIGHT SIDE (STEPS) */}
        <div className="w-[35%] h-full flex flex-col justify-center px-12">

          {/* HEADER */}
          <div className="mb-10">
            <h2 className="text-[22px] font-semibold text-white tracking-tight">
              Design Process
            </h2>
            <p className="text-white/50 text-sm mt-1">
              A structured approach from research to final UI
            </p>
          </div>

          {/* STEPS LIST */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className={`group cursor-pointer transition-all duration-300 pl-4 border-l ${
                  activeStep === index
                    ? "border-white opacity-100"
                    : "border-white/10 opacity-50 hover:opacity-100"
                }`}
              >
                <div
                  className={`text-[15px] font-medium transition ${
                    activeStep === index
                      ? "text-white"
                      : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {step.title}
                </div>

                <div className="text-[13px] text-white/40 mt-1 leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
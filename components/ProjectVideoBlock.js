import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectVideoBlock({ videoSrc, title, description, darkMode }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`max-w-5xl mx-auto p-6 rounded-xl flex flex-col md:flex-row items-center gap-6
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="w-full md:w-1/2 h-full rounded-lg object-cover"
      />
      <div className="md:w-1/2 text-left">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

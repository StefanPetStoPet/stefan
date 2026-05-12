import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';  // For optimized images
import { FaLightbulb, FaUsers, FaRocket, FaCheckCircle, FaBookOpen, FaHeart } from 'react-icons/fa';

import ProjectVideoBlock from '@/components/ProjectVideoBlock';

export default function ProjectPage({ darkMode }) {
  // You can add state for darkMode here or pass from higher context/provider

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => {/* your toggle logic */}} />

      {/* Project title, description, image gallery, and live link */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Project Name</h1>
        <p className="max-w-3xl mb-6 text-center">
          Description of this specific project clicked, what it does, key highlights...
        </p>

        {/* Scrollable image gallery */}
        <div className="w-full max-w-5xl overflow-x-auto flex gap-4 mb-8 snap-x snap-mandatory">
          {/* Use next/image for optimized images */}
          {[/* array of image URLs */].map((src, i) => (
            <div key={i} className="snap-start flex-shrink-0 w-64 h-40 relative rounded-lg overflow-hidden">
              <Image src={src} alt={`Project screenshot ${i + 1}`} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        <a
          href="https://project-live-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mb-12"
        >
          Visit live site
        </a>
      </section>

      {/* Videos with side text */}
      <ProjectVideoBlock
        videoSrc="/videos/vscodeup.mp4"
        title="Faster Website, Mobile-Responsive"
        description="I use Next.js because it helps your website load faster by preloading important parts and only loading pages when needed, so visitors see your content quickly. This speed also helps your site rank higher on Google, bringing in more visitors. Next.js makes adding features like login and contact forms easy and reliable. It also allows me to update your site securely and quickly, so changes happen without downtime. Altogether, this creates a better, faster, and safer experience for your users."
        darkMode={darkMode}
      />

      <ProjectVideoBlock
        videoSrc="/videos/mobile-responsive.mp4"
        title="Mobile Responsiveness"
        description="Showing how I ensure mobile responsiveness with Tailwind’s utility classes and testing."
        darkMode={darkMode}
      />

      <ProjectVideoBlock
        videoSrc="/videos/blender-work.mp4"
        title="3D Design with Blender"
        description="Creating Blender animations and integrating GSAP for smooth frontend motion."
        darkMode={darkMode}
      />

      {/* Sanity walkthrough video + text */}
      <ProjectVideoBlock
        videoSrc="/videos/sanity-walkthrough.mp4"
        title="Content Management with Sanity"
        description="How I manage website content easily with Sanity’s headless CMS."
        darkMode={darkMode}
      />

      {/* Info section with icons + text, no videos */}
      <section
        className={`max-w-5xl mx-auto p-6 rounded-xl mt-12 ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Example info block */}
          <div className="flex items-center gap-4">
            {/* Use react-icons or your custom icon */}
            <FaRocket size={30} />
            <p>Registration, authentication, and security features.</p>
          </div>
          <div className="flex items-center gap-4">
            <FaHeart size={30} />
            <p>AI integration and ongoing bug fixes post-launch.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

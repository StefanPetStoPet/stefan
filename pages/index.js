"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProjectShowcase from "../components/ProjectShowcase";
import DesignProcess from "../components/DesignProcess";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Examples from "../components/Examples";
import DecideHero from "../components/DecideHero";

export default function Home() {
  // =====================
  // HERO STATE
  // =====================
  const [heroImg, setHeroImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImg((prev) => (prev === 0 ? 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // =====================
  // PROJECT SHOWCASE STATE
  // =====================
  const projectImages = [
    "/mockup6.png",
    "/mockup3.png",
    "/mockup4.png",
    "/mockup5.png",
  ];

  const mobileImages = [
  "/mobile1.png",
  "/mobile2.png",
  "/mobile1.png",
  "/mobile2.png",
];

  const [projectImg, setProjectImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectImg((prev) => (prev + 1) % projectImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // =====================
  // DESIGN PROCESS STATE
  // =====================
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Strategy & Research",
      desc: "Combining market research, audience insights and competitor analysis to build a strong foundation",
    },
    {
      title: "Understanding What Works",
      desc: "Identifying proven patterns, high-performing layouts and effective user flows",
    },
    {
      title: "CRO & Conversion Thinking",
      desc: "Designing every element with intent — focused on clarity, engagement and results",
    },
    {
      title: "Branding & User Experience",
      desc: "Shaping positioning, visual identity and seamless journeys that guide users to convert",
    },
  ];

  useEffect(() => {
    setProjectImg(activeStep);
  }, [activeStep]);

  // =====================
  // PAGE STRUCTURE
  // =====================
  return (
     <>
  {/* BACKGROUND VIDEO */}
  <video
    className="fixed inset-0 w-full h-full object-cover z-0"
    src="/videos/test1.mp4"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* DARK OVERLAY */}
  <div className="fixed inset-0 bg-[#1206b6]/40 z-0" />

  {/* PAGE CONTENT */}
  <main className="relative z-10">
    <Navbar />
    <DecideHero />
    <Stats />
    <ProjectShowcase
      projectImages={projectImages}
      projectImg={projectImg}
      mobileImages={mobileImages}
    />
    <Examples />
    {/* <DesignProcess
      steps={steps}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    /> */}
    {/* <AboutMe /> */}
    <Footer />
  </main>
    </>
  );
}
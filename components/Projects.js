"use client";

import { useState, useEffect } from "react";
import ProjectShowcase from "./projects/ProjectShowcase";
import DesignProcess from "./projects/DesignProcess";
import AboutCard from "./projects/AboutCard";

export default function Projects() {
  const projectImages = [
    "/img0.png",
    "/mockup1.png",
    "/img0.png",
    "/mockup3.png",
    "/mockup4.png",
    "/mockup5.png",
  ];

  const [projectImg, setProjectImg] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectImg((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // sync with steps
  useEffect(() => {
    setProjectImg(activeStep);
  }, [activeStep]);

  return (
    <section id="projects" className="relative py-28 w-full overflow-hidden bg-[#05000d]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-28">

        <ProjectShowcase
          projectImages={projectImages}
          projectImg={projectImg}
        />

        <DesignProcess
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          projectImages={projectImages}
          projectImg={projectImg}
        />

        <AboutCard />

      </div>
    </section>
  );
}
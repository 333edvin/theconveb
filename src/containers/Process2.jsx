'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  {
    number: "01.",
    title: "DISCOVERY",
    description: "Every great build starts with a clear direction. We dive deep into your business objectives, target audience, and market challenges to create a strategic roadmap. No guesswork—just a solid plan to ensure your digital presence delivers real results."
  },
  {
    number: "02.",
    title: "STRATEGY",
    description: "We map out the user journey and information architecture. By defining technical requirements early, we ensure a seamless transition from concept to execution, aligning business goals with user needs."
  },
  {
    number: "03.",
    title: "DESIGN",
    description: "Our design process focuses on high-fidelity aesthetics paired with intuitive UX. We create visual languages that resonate with your brand and engage your audience across all touchpoints."
  },
  {
    number: "04.",
    title: "DEVELOPMENT",
    description: "Clean code meets cutting-edge tech. We build robust, scalable platforms that are optimized for performance, accessibility, and future growth across all devices."
  },
  {
    number: "05.",
    title: "LAUNCH",
    description: "The final phase involves rigorous testing and deployment. We ensure your team is ready to scale and grow with the new platform, providing support and documentation for a smooth launch."
  }
];

const ProcessStep = ({ step, index, totalSteps, progress }) => {
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;
  const isLastStep = index === totalSteps - 1;
  const isFirstStep = index === 0;

  // For first step: visible from start (progress 0)
  // For last step: stays visible at the end (progress 1)
  // For middle steps: fade in and out

  let opacity;
  let y;

  if (isFirstStep) {
    // First step: visible from beginning, fades out at its end
    opacity = useTransform(
      progress,
      [0, 0.05, end - 0.05, end],
      [1, 1, 0, 0]
    );
    y = useTransform(
      progress,
      [0, 0.1, end - 0.1, end],
      [0, 0, -20, -20]
    );
  } else if (isLastStep) {
    // Last step: fades in normally but never fades out
    opacity = useTransform(
      progress,
      [start, start + 0.05, 0.95, 1],
      [0, 1, 1, 1]
    );
    y = useTransform(
      progress,
      [start, start + 0.1, 0.95, 1],
      [20, 0, 0, 0]
    );
  } else {
    // Middle steps: fade in and out normally
    opacity = useTransform(
      progress,
      [start, start + 0.05, end - 0.05, end],
      [0, 1, 1, 0]
    );
    y = useTransform(
      progress,
      [start, start + 0.1, end - 0.1, end],
      [20, 0, 0, -20]
    );
  }


  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center px-6 md:px-12"
    >
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Large background number */}
        <div className="absolute top-0 md:-top-24 right-0 md:-top-32 md:right-12 text-[22rem] md:text-[35rem] font-black  select-none pointer-events-none z-0 text-transparent [-webkit-text-stroke:2px_#4B5563] opacity-90 md:opacity-30 ">
          {step.number}
        </div>

        {/* Content */}
        <div className="relative z-10 flex justify-end mt-20 md:mt-32 md:pr-32">
          <div className="text-right max-w-3xl">
            <h3 className="text-4xl md:text-7xl font-black mb-6  uppercase text-white ">
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-lg w-full font-light  md:pr-20">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Process2 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring for fluid transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <div className=" min-h-screen">
      {/* Container height determines scroll duration through steps */}
      <section ref={containerRef} className="relative h-[300vh] md:h-[400vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 ">
            {/* Left side - static title */}
            <div className="col-span-12 flex items-center justify-start p-10 md:p-16">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-white mt-10 md:mt-0">
                The<br />Process.
              </h2>
            </div>

            {/* Right side - stacked steps (same div area) */}
            <div className="col-span-12 relative h-52 md:h-full w-full mt-18 md:mt-0">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={step}
                  index={index}
                  totalSteps={steps.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process2;
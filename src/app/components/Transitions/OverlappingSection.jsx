"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionPinning = ({ children }) => {
  useEffect(() => {
    // Pin the "About" section and make the "Service" section overlap
    const aboutPin = gsap.fromTo(
      ".about",
      { y: 0 },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".about",
          start: "top top",
          end: "bottom top", // Ends pinning when about section ends
          pin: true,
          pinSpacing: false, // Prevents extra space after pinning
          markers: false,
        },
      }
    );

    const serviceOverlap = gsap.fromTo(
      ".service",
      { y: 0 },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".service",
          start: "top bottom-=50%", // Starts when service is 50% in view
          end: "bottom top", // Ends overlap as service leaves view
          scrub: true,
          markers: false,
        },
      }
    );

    // Clean up ScrollTriggers when component unmounts
    return () => {
      aboutPin.scrollTrigger.kill();
      serviceOverlap.scrollTrigger.kill();
    };
  }, []);

  return <div className="serv-container">{children}</div>;
};

export default SectionPinning;

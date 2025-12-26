"use client";

import { useEffect, useRef } from "react";
import Image from "next/image"; 
import liquid from "../../../../public/images/liquid.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ImageScroll = ({ setShowText }) => {
  const imgContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainerRef.current,
        markers: false,
        scrub: 1,
        start: " center",
        end: "top 25%",
      },
      onComplete: () => {
        setShowText(true); // Show the text when the animation completes
        gsap.to(".animate-fadeIn", { opacity: 1, duration: 1 }); // Fade-in animation for the text
      },
    });

    tl.to(imgContainerRef.current, {
      scale: 4,
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setShowText]);

  return (
    <div className="h-screen overflow-hidden">
      <div
        ref={imgContainerRef}
        className=" mx-auto w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] "
      >
        <Image
          src={liquid}
          className="h-screen"
          alt="Scalable Image"
          layout="responsive"
          priority
        />
      </div>
    </div>
  );
};

export default ImageScroll;

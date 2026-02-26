'use client';
import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'; 
import { motion, AnimatePresence } from 'framer-motion';

const Service2 = () => {
  // Track which service is open by index (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Web Designing",
      description: "We create high-end, bespoke digital experiences that align with your brand's identity. Our designs focus on minimalism, luxury aesthetics, and conversion-centric user flows."
    },
    {
      title: "Web Developemnt", // Preserving original typo
      description: "Building robust, scalable architectures using the latest tech stacks. From high-performance React applications to complex backend integrations, we build for growth."
    },
    {
      title: "Marketing",
      description: "Data-driven strategies designed to scale your reach. We focus on high-impact campaigns that bridge the gap between your product and your ideal customers."
    },
    {
      title: "SEO Optimization",
      description: "Technical SEO and content strategies that ensure your brand dominates search results. We optimize for speed, authority, and organic visibility."
    }
  ];

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-white pt-24 md:py-24 px-6 md:px-16 lg:px-24 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-10 md:mb-16 leading-tight  ">
          The&quot;<span className="font-bold">Growth Architecture</span>&quot; <br />
          Services.
        </h2>

        {/* Services List */}
        <div className="border-t border-white/20">
          {services.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="border-b border-white/20 overflow-hidden"
              >
                {/* Main Row */}
                <div 
                  onClick={() => toggleService(index)}
                  className={`group flex items-center justify-between py-8 cursor-pointer transition-all duration-500 
                    ${isOpen ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'}`}
                >
                  <h3 className={`text-2xl md:text-4xl font-light tracking-tight transition-all duration-500 ease-out 
                    ${isOpen ? 'pl-4 text-white' : 'group-hover:pl-4 text-white/70 group-hover:text-white'}`}>
                    {item.title}
                  </h3>
                  
                  {/* Circular Arrow Button */}
                  <div className={`w-10 h-10 md:w-14 md:h-14 border rounded-full flex items-center justify-center transition-all duration-500 ease-in-out
                    ${isOpen ? 'bg-white text-black border-white rotate-90' : 'border-white/30 group-hover:bg-white group-hover:text-black group-hover:border-white'}`}>
                    <HiOutlineArrowNarrowRight className="text-xl md:text-2xl transform" />
                  </div>
                </div>

                {/* Animated Description Area */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="py-10 pl-4 md:pl-8 pr-12">
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service2;
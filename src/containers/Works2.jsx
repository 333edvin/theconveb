import React from 'react';
import svg3 from '../../public/svgs/svg3.svg';

import work1 from '../../public/images/work1.jpg';
import work2 from '../../public/images/work2.jpg';
import work3 from '../../public/images/work3.jpg';
import work4 from '../../public/images/work4.jpg';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Works2 = () => {
  const projects = [
    { title: "CENO", img: work1 },
    { title: "HoloX", img: work2 },
    { title: "NUXION", img: work3 },
    { title: "ECONEST", img: work4 }
  ];

  return (
    <section className=" text-white py-10 md:py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Header Area */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10 md:gap-0">
        {/* Decorative Wave (Top Left) */}
        <div className="  ">
          <img src={svg3.src} alt="Decorative Wave" className='w-full' />
        </div>

        <div className="max-w-xl md:ml-auto text-right">
          <h2 className="text-4xl md:text-6xl font-light mb-6">Selected Works.</h2>
          <p className="max-w-2xl  text-gray-400 text-sm md:text-xl leading-relaxed mb-8">
            A curated look at the digital experiences we've crafted for <br className="hidden md:block" />
            brands that demand a higher quality.
          </p>
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors">
            View All
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-3 bg-black p-3 rounded-3xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1a1a1a] cursor-pointer"
          >
            {/* Project Image Placeholder */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0">
              <img
                src={project.img.src}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Title Overlay (Bottom Left) */}
            <div className="absolute bottom-8 left-8">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2 block">Case Study</span>
              <h3 className="text-3xl font-bold tracking-tighter">{project.title}</h3>
            </div>

            {/* Hover Arrow (Top Right) */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <HiOutlineArrowNarrowRight className="text-xl -rotate-45" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works2;
import React from 'react';
import svg6 from '../../../../public/svgs/svg5.svg';
import svg5 from '../../../../public/svgs/svg6.svg';
import Image from 'next/image';

const StoryTimeline = () => {
  const events = [
    {
      year: "2025",
      title: "The Spark",
      description: "Started as a two-person freelance studio obsessed with building things that actually work."
    },
    {
      year: "2025",
      title: "Architecture Shift",
      description: "Moved beyond web design into full growth architecture — engineering, marketing, and systems thinking."
    },
    {
      year: "2026",
      title: "Now",
      description: "Making brands looks more unique. Zero plans to slow down."
    }
  ];

  return (
    <section className="relative min-h-screen w-full text-white py-24 px-8 overflow-hidden">
      
       

        <Image src={svg5.src} alt='svg5' width={500} height={600} className='absolute -top-20 md:top-0 -left-40 md:left-0 w-[500px] h-96  pointer-events-none ' />
        <Image src={svg6.src} alt='svg6' width={500} height={600} className='absolute top-24 md:top-60 -right-64 md:right-0 w-[500px] h-96  pointer-events-none' />
      <div className="max-w-4xl mx-auto relative z-10 mt-16 md:mt-48">
        <h2 className="text-4xl md:text-7xl font-medium text-center mb-20 md:mb-32">
          The Story
        </h2>

        <div className="space-y-12 md:space-y-32">
          {events.map((event, index) => (
            <div key={index} className="relative group">
              {/* Massive Background Year */}
              <span className="absolute -top-12 -left-4 md:-left-16 text-[120px] md:text-[180px] font-bold text-white/[0.07] select-none z-0">
                {event.year}
              </span>

              {/* Content */}
              <div className="relative z-10 pl-0 md:pl-10">
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 tracking-tight">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-xl max-w-xl leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
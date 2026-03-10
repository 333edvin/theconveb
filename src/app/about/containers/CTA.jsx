import Link from 'next/link';
import React from 'react';

const ContactCTA = () => {
  return (
    <section className="text-white pt-16 md:py-32 px-4 md:px-6 flex flex-col items-center justify-center text-center">
      <span className="w-32 md:w-52 h-[1px] bg-gray-600 mb-5 transition-all duration-500"></span>

      <div className="max-w-4xl mx-auto w-full">

        {/* Main Headline */}
        <h2 className="text-4xl md:text-8xl font-bold tracking-tight leading-tight mb-3 md:mb-8">
          Ready for your <br />
          <span className="italic font-serif font-normal">next phase?</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-xl max-w-xs md:max-w-2xl mx-auto mb-8 md:mb-16 leading-relaxed">
          We take on a limited number of new clients each quarter. If you&apos;re ready to build
          something that lasts — let&apos;s talk.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-6 md:mb-12 w-full">

          {/* Glowing Primary Button */}
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-white opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
            <Link href='/contact'>
            <button className="relative w-full sm:w-auto bg-white text-black px-8 md:px-10 py-3 md:py-4 text-sm md:text-lg font-medium hover:bg-gray-100 transition-colors duration-300">
              Start a Project
            </button>
            </Link>
          </div>

          {/* Secondary Outline Button */}
          <Link href='/works'>
          <button
            className="w-full sm:w-auto bg-transparent appearance-none border border-white/30 px-8 md:px-10 py-3 md:py-4 text-sm md:text-lg font-medium hover:bg-white/10 transition-all duration-300"
            style={{ WebkitAppearance: 'none' }}
            >
            View Selected Works
          </button>
            </Link>

        </div>

        {/* Availability Badge */}
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-10">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
          Responds in 24 hrs
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
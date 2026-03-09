import React from 'react';

const ContactCTA = () => {
  return (
    <section className="text-white pt-20 md:py-32 px-6 flex flex-col items-center justify-center text-center">
      <span className="w-52 h-[1px] bg-gray-600 mb-5 transition-all duration-500"></span>

      <div className="max-w-4xl mx-auto ">

        {/* Main Headline */}
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight mb-4 md:mb-8">
          Ready for your <br />
          <span className="italic font-serif font-normal">next phase?</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto mb-8 md:mb-16 leading-relaxed">
          We take on a limited number of new clients each quarter. If you're ready to build something that lasts — let's talk.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-6 mb-6 md:mb-12">
          {/* Glowing Primary Button */}
          <div className="relative group">
            {/* The Outer Glow Effect */}
            <div className="absolute -inset-1 bg-white opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

            <button className="relative bg-white text-black px-2 md:px-10 py-4 text-base md:text-lg font-medium hover:bg-gray-100 transition-colors duration-300">
              Start a Project
            </button>
          </div>

          {/* Secondary Outline Button */}
          <button className="border border-white/30 px-3 md:px-10 py-4 text-base md:text-lg font-medium hover:bg-white/10 transition-all duration-300">
            View Selected Works
          </button>
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
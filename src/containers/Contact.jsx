import React from 'react';
import svg4 from '../../public/svgs/svg4.svg';
import Reveal from '@/app/Animations/Reveal';
const Contact = () => {
  return (
    <section className=" text-white pt-8 md:pt-24  relative overflow-hidden">
      {/* Top Decorative Wave */}
      <div className="flex justify-center mb-14">
        <div className="w-full max-w-6xl ">
          <img src={svg4.src} alt="Decorative Wave" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <Reveal>
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">Let&apos;s Build</h2>
        </Reveal>
        <Reveal>

        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed px-8 md:px-0">
          Reach out to discuss your project or just to say hello. We usually respond within 24 hours.
        </p>
        </Reveal>
      </div>

      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: EMBEDDED MAP with grayscale styling */}
        <div className="relative group overflow-hidden rounded-sm border border-white/10 aspect-video lg:aspect-square">
          {/* Embedded OpenStreetMap iframe - no API key required */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31381.139267281556!2d76.2131469!3d10.5288052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1772074896973!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.0) brightness(0.7) opacity(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="embedded-map"
            className="w-full h-full object-cover"
          ></iframe>

          {/* Subtle gradient vignette over map to match the image aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-95 pointer-events-none" />
        </div>

        {/* Right Side: Contact Form */}
        <div className="space-y-3 md:space-y-12 px-6 md:px-8 lg:px-12">
          <div className="relative">
            <label className="block text-xs md:text-2xl font-light text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="relative">
            <label className="block text-xs md:text-2xl font-light text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="relative">
            <label className="block text-xs md:text-2xl font-light text-gray-300 mb-2">Description</label>
            <textarea
              rows="4"
              className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors resize-none"
            ></textarea>
          </div>

          {/* Send Button with Glow */}
          <div className="flex justify-end pt-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-white/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <button className="group relative px-10 py-4 bg-white text-black font-semibold rounded-sm transition-all hover:bg-opacity-90 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:rounded-sm before:bg-white/20 before:blur-xl before:opacity-0 before:transition-opacity hover:before:opacity-100 before:-z-10">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
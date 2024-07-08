import React from 'react';
import Zoomout from '../components/Transitions/Zoomout';

function Hero() {
  return (
    <div className="relative h-screen w-full">
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        loop 
        autoPlay 
        muted
      >
        <source src="/video/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Zoomout>
        <div className="text-center flex flex-col items-center justify-center space-y-6">
          <h1 className=" text-3xl md:text-5xl text-cyan-100 ">
          We are Creative <br /> <span className="text-cyan-500 text-4xl md:text-6xl font-bold">Web Development agency</span> 
          </h1>
          <a href="/contact" className=" px-3 py-2 my-3 text-cyan-300 border-cyan-300 md:hover:border-cyan-100 border rounded-lg font-bold bg-transparent  backdrop-filter backdrop-blur-lg bg-opacity-5">Get Started</a>
        </div>
        </Zoomout>
      </div>
    </div>
  );
}

export default Hero;

import React from 'react';
import About from '../containers/About';
import Action from '../containers/Action';
import '../globals.css'

import { RiUserSmileFill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { MdGppGood } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { MdSelfImprovement } from "react-icons/md";
import { SiGooglecolab } from "react-icons/si";
import { Metadata } from 'next';

export const metadata={
    title:"About"
}

const Page = () => {
  return (
    <>
      <div className="mt-10 bg-slate-950">
        <h1 className="text-center  text-xl md:text-3xl relative top-10">
          More About <span className="font-bold text-cyan-200 text-2xl md:text-4xl">CONVEB</span>
        </h1>
        <About />
      </div>


      {/* Vision & Mission Section */}
      <section className="py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl mb-5">Vision & Mission</h2>
    <p className="text-lg md:text-2xl text-slate-500">
      <span className="text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600  bg-gradient-to-r text-transparent text-gradient" >
        A clear vision ,
      </span> meticulous attention to detail, <br /> and a passion for delivering
      flawless{' '}
      <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600  text-transparent text-gradient sm:text-5xl">
        final products .
      </span>
      
    </p>
  </div>
</section>


      {/* Our Value Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl  mb-5">Our <span className="text-cyan-400">Value</span></h2>
          <p className="text-sm mb-8 text-slate-500 px-5">
            We value innovation and client satisfaction, delivering
            cutting-edge solutions tailored to meet unique business needs. <br/>
             We believe in building lasting partnerships through transparency,
            integrity, and exceptional service.
          </p>

          {/* Grid of Values */}
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            <div className="bg-gray-800 py-8 px-6 rounded-lg md:hover:scale-105">
              <h3 className="text-2xl font-bold mb-4"><RiUserSmileFill/>Customer-focused approach</h3>
              <p className="text-sm ">we prioritize understanding your unique needs to deliver tailored web solutions that exceed expectations.</p>
            </div>
            <div className="bg-gray-800 py-8 px-6 rounded-lg md:hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">
                <BsStars/>Creativity</h3>
              <p className="text-sm ">Crafting immersive digital experiences that captivate and inspire. Our innovative solutions are designed to elevate your brand and engage your audience</p>
            </div>
            <div className="bg-gray-800 py-8 px-6 rounded-lg md:hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">
                <MdGppGood/>Quality</h3>
              <p className="text-sm ">Quality is not just a goal but a standard,Our mission is to deliver top-tier solutions that exceed expectations and drive success.</p>
            </div>
            <div className="bg-gray-800 py-8 px-6 rounded-lg md:hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">
                <LuHeartHandshake/>Transparency</h3>
              <p className="text-sm "> We believe in open communication, honesty, and clarity throughout every project, fostering trust and collaboration with our clients.</p>
            </div>
            <div className="bg-gray-800 py-8 px-6 rounded-lg md:hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">
                <MdSelfImprovement/>Improvement</h3>
              <p className="text-sm ">We proactively seek feedback, innovate with purpose, and evolve our strategies to deliver cutting-edge solutions that drive measurable results.</p>
            </div>
            <div className="bg-gray-800 py-8 px-6 rounded-lg md:hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">
                <SiGooglecolab/>Collaborative</h3>
              <p className="text-sm ">Our inclusive approach ensures every voice is heard, fostering innovation and achieving remarkable outcomes.</p>
            </div>
          </div>
        </div>
      </section>

        <div >
          <Action />
        </div>
    </>
  );
};

export default Page;

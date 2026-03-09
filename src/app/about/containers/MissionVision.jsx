import React from 'react';
import svg7 from '../../../../public/svgs/svg7.svg';
import Image from 'next/image';

const MissionVision = () => {
  return (
    <div className='relative'>
      <section className="relative w-full  text-white pt-20 md:py-32 overflow-hidden px-6 max-w-6xl mx-auto">



        <div className="max-w-8xl mx-auto relative z-10 space-y-20 md:space-y-48">

          {/* Our Mission Section - Aligned Left */}
          <div className=" ">
            <span className="text-gray-400 text-lg block mb-6 font-light">Our Mission</span>
            <h2 className="text-4xl md:text-7xl font-normal leading-tight mb-5 md:mb-10">
              Designing websites <br />
              that truly fit your <br />
              <span className="italic font-serif">business.</span>
            </h2>
            <div className="space-y-2 text-gray-400 text-sm md:text-lg max-w-6xl leading-relaxed">
              <p>
                Our mission is to create website layouts that are <strong className="text-white">built around your business</strong>, not pulled from <span className="line-through decoration-gray-600">random templates</span>.
              </p>
              <p>
                We take time to understand what your business stands for, how it works, and what it needs next.
                Based on that, we design layouts that feel right for your brand and help you <strong className="text-white">grow with confidence</strong>.
              </p>
              <p>
                Every design we create is meant to support your <strong className="text-white">journey</strong>, build <strong className="text-white">trust</strong> with your audience, and move your business <strong className="text-white">forward</strong>.
              </p>
            </div>
          </div>

          {/* Our Vision Section - Aligned Right */}
          <div className="flex flex-col items-end text-right">
            <div className="">
              <span className="text-gray-400 text-lg block mb-6 font-light">Our Vision</span>
              <h2 className="text-4xl md:text-7xl font-normal leading-tight mb-5 md:mb-10">
                A world where the <br />
                best idea always <br />
                <span className="italic font-serif">wins.</span>
              </h2>
              <div className="space-y-2 text-gray-400 text-sm md:text-lg leading-relaxed">
                <p>
                  Our vision is to help business owners see their website as more than just an online<strong className="text-white"> presence</strong>.
                </p>
                <p>
                  We want it to be a powerful tool that <strong className="text-white">represents</strong>  who they are and where they're going.
                </p>
                <p>
                  By creating simple, meaningful, and custom layouts, we aim to help businesses
                  stand out <strong className="text-white">naturally</strong>  and step into their <strong className="text-white">next  phase of growth</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image src={svg7.src} alt='svg5' width={500} height={600} className='absolute bottom-[14rem] md:bottom-52 left-2 md:left-0 h-96 md:h-[600px] opacity-0 md:opacity-100  pointer-events-none' />
    </div>
  );
};

export default MissionVision;
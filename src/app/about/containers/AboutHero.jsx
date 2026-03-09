import React from 'react';
import logo from '../../../../public/images/favicon.png';
import svg6 from '../../../../public/svgs/svg5.svg';
import svg5 from '../../../../public/svgs/svg6.svg';
const AboutHero = () => {
    return (
        <section className="relative h-64 md:min-h-[25rem] w-full  flex flex-col items-center justify-end overflow-hidden ">


                <div className="flex items-center gap-6  md:mt-32 ">
                    <img src={logo.src} alt='logo' className='w-16 h-16 md:w-24 md:h-24' />

                    <div className="text-left border-l border-white/20 pl-6">
                        <h2 className="text-white text-2xl md:text-4xl font-light leading-tight">
                            Simple.<br />
                            Reliable.<br />
                            Digital.
                        </h2>
                    </div>
                </div>

                {/* <h1 className="text-white text-6xl md:text-8xl font-medium tracking-tight">
                    The Story
                </h1> */}
{/* 
                <img src={svg5.src} alt='svg5' className='absolute top-96 left-0 z-0' />
                <img src={svg6.src} alt='svg6' className='absolute bottom-0 right-0 z-0' /> */}


        </section>
    );
};

export default AboutHero;
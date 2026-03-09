import Reveal from '@/app/Animations/Reveal';
import About from '../../public/pngs/about.png';
import svg2 from '../../public/svgs/svg2.svg';

export default function About2() {
    return (
        // Added bg-black, responsive grid, and padding
        <section className="grid grid-cols-1 md:grid-cols-12 ">

            {/* Left Side: Image Container */}
            <div className="col-span-1 md:col-span-5 lg:col-span-5 ">
                <img
                    src={About.src}
                    alt="Conveb Mobile Mockup"
                    // Added h-auto for better responsive scaling
                    className="w-full h-full  "
                />
            </div>

            {/* Right Side: Content Area */}
            <div className="col-span-1 md:col-span-7 lg:col-span-7 relative w-full ">



                {/* Content - Ensured z-index and spacing */}
                <div className="relative z-10 w-full">
                    <div className='flex flex-col justify-between h-full  px-7 py-16 md:px-16 lg:px-112'>
                        <Reveal index={0}>

                            <h2 className="text-[32px] md:text-5xl lg:text-5xl mb-10 md:mb-20">
                                We build for the scale you haven&apos;t reached yet.
                            </h2>
                        </Reveal>

                        <div className="space-y-10 text-gray-400 text-sm md:text-lg lg:text-lg ">
                            <Reveal index={1}>

                                <p className='max-w-xl '>
                                    Most agencies build for today. We build for the &apos; <span className="text-white font-black italic">what if.</span> &apos;
                                    What if your traffic spikes by <span className="text-white font-black">1000%</span>?
                                    What if you need to pivot your entire business model overnight?
                                </p>
                            </Reveal>

                            <div>
                                <Reveal index={2}>
                                    <p className=" text-right ">
                                        At <span className="text-white font-bold uppercase tracking-widest">Conveb</span>,
                                        we don&apos;t just skin websites; we architect digital engines.
                                        We handle the brutal technical complexities—the invisible stuff that
                                        keeps your CEO sleeping at night—so you can focus on the only
                                        thing that matters: <span className="text-white font-black italic">your next phase of growth.</span>
                                    </p>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Right CTA */}
                    <div className=" flex flex-row justify-end md:justify-between items-end  w-full pr-8 md:pr-16 ">
                        {/* Decorative SVG - Adjusted positioning */}
                        <div className=" pointer-events-none hidden md:block">
                            <img src={svg2.src} alt="Decorative SVG" className="w-full h-full object-contain" />
                        </div>
                        <Reveal>

                            <button className="px-10 py-3 md:px-12 md:py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-all transform hover:-translate-y-1">
                                Know More
                            </button>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
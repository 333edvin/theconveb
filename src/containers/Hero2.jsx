import logobg from '../../public/svgs/svglogo.svg';
import svg1 from '../../public/svgs/svg1.svg';
import RunningText from '@/components/RunningText';
import Reveal from '@/app/Animations/Reveal';
import Link from 'next/link';
import Image from 'next/image';

function Hero2() {

    return (
        <div className="relative min-h-screen w-full text-white overflow-hidden">
            {/* Background Decorative Elements - UNTOUCHED */}
            <div className="absolute top-8 md:top-0 left-0 w-full h-full pointer-events-none">
                <Image width={550} height={375} src={logobg.src} alt="Hex Shape Background" className="w-[550px] h-auto object-cover" />
            </div>

            {/* Hero Content - PERFECTLY CENTERED */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 max-w-5xl mx-auto">
                {/* Centering wrapper - using flex/grid to ensure exact center */}
                <div className="flex flex-col items-center justify-center w-full">
                    <Reveal index={1}>

                        <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8">
                            Built for Your <br />
                            <RunningText
                                text="Next Phase"
                                className="font-serif italic font-light text-gray-300"
                                speed={80}
                                scrambleCount={10}
                            /> of Growth.
                        </h1>
                    </Reveal>
                    <Reveal index={2}>

                        <p className="text-gray-400 text-md md:text-xl max-w-2xl leading-relaxed mb-12">
                            We handle the technical side so you can focus on running your business with a
                            platform you can actually trust.
                        </p>
                    </Reveal>
                    <Reveal index={3}>
                        <Link href='/contact'>
                        <button className="group relative px-10 py-4 bg-white text-black font-semibold rounded-sm transition-all hover:bg-opacity-90 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:rounded-sm before:bg-white/20 before:blur-xl before:opacity-0 before:transition-opacity hover:before:opacity-100 before:-z-10">
                            Let&apos;s Grow
                        </button>
                        </Link>
                    </Reveal>
                </div>
            </main>

            {/* Decorative Bottom Shape (The white swirl) - UNTOUCHED */}
            <div className="absolute bottom-0 -right-20 md:right-0 pointer-events-none">
                <Image width={350} height={375} src={svg1.src} alt="Decorative SVG" className="w-[350px] md:w-full h-full object-contain" />
            </div>
        </div>
    )
}

export default Hero2;
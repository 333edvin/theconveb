import Image from 'next/image';
import Hex from '../../../public/images/hex-shape.png';
import HeroImg from '../../../public/images/hero.png';

function Hero() {
  
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={Hex}
          alt="hexagonal-shapes"
          width={690}
          height={650}
          className="absolute top-0 left-0 z-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen relative">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-around md:pt-16 p-5 md:pl-32 w-full z-20">
            <div>
              <h1 className="text-4xl md:text-[5.5rem] font-semibold leading-tight md:leading-snug">
                INNOVATE. CREATE. LAUNCH.
              </h1>
              <p className="text-sm mt-4 w-60 md:w-full">
                We are a Creative Web Development Agency
              </p>

            </div>

            <div className="flex justify-around md:justify-between gap-10 text-center mt-32 md:mt-10 w-full">
              <span>
                <p className="text-3xl md:text-5xl font-bold">10+</p>
                <p className='text-xs md:text-lg'>Clients</p>
              </span>

              <span>
                <p className="text-3xl md:text-5xl font-bold">20+</p>
                <p className='text-xs md:text-lg'>Projects</p>
              </span>

              <span>
                <p className="text-3xl md:text-5xl font-bold">200+</p>
                <p className='text-xs md:text-lg'>Working Hours</p>
              </span>
            </div>
          </div>

          <div className="flex justify-end items-center w-full h-full absolute md:relative top-0 left-24 md:right-0">
            <Image src={HeroImg} alt="Banner Image" width={500} height={500} className=" h-screen w-full md:h-screen object-contain " />
          </div>
        </div>

      </div>

      {/* <div
        className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center mx-auto p-6 md:p-10 h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.jpeg')" }} 
      >
        <div className="flex justify-center">
          <Image
            src="/images/banner.png"
            alt="Banner Image"
            width={500}
            height={500}
            className="max-w-full h-auto rounded-b-full"
          />
        </div>
        <div className="text-left space-y-4 z-20">
          <h1 className="text-3xl md:text-3xl md:text-5xl font-semibold leading-tight md:leading-snug text-white">
            Innovative Web Solutions for a Digital World
          </h1>
          <p className="text-sm text-white">We are Creative Web Development Agency</p>
          <Link href={'/contact'} className="">
          <button className="relative mt-5 px-6 py-2 font-semibold text-white uppercase bg-transparent transition-transform duration-200 border border-cyan-500 rounded shadow-lg hover:scale-105 focus:outline-none z-30">
            <span className="absolute inset-0 rounded blur-lg opacity-75 bg-cyan-500 animate-pulse z-10 "></span>
            Let&apos;s Get Digital
          </button>
          </Link>
        </div>
        <div className="absolute inset-0 md:bg-black/50 bg-black/20 z-10"></div>
      </div> */}
    </>
  );
}

export default Hero;

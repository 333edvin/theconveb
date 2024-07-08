import Image from "next/image"
import about from '../../../public/images/home-about.png'
import DynamicSlide from "../components/Transitions/DynamicSlide"
import Slideleft from "../components/Transitions/Slideleft"

function About() {
  return (
    <div className=' mx-auto px-5 pt-20 md:py-28 bg-slate-950'>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
            <div>
                <Image src={about} alt="about" className="rounded-full"/>
                            </div>
            <div className="flex flex-col justify-center items-center text-center my-8 px-5">
                <div className='font-bold text-3xl md:text-5xl flex flex-col gap-3'>
                  <div className="flex flex-row">
                 <DynamicSlide delay={0.5}> <span className='text-cyan-100'>Design,</span></DynamicSlide>
                 <DynamicSlide delay={0.7}> <span className='text-cyan-300'>Technology,</span></DynamicSlide>
                  </div>
                 <DynamicSlide delay={0.9}><span className='text-cyan-500'>Marketing</span> </DynamicSlide>
                  </div>
                  <Slideleft>
                <p className="text-slate-500 my-5">
                Hi! At Conveb, we specialize in creating digital brand experiences that boost your online success. From captivating design to advanced technology and effective marketing, we&apos;re here to elevate your brand&apos;s digital presence.
                </p>
                  </Slideleft>
            
            </div>
        </div>

    </div>
  )
}

export default About
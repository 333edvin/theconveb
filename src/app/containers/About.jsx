import Image from "next/image"
import about from '../../../public/images/about2.jpeg'
import DynamicSlide from "../components/Transitions/DynamicSlide"
import Slideleft from "../components/Transitions/Slideleft"

function About() {
  return (
    <div className=' mx-auto   bg-[#0d0d0d]'>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
            <div>
                <Image src={about} alt="about" className="w-full object-cover"/>
            </div>
            <div className="relative  md:right-20 right-none flex flex-col justify-center items-end text-end  p-5 ">
                <div className=' text-3xl md:text-5xl flex flex-col gap-3'>
                      <div className="flex flex-row">
                        <DynamicSlide delay={0.5}> <span className='text-cyan-100'>Design,</span></DynamicSlide>
                        <DynamicSlide delay={0.7}> <span className='text-cyan-300'>Develop,</span></DynamicSlide>
                      </div>
                        <DynamicSlide delay={0.9}><span className='text-cyan-500'>Deploy</span> </DynamicSlide>
                </div>
                  <Slideleft>
                    <p className="text-slate-500 my-5 text-sm md:text-lg">
                    Hi! At Conveb, we specialize in creating digital brand experiences that boost your online success. From captivating design to advanced technology and effective marketing, we&apos;re here to elevate your brand&apos;s digital presence.
                    </p>
                  </Slideleft>
            
            </div>
        </div>

    </div>
  )
}

export default About
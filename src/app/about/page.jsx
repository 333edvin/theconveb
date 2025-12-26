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
import Breadcrump from '../components/Breadcrump';

export const metadata={
    title:"About",
    description:'Meet our web development agency, dedicated to crafting innovative digital solutions. Learn about our mission, values & expert team.'
}



const Page = () => {

  const value = [
    {
      id:1,title:"Customer-focused approach",description:"we prioritize understanding your unique needs to deliver tailored web solutions that exceed expectations.",icon:<RiUserSmileFill/>,
    },
    {
      id:2,title:"Creativity",description:"Crafting immersive digital experiences that captivate and inspire. Our innovative solutions are designed to elevate your brand and engage your audience",icon:<BsStars/>,
    },
    {
      id:3,title:"Quality",description:"Quality is not just a goal but a standard,Our mission is to deliver top-tier solutions that exceed expectations and drive success.",icon:<MdGppGood/>,
    },
    {
      id:4,title:"Transparency",description:" We believe in open communication, honesty, and clarity throughout every project, fostering trust and collaboration with our clients.",icon:<LuHeartHandshake/>,
    },
    {
      id:5,title:"Improvement",description:"We proactively seek feedback, innovate with purpose, and evolve our strategies to deliver cutting-edge solutions that drive measurable results.",icon: <MdSelfImprovement/>,
    },
    {
      id:6,title:"Collaborative",description:"Our inclusive approach ensures every voice is heard, fostering innovation and achieving remarkable outcomes.",icon:<SiGooglecolab/>,
    },

  ]
  return (
    <>
      <div className="pt-10 flex flex-col justify-center items-center text-center gap-3">
        <h1 className=" text-xl md:text-3xl mt-10">
          More About <span className="font-bold text-cyan-200 text-2xl md:text-4xl">CONVEB</span>
        </h1>
        <Breadcrump page='About'/>
      </div>
        
        <About />


      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-sm md:text-2xl mb-5">Vision & <span className="text-cyan-400"> Mission </span></h2>
          <p className="text-sm md:text-2xl text-slate-500"> 
            <span className="text-3xl md:text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600  bg-gradient-to-r text-transparent text-gradient" >
              A clear vision , <br/>
            </span> meticulous attention to detail, <br /> and a passion for delivering
            flawless{' '}
            <br/>
            <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600  text-transparent text-gradient sm:text-5xl">
              final products .
            </span>
            
          </p>
        </div>
      </section>


      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-sm md:text-2xl  mb-5">Our <span className="text-cyan-400">Value</span></h2>
          <p className="text-sm mb-8 text-slate-500 px-5">
            We value innovation and client satisfaction, delivering
            cutting-edge solutions tailored to meet unique business needs. <br/>
             We believe in building lasting partnerships through transparency,
            integrity, and exceptional service.
          </p>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            {
              value.map((data)=>(
            <div className="bg-gray-800 py-8 px-6 rounded-lg md:hover:scale-105" key={data.id}>
              <h3 className="md:text-2xl font-bold mb-4">{data.icon}{data.title}</h3>
              <p className="text-xs ">{data.description}</p>
            </div>
              ))
              }
          </div>
        </div>
      </section>

        <div className="mt-10">
          <Action />
        </div>
    </>
  );
};

export default Page;

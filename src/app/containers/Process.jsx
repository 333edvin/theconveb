'use client'
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import Letters from "../components/Transitions/Letters";
import { useState } from "react";
import ImageScroll from "../components/Transitions/ImageZoom";

function Process() {

  const process = [
    {
      id:1,
      title:"Meet",
      desc:'We connect with you to understand your vision and goals, starting our collaboration.',
      icon:<BsFillPeopleFill />,
    },
    {
      id:2,
      title:"Design",
      desc:' Our team creates a visually stunning and user-friendly interface, tailoring it to your needs.',
      icon:<FaPen />,
    },
    {
      id:3,
      title:"Development",
      desc:' We build a robust and scalable solution, writing clean and efficient code.',
      icon:<BsStack />,
    },
    {
      id:4,
      title:"Deploy",
      desc:'We launch your website or application, ensuring a smooth transition to production.',
      icon:<GrDeploy />,
    },

  ]

  const [showText, setShowText] = useState(false); // State to control text visibility

  return (
    <div className="relative mx-auto  overflow-hidden h-screen"> {/* Set a height to ensure the text overlays correctly */}
      <ImageScroll setShowText={setShowText} /> {/* Pass setShowText as a prop */}
      {showText && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center text-slate-400 bg-opacity-50  animate-fadeIn">
          <h1 className="text-cyan-400 text-3xl md:text-5xl font-bold mb-10">The Process</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            {
              process.map((data)=>(
            <div key={data.id} className="w-72">
              <div className="flex items-center justify-center gap-3 text-cyan-100">
                {data.icon}
                <h3 className="font-bold text-xl md:text-2xl">
                  <Letters text={data.title} />
                </h3>
              </div>
              <p className="text-sm">
               {data.desc}
              </p>
            </div>
              ))
            }
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Process;


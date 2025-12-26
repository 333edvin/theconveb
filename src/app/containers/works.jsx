'use client'
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import Letters from "../components/Transitions/Letters";
import { useState } from "react";
import ImageScroll from "../components/Transitions/ImageZoom";

function Works() {

  const projects = [
  {
    id: 1,
    title: "Meet",
    desc: "We connect with you to understand your vision and goals, starting our collaboration.",
    image: "/images/meet.jpg", // make sure to place this image in public/images
  },
  {
    id: 2,
    title: "Design",
    desc: "Our team creates a visually stunning and user-friendly interface, tailoring it to your needs.",
    image: "/images/design.jpg",
  },
  {
    id: 3,
    title: "Development",
    desc: "We build a robust and scalable solution, writing clean and efficient code.",
    image: "/images/development.jpg",
  },
  {
    id: 4,
    title: "Deploy",
    desc: "We launch your website or application, ensuring a smooth transition to production.",
    image: "/images/deploy.jpg",
  },
];

  const [showText, setShowText] = useState(false); // State to control text visibility

  return (
   <div className="relative mx-auto overflow-hidden py-16 px-5 bg-gray-950 min-h-screen">
  <h1 className="text-cyan-400 text-3xl md:text-5xl font-bold text-center mb-16">
    Our Process
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto">
    {projects.map((step) => (
      <div
        key={step.id}
        className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-400/30 transition-shadow duration-300"
      >
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 space-y-2 text-center">
          <h3 className="text-xl text-cyan-300 font-semibold">{step.title}</h3>
          <p className="text-slate-400 text-sm">{step.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Button at the bottom */}
  <div className="mt-16 flex justify-center">
    <a
      href="/works" // Replace with your actual route if using React Router or Next.js Link
      className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
    >
      View Our Work
    </a>
  </div>
</div>




  );
}

export default Works;


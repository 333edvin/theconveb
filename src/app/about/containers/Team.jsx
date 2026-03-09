import React from 'react';
import Team1 from '../../../../public/pngs/team1.png';
import Team2 from '../../../../public/pngs/team2.png';
import Team3 from '../../../../public/pngs/team3.png';
import Image from 'next/image';

const TeamSection = () => {
  const team = [
    {
      name: "Sanal Kumar KR",
      role: "Backend Developer",
      position: "co-founder",
      image: Team1 // Replace with your image path
    },
    {
      name: "Edvin Johnson",
      role: "Frontend Developer & UI/UX",
      position: "Founder",
      image: Team2 // Replace with your image path
    },
    {
      name: "Ansil Unni",
      role: "Marketing & Seo Specialist",
      position: "co-founder",
      image: Team3 // Replace with your image path
    }
  ];

  return (
    <section className="bg-black py-2 md:py-24 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Use justify-items-center to ensure grid children stay in the middle */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
      {team.map((member, index) => (
        <div key={index} className="flex flex-col items-center justify-center w-full max-w-[370px]">
          
          {/* Image Container */}
          <div className="relative w-full aspect-[4/5] -mb-24 md:mb-8 overflow-hidden group">
            <Image
              width={300}
              height={375}
              src={member.image.src}
              alt={member.name}
              className=" md:w-full md:h-full grayscale hover:grayscale-0 transition-all duration-500 ease-in-out object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* Text Content */}
          <div className="space-y-1 text-center z-20">
            <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight">
              {member.name}
            </h3>
            <p className="text-white text-sm md:text-xl font-light">
              {member.role}
            </p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">
              {member.position}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default TeamSection;
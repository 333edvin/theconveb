import React from 'react';
import Team1 from '../../../../public/pngs/team1.png';
import Team2 from '../../../../public/pngs/team2.png';
import Team3 from '../../../../public/pngs/team3.png';
import Image from 'next/image';

const TeamSection = () => {
  const team = [
    {
      name: "Edvin Johnson",
      role: "Frontend Developer & UI/UX",
      position: "Founder",
      image: Team2
    },
    {
      name: "Sanal Kumar KR",
      role: "Backend Developer",
      position: "co-founder",
      image: Team1
    },
    {
      name: "Ansil Unni",
      role: "Marketing & SEO Specialist",
      position: "co-founder",
      image: Team3
    }
  ];

  return (
    <section className="bg-black py-10 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Mobile: horizontal card row — Desktop: 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="
                flex flex-row md:flex-col
                items-center
                gap-4 md:gap-0
                w-full max-w-[370px]
              "
            >
              {/* Image Container */}
              <div className="
                relative
                w-40 h-40
                md:w-full md:aspect-[4/5] md:h-auto
                flex-shrink-0
                overflow-hidden
                rounded-full md:rounded-none
                group
              ">
                <Image
                  src={member.image.src}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 96px, 370px"
                  className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out object-cover object-top"
                />
                {/* Gradient overlay — desktop only */}
                <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center md:mt-4 md:text-center space-y-0.5 md:space-y-1 text-left md:text-center">
                <h3 className="text-white text-lg md:text-3xl font-medium tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-white/70 text-xs md:text-xl font-light">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
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
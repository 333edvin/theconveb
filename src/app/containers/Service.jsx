import Image from "next/image";
import Slideleft from './../components/Transitions/Slideleft';
import Slideright from "../components/Transitions/Slideright";

const services = [
  {
    title: "Web Designing",
    photo: '/images/design.png',
    alt: "Web Development Design",
  },
  {
    title: "Web Development",
    photo: '/images/development.png',
    alt: "SEO Optimization",
  },
  {
    title: "Marketing",
    photo: '/images/marketing.png',
    alt: "Content Creation",
  },
  {
    title: "SEO Optimization",
    photo: '/images/seo.png',
    alt: "Social Media Marketing",
  },
];

function Service() {
  return (
    <div>
      <div className="text-center px-5 py-20">
        <Slideleft>
        <h1 className="font-bold text-2xl md:text-4xl">What can <br /> <span className="text-cyan-500 text-4xl md:text-5xl">We do for you?</span> </h1>
        </Slideleft>
        <Slideleft>
        <p className="text-slate-500 mt-4">We are dedicated to bringing your ideas to life with our expert web development and marketing services.</p>
        </Slideleft>
      </div>

        <Slideright>
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-2xl text-center ">
                <Image
                  src={service.photo}
                  alt={service.alt}
                  width={400}
                  height={400}
                  className="object-cover rounded-2xl "
                  />
                <h3 className="absolute inset-0 flex mt-10 justify-center text-white text-sm md:text-xl font-semibold ">
                  {service.title}
                </h3>
            </div>
          ))}
        </div>
      </div>
          </Slideright>
    </div>
  );
}

export default Service;

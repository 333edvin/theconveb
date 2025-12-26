import ServiceData from "../components/Servicedata";
import Slideright from './../components/Transitions/Slideright';


function Service() {


  return (
    <div className="p-5 pt-10 md:p-20  bg-black">
      <p className="text-xs md:tetx-sm font-semibold text-cyan-500">Our Services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className='flex justify-end items-end'>
          <h2 className="text-3xl md:text-4xl font-semibold my-0 md:my-5">
            Let&apos;s Create Something <span className="text-cyan-500">Amazing Together</span>
          </h2>
        </div>
        <div className='flex  items-center'>
          <p className='text-xs text-slate-400 text-start md:text-end'>We belive that collaboration is the spark that ignites innovation. Our services are designed to help you achive your goals and bring your vision to life.</p>
        </div>
      </div>

      <Slideright>
        <div className="container mx-auto py-10">
          <ServiceData/>
        </div>
      </Slideright>
    </div>
  );
}

export default Service;

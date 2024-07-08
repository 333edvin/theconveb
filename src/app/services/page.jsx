import Image from 'next/image';
import Process from '../containers/Process';
import Service from '../containers/Service';

import service from '../../../public/images/service.png'
import Action from '../containers/Action';
import { Metadata } from 'next';

export const metadata ={
  title : "Services"
}

function page() {
  return (
    <>
         <div className="mt-10 bg-slate-950">
        <h1 className="text-center text-2xl md:text-3xl relative top-10">
          Services
        </h1>
       
        <Service />
      </div>

      <div className='flex justify-center bg-cyan-950'>
        <Image src={service} alt="conveb-services" className=""/>
      </div>

      <div>
        <Process/>
      </div>

      <div>
        <Action/>
      </div>

    </>
  )
}

export default page
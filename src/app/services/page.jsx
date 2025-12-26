import Image from 'next/image';
import Process from '../containers/Process';
import Service from '../containers/Service';

import service from '../../../public/images/services.jpg'
import Action from '../containers/Action';
import { Metadata } from 'next';
import Breadcrump from '../components/Breadcrump';

export const metadata ={
  title : "Services",
  description:'Expert web development services: web design,web development,seo optimization & mareting. Drive online success with our solutions.'
}

function page() {
  return (
    <>
      <div className="pt-10 flex flex-col justify-center items-center text-center gap-3">
        <h1 className=" text-xl md:text-3xl mt-10">
          Services
        </h1>
        <Breadcrump page='Services'/>
      </div>
        <Service />

      <div className='grid grid-cols-1 md:grid-cols-2 p-5'>
        <Image src={service} alt="conveb-services" className=""/>
        <div className="py-5 md:p-5 space-y-4 ">
          <h1 className="text-2xl">We&apos;re here to help you</h1>
          <p>
          Our comprehensive approach covers every aspect of web development, from initial concept to launch and beyond. We leverage the latest technologies, trends, and best practices to deliver tailored solutions that meet your specific needs and goals. Whether you&apos;re looking to establish an online presence, revamp your existing site, or drive business growth through digital innovation, our team is dedicated to delivering exceptional results that exceed your expectations.
          </p>
        </div>
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
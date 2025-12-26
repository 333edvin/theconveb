
import { Metadata } from 'next';
import PageClient from './page.client';
import Breadcrump from '../components/Breadcrump';

export const metadata ={
  title : "Contact",
  description:'Get in touch with our web development agency. Contact us for expert solutions, project inquiries, and more. Lets build something great together!'
}

// the client codes are in seperate file because we cant use metadata in "use client" component

export default function ContactPage() {


  return (
    <>
      <section className="py-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 mx-auto p-10">
        <div className=" col-span-1 space-y-2">
          <h1 className="text-xl md:text-3xl mt-10">Contact</h1>
          <Breadcrump page="Contact" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <PageClient />
        </div>
      </div>

        </section>
    </>
  );
}

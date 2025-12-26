'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/conveb.png'
import head from '../../../public/images/logo2.jpg'
import logo3 from '../../../public/images/logo3.jpeg'
import React, { useState } from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
  <nav className="bg-transparent  p-1 px-4 fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto flex items-center justify-between">

      {/* LEFT: LOGO */}
      <div className="">
        <Image src={logo} alt="logo" className="w-32 object-cover my-3 border border-slate-500 p-2 rounded-full bg-black/50 backdrop-blur-sm" />
      </div>

      {/* CENTER: DESKTOP MENU (hidden on mobile) */}
      <div className="hidden sm:flex flex-1 justify-center space-x-8  ">
        <div className='flex gap-8 border border-slate-500 p-2 rounded-full bg-black/50 p-4 px-6 backdrop-blur-md'>

        <Link href="/" className="hover:text-cyan-300">Home</Link>
        <Link href="/about" className="hover:text-cyan-300">About</Link>
        <Link href="/services" className="hover:text-cyan-300">Services</Link>
        <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
        </div>
      </div>

      {/* RIGHT: MOBILE MENU ICON (hidden on desktop) */}
      <div className="sm:hidden  border border-slate-500 p-2 rounded-full bg-black/50">
        <button onClick={toggleDrawer} className="text-white focus:outline-none m-2 bg-transparent">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

    </div>
  </nav>

  {/* MOBILE DRAWER */}
  <div
    className={`fixed inset-0  bg-opacity-50 z-50 transform ${
      drawerOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 ease-in-out sm:hidden`}
  >
    <div className="flex flex-col justify-between bg-transparent backdrop-blur-md w-64 h-full shadow-xl absolute right-0 ">
      <div className="p-4 text-end ">
        <button onClick={toggleDrawer} className="text-white-700 focus:outline-none bg-transparent border rounded-full p-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="h-full pb-10 ">
        <div className="flex flex-col justify-center items-center text-center">
          <Image src={logo} alt="conveb-logo-name" className="w-48 mb-10" />

          <ul>
            <li className="p-4 ">
              <Link href="/" className="text-white-700" onClick={closeDrawer}>Home</Link>
            </li>
            <li className="p-4 ">
              <Link href="/about" className="text-white-700" onClick={closeDrawer}>About</Link>
            </li>
            <li className="p-4 ">
              <Link href="/services" className="text-white-700" onClick={closeDrawer}>Services</Link>
            </li>
            <li className="p-4">
              <Link href="/contact" className="text-white-700" onClick={closeDrawer}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="text-white p-3 my-5 text-center text-xs space-y-2 ">
          {/* <p className="border-b py-2">CONTACT INFO</p>
          <p>Thrissur, Kerala, India</p>
          <p>info@conveb.com</p> */}
          <br />
          {/* <p>+91 8129 779 713</p>
          <p>OR</p>
          <p>+91 9633 483 349</p> */}

          <div className="flex gap-3 justify-center text-3xl mt-4">
            <a href="https://wa.me/8129779713"><RiWhatsappFill /></a>
            <a href="instagram://user?username=conveb_"><AiFillInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Header
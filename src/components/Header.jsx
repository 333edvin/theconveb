'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/conveb.png'
import React, { useState } from 'react'
import { RiLinkedinBoxFill, RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div>
      <nav className="bg-transparent p-1 px-4 fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto flex items-center justify-between ">

          {/* LEFT: LOGO */}
          <div>
            <Image src={logo} alt="logo" className="w-32 object-cover my-3 border border-slate-500 p-2 rounded-full bg-black/50 backdrop-blur-sm" />
          </div>

          {/* CENTER: DESKTOP MENU */}
          <div className="hidden sm:flex justify-center">
            <div className='flex gap-8 border border-slate-500 p-3 rounded-full bg-black/50 px-6 backdrop-blur-md'>
              <Link href="/" className="hover:text-cyan-300 text-white">Home</Link>
              <Link href="/about" className="hover:text-cyan-300 text-white">We are..</Link>
              <Link href="/work" className="hover:text-cyan-300 text-white">Works</Link>
              <Link href="/contact" className="hover:text-cyan-300 text-white">Connect</Link>
            </div>
          </div>

          {/* RIGHT: HAMBURGER — only shows when drawer is closed */}
          <div className={`sm:hidden border border-slate-500 rounded-full bg-black/50 overflow-hidden transition-opacity duration-300 ${drawerOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <button onClick={toggleDrawer} className="bg-transparent appearance-none text-white focus:outline-none p-3 flex items-center justify-center">
              <RiMenu3Line className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen z-[55] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          drawerOpen ? "clip-circle-open" : "clip-circle-closed"
        } bg-black/30 backdrop-blur-xl sm:hidden `}
      >
        {/* ── CLOSE BUTTON — lives inside the drawer so it's always on top ── */}
        <button
          onClick={closeDrawer}
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full border border-slate-500 bg-black/50 text-white hover:text-cyan-300 transition-colors"
          aria-label="Close menu"
        >
          <RiCloseLine className="text-2xl " />
        </button>

        <div className={`flex flex-col items-center text-start transition-all duration-500 delay-300 ${drawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Image src={logo} alt="conveb-logo-name" className="w-48 mb-10" />

          <ul className="space-y-8 text-xl font-medium">
            <li>
              <Link href="/" className="flex items-center gap-4 text-white hover:text-cyan-300" onClick={closeDrawer}>
                <span className="w-5 h-[2px] bg-white rounded-full opacity-60" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-4 text-white hover:text-cyan-300" onClick={closeDrawer}>
                <span className="w-5 h-[2px] bg-white rounded-full opacity-60" />
                We are..
              </Link>
            </li>
            <li>
              <Link href="/work" className="flex items-center gap-4 text-white hover:text-cyan-300" onClick={closeDrawer}>
                <span className="w-5 h-[2px] bg-white rounded-full opacity-60" />
                Works
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-4 text-white hover:text-cyan-300" onClick={closeDrawer}>
                <span className="w-5 h-[2px] bg-white rounded-full opacity-60" />
                Connect
              </Link>
            </li>
          </ul>

          <div className="flex gap-6 justify-center text-2xl mt-12 text-white">
            <a href="https://wa.me/8129779713" className="hover:text-green-500 transition-colors"><RiWhatsappFill /></a>
            <a href="https://instagram.com/conveb_" className="hover:text-pink-500 transition-colors"><AiFillInstagram /></a>
            <a href="https://linkedin.com/company/conveb" className="hover:text-blue-500 transition-colors"><RiLinkedinBoxFill /></a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-circle-closed {
          clip-path: circle(0% at calc(100% - 45px) 45px);
          pointer-events: none;
        }
        .clip-circle-open {
          clip-path: circle(150% at calc(100% - 45px) 45px);
          pointer-events: all;
        }
      `}</style>
    </div>
  )
}

export default Header
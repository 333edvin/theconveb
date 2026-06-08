'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/favicon.png'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi';
import { useSplashDone } from '@/app/context/SplashContext';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'We are..' },
  { href: '/work', label: 'Works' },
]

function Header() {
  const splashDone = useSplashDone();
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const currentPage = links.find(l => l.href === pathname)?.label ?? 'Home'
  if (!splashDone) return null;
  return (
    <nav className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ width: '56px', y: -40, opacity: 0 }}
        animate={{ width: '100%', y: 0, opacity: 1 }}
        transition={{
          width: { duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] },
          y: { duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.5, delay: 0.1, ease: 'easeOut' },
        }}
        className="max-w-xs overflow-hidden"
        onMouseEnter={() => { if (window.innerWidth >= 640) setOpen(true) }}
        onMouseLeave={() => { if (window.innerWidth >= 640) setOpen(false) }}
      >
        <div className="bg-black/65 backdrop-blur-xl border border-white/50 md:border-white/15 rounded-3xl overflow-hidden">


          {/* BOTTOM BAR ROW */}
          <div
            className="relative flex items-center h-14 px-3 sm:cursor-default cursor-pointer"
            onClick={() => { if (window.innerWidth < 640) setOpen(prev => !prev) }}
            >
            {/* LOGO — starts centered, slides to left */}
            <motion.div
              initial={{ left: '50%', x: '-50%' }}
              animate={{ left: '12px', x: '0%' }}
              transition={{ duration: 1, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-3 -translate-y-1/2"
            >
              <Image
                src={logo}
                alt="conveb logo"
                className="w-12 h-8 object-contain"
              />
            </motion.div>

            {/* PAGE NAME */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              className="w-full text-center text-white text-sm"
            >
              {currentPage}
            </motion.span>

            {/* HAMBURGER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-[5px] items-center w-5"
            >
              <span className={`block w-[18px] h-[1.5px] rounded-full transition-all duration-300 ${open ? 'bg-white rotate-45 translate-y-[6.5px]' : 'bg-white/70'}`} />
              <span className={`block w-[12px] h-[1.5px] rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : 'bg-white'}`} />
              <span className={`block w-[18px] h-[1.5px] rounded-full transition-all duration-300 ${open ? 'bg-white -rotate-45 -translate-y-[6.5px]' : 'bg-white/70'}`} />
            </motion.div>
          </div>

          {/* LINKS */}
          <div
            className={`flex flex-col text-center items-center gap-0.5 transition-all duration-300 ease-in-out overflow-hidden bg-white/10 rounded-xl
              ${open ? 'max-h-64 opacity-100 pt-3 px-3 m-2' : 'max-h-0 opacity-0 pt-0 px-3'}`}
          >
            {links.map(({ href, label }) => (
              <>
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-center gap-3 px-4 py-2.5 w-full rounded-xl text-sm transition-colors
                  ${pathname === href
                    ? 'font-bold text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.07]'
                  }`}
                  >
                {label}
              </Link>
                </>
            ))}
            <a href="/contact" className="mt-2 bg-white flex items-center justify-center gap-3 px-4 py-2.5 w-full  text-sm transition-colors text-black hover:text-black/80 ">
              contact <FiArrowUpRight />
            </a>
            <div className="h-px bg-white/8 mx-1 mt-2" />
          </div>
        </div>
      </motion.div>
    </nav>
  )
}

export default Header
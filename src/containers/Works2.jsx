"use client";
import React, { useEffect, useState } from 'react';
import svg3 from '../../public/svgs/svg3.svg';
import work1 from '../../public/images/work1.jpg';
import work1_1 from '../../public/images/work1.1.jpg';
import work1_2 from '../../public/images/work1.2.jpg';
import work2 from '../../public/images/work2.jpg';
import work2_1 from '../../public/images/work2.1.jpg';
import work2_2 from '../../public/images/work2.2.jpg';
import work3 from '../../public/images/work3.jpg';
import work3_1 from '../../public/images/work3.1.jpg';
import work3_2 from '../../public/images/work3.2.jpg';
import work4 from '../../public/images/work4.jpg';
import work4_1 from '../../public/images/work4.1.jpg';
import work4_2 from '../../public/images/work4.2.jpg';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Reveal from '@/app/Animations/Reveal';
import { useRouter, useSearchParams } from "next/navigation";
import WorkDrawer from './Workdrawer';
import Link from 'next/link';
import Image from 'next/image';

// ─── Add your real data here ──────────────────────────────────────────────────
// slug     → appears in URL: /?project=ceno
// images[] → array of screenshots shown inside the drawer
// cover    → the card thumbnail (same as your existing work1/work2 etc.)
const WORKS = [
  {
    slug: "ceno",
    title: "CENO",
    subtitle: "Brand & Web Experience",
    category: "Case Study",
    year: "2024",
    tags: ["Branding", "Next.js", "Figma"],
    description: "A full digital experience designed for CENO — from brand identity through to a performant, animated web presence.",
    link: "https://example.com",
    cover: work1.src,
    images: [work1_1.src, work1_2.src], // add more screenshots here
  },
  {
    slug: "holox",
    title: "HoloX",
    subtitle: "Product Design & Dev",
    category: "Case Study",
    year: "2024",
    tags: ["Product Design", "React", "Motion"],
    description: "HoloX needed a bold, futuristic interface. We designed and built a high-performance product site with immersive scroll animations.",
    link: "https://example.com",
    cover: work2.src,
    images: [work2_1.src, work2_2.src],
  },
  {
    slug: "nuxion",
    title: "NUXION",
    subtitle: "SaaS Dashboard UI",
    category: "Case Study",
    year: "2023",
    tags: ["Dashboard", "Tailwind", "Dark UI"],
    description: "End-to-end UI design and frontend build for NUXION's SaaS analytics platform. Dark-first, data-dense, and fast.",
    link: null,
    cover: work3.src,
    images: [work3_1.src, work3_2.src],
  },
  {
    slug: "econest",
    title: "ECONEST",
    subtitle: "E-Commerce Platform",
    category: "Case Study",
    year: "2023",
    tags: ["E-Commerce", "Shopify", "Framer Motion"],
    description: "A sustainable home goods brand needed a storefront that matched their values. Custom Shopify build with editorial-style layouts.",
    link: "https://example.com",
    cover: work4.src,
    images: [work4_1.src, work4_2.src],
  },
];

// ─── Works2 ───────────────────────────────────────────────────────────────────
const Works2 = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeWork, setActiveWork] = useState(null);


  // Restore drawer on page reload via ?project= URL param
  useEffect(() => {
    const slug = searchParams.get("project");
    if (slug) {
      const found = WORKS.find((w) => w.slug === slug);
      if (found) setActiveWork(found);
    }
  }, [searchParams]);

  function openWork(work) {
    setActiveWork(work);
    router.push(`?project=${work.slug}`, { scroll: false });
  }

  function closeWork() {
    setActiveWork(null);
  }

  return (
    <section className="text-white pt-10 md:py-20 px-6 md:px-16 lg:px-24 ">
      {/* Header Area */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10 md:gap-0">
        <div>
          <Image width={500} height={375} src={svg3.src} alt="Decorative Wave" className='w-full' />
        </div>

        <div className="max-w-xl md:ml-auto text-right">
          <Reveal index={0}>
            <h2 className="text-4xl md:text-6xl font-light mb-6">Selected Works.</h2>
          </Reveal>
          <Reveal index={1}>
            <p className="max-w-2xl text-gray-400 text-sm md:text-xl leading-relaxed mb-8">
              A curated look at the digital experiences we&apos;ve crafted for <br className="hidden md:block" />
              brands that demand a higher quality.
            </p>
          </Reveal>
          <Reveal index={2}>
            <Link href='/work'>
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors">
                View All
              </button>
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-3 bg-black p-2 md:p-3 rounded-3xl">
        {WORKS.map((work) => (
          <div
            key={work.slug}
            onClick={() => openWork(work)}
            className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] cursor-pointer h-[250px] md:h-[400px] lg:h-[360px]"
          >
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Image
                fill
                src={work.cover}
                alt={work.title}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute bottom-3 left-3 md:bottom-8 md:left-8">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2 block">
                {work.category}
              </span>
              <h3 className="text-3xl font-bold tracking-tighter">{work.title}</h3>
            </div>

            <div className="absolute top-2 right-2 md:top-8 md:right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <HiOutlineArrowNarrowRight className="text-xl -rotate-45" />
            </div>
          </div>
        ))}
      </div>

      {/* Drawer */}
      <WorkDrawer work={activeWork} onClose={closeWork} />
    </section>
  );
};

export default Works2;
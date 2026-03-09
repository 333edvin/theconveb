"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import WorkDrawer from "@/containers/Workdrawer";
import work1 from '../../../public/images/work1.jpg';
import work1_1 from '../../../public/images/work1.1.jpg';
import work1_2 from '../../../public/images/work1.2.jpg';
import work2 from '../../../public/images/work2.jpg';
import work2_1 from '../../../public/images/work2.1.jpg';
import work2_2 from '../../../public/images/work2.2.jpg';
import work3 from '../../../public/images/work3.jpg';
import work3_1 from '../../../public/images/work3.1.jpg';
import work3_2 from '../../../public/images/work3.2.jpg';
import work4 from '../../../public/images/work4.jpg';
import work4_1 from '../../../public/images/work4.1.jpg';
import work4_2 from '../../../public/images/work4.2.jpg';
import Image from "next/image";

// ─── YOUR WORKS DATA ──────────────────────────────────────────────────────────
// Replace images[] with your real screenshot URLs.
// The `slug` is what appears in the URL: /work?project=your-slug
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
    slug: "auxion",
    title: "AUXION",
    subtitle: "SaaS Dashboard UI",
    category: "Case Study",
    year: "2023",
    tags: ["Dashboard", "Tailwind", "Dark UI"],
    description: "End-to-end UI design and frontend build for AUXION's SaaS analytics platform. Dark-first, data-dense, and fast.",
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

// ─── WorkCard ─────────────────────────────────────────────────────────────────
function WorkCard({ work, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden bg-[#111] text-left w-full"
      style={{ aspectRatio: "4/3" }}
    >
      {/* image */}
      <Image
        width={500} height={375}
        src={work.cover}
        alt={work.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 55%)",
        }}
      >
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-1">
          {work.category}
        </span>
        <h3
          className="text-white font-bold text-lg leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {work.title}
        </h3>
        <p className="text-white/50 text-xs mt-0.5">{work.subtitle}</p>
      </div>

      {/* hover arrow */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/15 flex items-center justify-center transition-all duration-300 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 11L11 1M11 1H4M11 1v7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────
export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeWork, setActiveWork] = useState(null);

  // On mount (including reload), read ?project= from URL and open drawer
  useEffect(() => {
    const slug = searchParams.get("project");
    if (slug) {
      const found = WORKS.find((w) => w.slug === slug);
      if (found) setActiveWork(found);
    }
  }, [searchParams]);

  function openWork(work) {
    setActiveWork(work);
    // push slug into URL so reload restores the state
    router.push(`/work?project=${work.slug}`, { scroll: false });
  }

  function closeWork() {
    setActiveWork(null);
  }

  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* header */}
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-3">
            Selected Work
          </p>
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-none"
          >
            Things we built
          </h1>
        </div>

        {/* grid */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {WORKS.map((work) => (
              <WorkCard key={work.slug} work={work} onClick={() => openWork(work)} />
            ))}
          </div>
        </div>
      </main>

      {/* drawer (portal-like, fixed overlay) */}
      <WorkDrawer work={activeWork} onClose={closeWork} />
    </>
  );
}
"use client";

import { useState } from "react";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });

const posts = [
  {
    id: 1,
    tag: "Strategy",
    number: "01",
    title: "Why Most Agencies Build for Today—Not for What's Next",
    excerpt:
      "The difference between a site that scales and one that collapses under pressure isn't design. It's architecture. We break down the frameworks that survive 3000% traffic spikes.",
    readTime: "5 min read",
    date: "Apr 12, 2025",
  },
  {
    id: 2,
    tag: "Engineering",
    number: "02",
    title: "The Invisible Stack: Technical Complexity Your CEO Doesn't See",
    excerpt:
      "Infrastructure decisions made at launch day haunt companies for years. Here's the brutal truth about what's running beneath your digital engine.",
    readTime: "8 min read",
    date: "Apr 03, 2025",
  },
  {
    id: 3,
    tag: "Growth",
    number: "03",
    title: "SEO in 2025: Death of the Keyword, Rise of Intent Architecture",
    excerpt:
      "Search has fundamentally changed. The brands winning aren't optimizing for terms — they're engineering for intent.",
    readTime: "6 min read",
    date: "Mar 28, 2025",
  },
  {
    id: 4,
    tag: "Design",
    number: "04",
    title: "We Don't Build Websites. We Architect Digital Engines.",
    excerpt:
      "Aesthetic is nothing without performance. Performance means nothing without clarity. Here's how we approach design as a systems problem.",
    readTime: "4 min read",
    date: "Mar 19, 2025",
  },
];

const featured = posts[0];
const rest = posts.slice(1);

export default function BlogSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={`${dmSans.className} min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20`}>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase mb-3">— From the Studio</p>
          <h2 className={`${dmSerif.className} text-white text-5xl md:text-6xl lg:text-7xl leading-none`}>
            The{" "}
            <em>&ldquo;Growth</em>
            <br />
            Intelligence&rdquo;
            <br />
            Journal.
          </h2>
        </div>
        <button className="self-start md:self-auto border border-white/20 text-white text-sm px-8 py-3 tracking-wide hover:bg-white hover:text-black transition-all duration-300">
          View All →
        </button>
      </div>

      {/* Featured Post */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/10 mb-1">
        {/* Image side */}
        <div className="bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#111] min-h-64 lg:min-h-80 flex items-end p-8">
          <div className="space-y-2">
            <span className="bg-white text-black text-[10px] tracking-[0.15em] uppercase px-3 py-1 inline-block font-medium">
              {featured.tag}
            </span>
            <p className="text-white/30 text-xs">{featured.date}</p>
          </div>
        </div>

        {/* Text side */}
        <div className="border-t border-white/10 lg:border-t-0 lg:border-l border-white/10 p-8 lg:p-12 flex flex-col justify-between min-h-64 lg:min-h-80">
          <div>
            <p className="text-white/30 text-[10px] tracking-widest uppercase mb-6">Featured</p>
            <h3 className={`${dmSerif.className} italic text-white text-2xl md:text-3xl leading-tight mb-6`}>
              {featured.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">{featured.excerpt}</p>
          </div>
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <span className="text-white/30 text-xs">{featured.readTime}</span>
            <button className="w-9 h-9 border border-white/20 flex items-center justify-center text-white text-sm hover:bg-white hover:text-black hover:translate-x-1 transition-all duration-300">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-1" />

      {/* Post List */}
      <div className="border border-white/10 border-t-0 divide-y divide-white/10">
        {rest.map((post) => (
          <div
            key={post.id}
            className="relative overflow-hidden p-6 md:p-8 cursor-pointer hover:bg-white/[0.03] transition-all duration-500 group"
            onMouseEnter={() => setHovered(post.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background number */}
            <span
              className={`${dmSerif.className} italic absolute top-0 right-4 text-[clamp(48px,8vw,96px)] leading-none select-none pointer-events-none text-white/[0.06] group-hover:text-white/10 transition-colors duration-500`}
            >
              {post.number}
            </span>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 pr-16 md:pr-24">
              {/* Tag + Date */}
              <div className="flex-shrink-0 md:w-28 space-y-1">
                <p className="text-white/60 text-[10px] tracking-[0.15em] uppercase">{post.tag}</p>
                <p className="text-white/25 text-xs">{post.date}</p>
              </div>

              {/* Title + Excerpt */}
              <div className="flex-1 min-w-0">
                <h3
                  className={`${dmSerif.className} text-white text-lg md:text-xl leading-snug mb-2 transition-all duration-200 ${
                    hovered === post.id ? "italic" : "not-italic"
                  }`}
                >
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>

              {/* Read time + Arrow */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="hidden md:block text-white/25 text-xs">{post.readTime}</span>
                <button className="w-9 h-9 border border-white/20 flex items-center justify-center text-white text-sm hover:bg-white hover:text-black hover:translate-x-1 transition-all duration-300">
                  →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe Strip */}
      <div className="mt-16 border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase mb-2">— Stay Ahead</p>
          <h4 className={`${dmSerif.className} italic text-white text-2xl md:text-3xl`}>
            Insights for your next phase of growth.
          </h4>
        </div>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 md:w-56 bg-transparent border border-white/20 text-white placeholder-white/25 px-4 py-3 text-sm outline-none focus:border-white/50 transition-colors"
          />
          <button className="bg-white text-black text-sm px-6 py-3 hover:bg-white/80 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
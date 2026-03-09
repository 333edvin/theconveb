"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

function useLockScroll(active) {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [active]);
}

export default function WorkDrawer({ work, onClose }) {
    const router = useRouter();
    const pathname = usePathname();
    const drawerRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [activeImg, setActiveImg] = useState(0);
    const [modal, setModal] = useState(false);

    useLockScroll(!!work);

    useEffect(() => {
        if (work) {
            // double rAF — ensures element is painted before transition starts
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setVisible(true));
            });
            setActiveImg(0);
        } else {
            setVisible(false);
        }
    }, [work]);

    function handleClose() {
        setVisible(false);
        setTimeout(() => {
            onClose();
            router.push(pathname, { scroll: false });
        }, 380);
    }

    function handleBackdrop(e) {
        if (e.target === e.currentTarget) handleClose();
    }

    useEffect(() => {
        function onKey(e) { if (e.key === "Escape") handleClose(); }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    if (!work) return null;

    return (
        <div
            onClick={handleBackdrop}
            className="fixed inset-0 z-50 flex items-end"
            style={{
                background: visible ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
                backdropFilter: visible ? "blur(6px)" : "blur(0px)",
                transition: "background 0.35s ease, backdrop-filter 0.35s ease",
            }}
        >
            {/* drawer panel */}
            <div
                ref={drawerRef}
                style={{
                    transform: visible ? "translateY(0)" : "translateY(100%)",
                    transition: "transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)",
                    maxHeight: "96dvh",
                    willChange: "transform",
                }}
                className="w-full bg-[#0d0d0d] rounded-t-3xl flex flex-col overflow-hidden"
            >
                {/* drag handle */}
                <div className="flex justify-center pt-3  flex-shrink-0">
                    <div className="w-10 h-1 rounded-full bg-white/30" />
                </div>

                {/* header */}
                <div className="flex items-start justify-between px-4 sm:px-8 md:px-12 lg:px-20 pt-3 pb-4 flex-shrink-0">
                    <div className="flex-1 min-w-0 pr-4">

                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight truncate">
                            {work.title}
                        </h2>
                        <p className="text-white/50 text-xs sm:text-sm mt-1">{work.subtitle}</p>
                    </div>

                    <button
                        onClick={handleClose}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
                        aria-label="Close"
                    >
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                            <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* scrollable body */}
                <div
                    className="overflow-y-auto flex-1 px-4 sm:px-8 md:px-12 lg:px-20 pb-10 container mx-auto"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                        overscrollBehavior: "contain",
                    }}
                >
                    {/* main cover image */}
                    <div
                        className="w-full rounded-xl sm:rounded-2xl overflow-hidden mb-5 bg-white/5 "
                    >
                        <img
                            src={work.cover}
                            alt={work.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* sub images — responsive scrollable row */}
                    {work.images && work.images.length > 0 && (
                        <div
                            className="flex flex-row gap-2 sm:gap-4 mb-6 overflow-x-auto"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {work.images.map((src, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-white/5 max-w-96 h-52 md:h-96" onClick={() => setModal(src)}

                                >
                                    <img
                                        src={src}
                                        alt={`${work.title} ${i + 1}`}
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {modal && (
                        <div
                            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
                            onClick={() => setModal(false)}
                        >
                            <img
                                src={modal}
                                alt="Preview"
                                className="max-w-full max-h-full object-contain rounded-xl"
                            />
                            <button
                                onClick={() => setModal(false)}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black hover:bg-white/20 flex items-center justify-center"
                            >
                                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                    <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* tags + year */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70"
                            >
                                {tag}
                            </span>
                        ))}
                        <span className="ml-auto text-xs text-white/30 self-center">{work.year}</span>
                    </div>

                    {/* description */}
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                        {work.description}
                    </p>

                    {/* CTA */}
                    {/* {work.link && (
                        <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
                        >
                            View Live
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    )} */}
                </div>
            </div>
        </div>
    );
}
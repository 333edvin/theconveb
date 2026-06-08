'use client';

import { useEffect, useState, useRef } from 'react';
import { useSplashDone, useSplashFinish } from "@/app/context/SplashContext";
import SplashImg1 from '../../public/pngs/splash-1.png'
import SplashImg2 from '../../public/pngs/splash-2.png'
import SplashImg3 from '../../public/pngs/splash-3.png'
import Image from 'next/image';

const IMAGES = [SplashImg1, SplashImg2, SplashImg3];

const DURATION = 3000;
const TOTAL_STALL = 500 + 250 + 400; // sum of all checkpoint stalls
const INTERVAL = (DURATION + TOTAL_STALL) / IMAGES.length;

const CHECKPOINTS = [
    { at: 25, stall: 500 },
    { at: 50, stall: 250 },
    { at: 75, stall: 400 },
];

export default function SplashScreen() {
    const finish = useSplashFinish(); // only finish, no done check needed
    const [currentImg, setCurrentImg] = useState(0);
    const [progress, setProgress] = useState(0);
    const stallingRef = useRef(false);
    const startTime = useRef(null);
    const rafRef = useRef(null);
    const passedCheckpoints = useRef(new Set());

    useEffect(() => {
        startTime.current = Date.now();

        let imgIndex = 0;
        const imgInterval = setInterval(() => {
            imgIndex += 1;
            if (imgIndex < IMAGES.length) {
                setCurrentImg(imgIndex);
            } else {
                clearInterval(imgInterval);
            }
        }, INTERVAL);

        const animate = () => {
            if (stallingRef.current) {
                rafRef.current = requestAnimationFrame(animate);
                return;
            }

            const elapsed = Date.now() - startTime.current;
            const natural = Math.min((elapsed / DURATION) * 100, 100);

            const checkpoint = CHECKPOINTS.find(
                cp => !passedCheckpoints.current.has(cp.at) && natural >= cp.at
            );

            if (checkpoint) {
                passedCheckpoints.current.add(checkpoint.at);
                stallingRef.current = true;
                setTimeout(() => {
                    stallingRef.current = false;
                    startTime.current += checkpoint.stall;
                }, checkpoint.stall);
            }

            setProgress(natural);

            if (natural < 100) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                clearInterval(imgInterval);
                setTimeout(() => finish(), 400);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            clearInterval(imgInterval);
            cancelAnimationFrame(rafRef.current);
        };
    }, [finish]);

    return (
        <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center gap-6">
            {/* 3D Realistic Image Box */}
            <div style={{
                position: 'relative',
                borderRadius: '1.25rem',
                padding: '0.18em',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))',
                boxShadow: `
    0 0 0 1px rgba(255,255,255,0.08),
    0.08em 0.08em 0.15em 0 rgba(0,0,0,0.9),
    -0.04em -0.04em 0.08em 0 rgba(255,255,255,0.06),
    0 0.3em 0.8em 0.1em rgba(0,0,0,0.7),
    0 0 0 0.12em inset rgba(255,255,255,0.04),
    0.12em 0.2em 0.4em 0 inset rgba(0,0,0,0.6),
    -0.06em -0.1em 0.2em 0 inset rgba(255,255,255,0.07)
  `,
            }}>
                {/* Top-left shine */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '1.25rem',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 50%)',
                    zIndex: 2,
                    pointerEvents: 'none',
                }} />

                {/* Bottom-right depth shadow */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '1.25rem',
                    background: 'linear-gradient(315deg, rgba(0,0,0,0.4) 0%, transparent 50%)',
                    zIndex: 2,
                    pointerEvents: 'none',
                }} />

                {/* Inner image surface */}
                <div style={{
                    position: 'relative',
                    width: '8rem',
                    height: '8rem',
                    borderRadius: '1.1rem',
                    overflow: 'hidden',
                    boxShadow: `
      0.05em 0.05em 0.1em 0 inset rgba(0,0,0,0.8),
      -0.03em -0.03em 0.06em 0 inset rgba(255,255,255,0.05)
    `,
                }}>
                    {IMAGES.map((src, i) => (
                        <Image
                            key={i}
                            src={src}
                            alt=""
                            fill
                            className="object-cover transition-opacity duration-500"
                            style={{ opacity: currentImg === i ? 1 : 0 }}
                        />
                    ))}
                </div>
            </div>

            <div className="w-32 h-[5px] rounded-full bg-white/10 overflow-hidden">
                <div
                    className="h-full rounded-full bg-white"
                    style={{
                        width: `${progress}%`,
                        transition: stallingRef.current
                            ? 'width 600ms cubic-bezier(0.4, 0, 0.2, 1)'
                            : 'width 120ms linear',
                    }}
                />
            </div>
        </div>
    );
}
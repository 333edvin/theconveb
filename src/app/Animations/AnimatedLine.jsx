import React from 'react';

const AnimatedLine = () => {
    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center p-10 overflow-hidden">
            <svg
                viewBox="0 0 500 500"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* The Exact Curve Shape */}
                <path
                    d="M 500,50 
             C 400,50 350,150 380,200 
             S 200,300 180,400 
             S 120,500 50,500"
                    stroke="url(#lineGradient)"
                    strokeWidth="28"
                    strokeLinecap="round"
                    className="animate-draw"
                />

                {/* Gradient to match the "fade" in the image */}
                <defs>
                    <linearGradient id="lineGradient" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="70%" stopColor="white" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <style jsx>{`
        .animate-draw {
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: draw 2.5s cubic-bezier(0.45, 0, 0.55, 1) forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default AnimatedLine;
'use client';

import { useState, useEffect } from 'react';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setAnimating(true);

      setTimeout(() => {
        setAnimating(false);
        setPrevIndex(null);
      }, 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative h-screen w-full bg-black text-white flex items-center justify-start px-6 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Previous Image Sliding Out */}
        {prevIndex !== null && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[prevIndex]})`,
              animation: animating ? 'slideDownOut 2s forwards ease-in-out' : 'none',
              zIndex: 5,
            }}
          />
        )}

        {/* Current Image Sliding In */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            animation: animating ? 'slideDownIn 0.8s forwards ease-in-out' : undefined,
            zIndex: 10,
          }}
        >
          {/* Zoom effect after slide finishes */}
          {!animating && (
            <div
              className="absolute inset-0 bg-cover bg-center zoomIn"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-left w-[75vw] max-w-[1000px] lg:ml-28 md:ml-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-snug tracking-tight">
          The Strenght of any masterpiece lies in the bonds you don't see.
       
        </h1>

        <div className="mt-10">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="bg-transparent border-b border-white text-white placeholder-white w-64 md:w-96 p-2 outline-none"
          />
          <button className="ml-4 text-orange-500 font-semibold hover:underline">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Social Links Bottom Left */}
      <div className="absolute bottom-6 left-6 z-20 flex gap-6 text-sm">
        <span className="hover:underline cursor-pointer">FACEBOOK</span>
        <span className="hover:underline cursor-pointer">TWITTER</span>
        <span className="hover:underline cursor-pointer">LINKEDIN</span>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDownIn {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes slideDownOut {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes zoomInEffect {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        .zoomIn {
          animation: zoomInEffect 6s ease-in-out forwards;
          will-change: transform;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 15;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
 <div className="transition-all duration-300">
  <Image
    src="/images/EpitailoLogo.png"
    alt="Epitailo Logo"
    width={120}
    height={40}
    className={`h-auto w-auto transition-all duration-300 ${
      scrolled ? '' : 'invert'
    }`}
    priority // Ensures it loads quickly for better LCP
  />
</div>

        {/* Desktop Button */}
        {!menuOpen && (
          <button
            className={`hidden md:block border px-4 py-1 rounded-full transition ${
              scrolled
                ? 'text-black border-black hover:bg-black hover:text-white'
                : 'text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            Get Quote
          </button>
        )}

        {/* Burger Icon */}
        <div
          className="flex flex-col space-y-1 cursor-pointer z-30"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen);
          }}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-opacity duration-300 ${
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          ></span>
        </div>
      </nav>

      {/* Overlay menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-black text-white flex flex-col items-center pt-24 space-y-8 text-2xl transition-transform duration-500 z-40 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: '100vh' }}
      >
        <nav className="flex flex-col items-center justify-center flex-1 space-y-8 uppercase tracking-widest text-3xl font-semibold">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50">
        <div className="text-white font-bold text-2xl">ZILL</div>

        {/* Desktop SAY HELLO button (hidden on small screens) */}
        <button className="hidden md:block text-white border px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
          SAY HELLO
        </button>

        {/* Burger menu icon */}
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
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </div>
      </nav>

      {/* Fullscreen overlay menu sliding top to bottom */}
      <div
        className={`fixed top-0 left-0 w-full bg-black text-white flex flex-col items-center pt-24 space-y-8 text-2xl transition-transform duration-500 z-50
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
        style={{ height: '100vh' }}
      >
        {/* Top bar inside menu with logo on left and close on right */}
        <div className="absolute top-6 left-6 text-white font-bold text-2xl">
          ZILL
        </div>
        <button
          className="absolute top-6 right-6 text-white text-4xl leading-none focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &#10005; {/* Cross icon */}
        </button>

       <nav className="flex flex-col items-center justify-center flex-1 space-y-8 uppercase tracking-widest text-3xl font-semibold">
  <a
    href="#"
    onClick={() => setMenuOpen(false)}
    className="hover:text-orange-500 transition-colors duration-300"
  >
    Home
  </a>
  <a
    href="#"
    onClick={() => setMenuOpen(false)}
    className="hover:text-orange-500 transition-colors duration-300"
  >
    About
  </a>
  <a
    href="#"
    onClick={() => setMenuOpen(false)}
    className="hover:text-orange-500 transition-colors duration-300"
  >
    Services
  </a>
  <a
    href="#"
    onClick={() => setMenuOpen(false)}
    className="hover:text-orange-500 transition-colors duration-300"
  >
    Contact
  </a>
</nav>

      </div>
    </>
  );
}

'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-0">
      {/* Full-width image at top without spacing */}
      <div className="w-full">
        <Image
          src="/images/footerimage.jpg" // Your image path
          alt="Footer Banner"
          width={1920}
          height={300}
          className="w-full object-cover"
        />
      </div>

      {/* Footer content without top padding */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-10 px-6">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-orange-400">Epitailo</h2>
          <p className="text-sm opacity-70">
            Innovative solutions for parking, tracking, and smart systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-2 opacity-70">Stay updated with our latest tech</p>
          <div className="flex items-center border-b border-gray-700">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none text-sm text-black flex-1 py-2"
            />
            <button className="text-orange-500 hover:text-orange-400 text-sm font-medium px-2">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-orange-500 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-orange-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-300">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-orange-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-800 py-4">
        &copy; {new Date().getFullYear()} Epitailo. All rights reserved.
      </div>
      
    </footer>
  );
}

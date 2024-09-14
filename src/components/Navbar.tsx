'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-0 sm:p-4 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-center px-1 py-8 sm:p-4">
        <Link href="/" className="hover:text-gray-800 mx-4 text-gray-800">Home</Link>
        <Link href="/ourstory" className="hover:text-gray-800 text-gray-800 mx-4">Our Story</Link>
        <Link href="/wedding" className="hover:text-gray-800 text-gray-800 mx-4">Wedding Details</Link>
        <Link href="/photos" className="hover:text-gray-800 text-gray-800 mx-4">Photos</Link>
      </div>
    </nav>
  );
}

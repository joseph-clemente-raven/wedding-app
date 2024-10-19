'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the usePathname hook

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/' || pathname === '/wedding'; // Check if the current page is the home page

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-0 sm:p-4 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-center px-1 py-8 sm:p-4">
        {['/', '/ourstory', '/wedding', '/photos'].map((href, index) => {
          const linkText =
            href === '/'
              ? 'Home'
              : href.slice(1).replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());

          const isActive = pathname === href; // Check if the current link is active

          return (
            <div key={index} className="relative mx-4 group">
              <Link
                href={href}
                className={`${
                  scrolled ? 'opacity-100' : 'hover:opacity-100'
                } transition-colors duration-300 ${
                  isActive
                    ? scrolled
                      ? 'text-black font-bold' // Active link color on home page with scroll
                      : isHomePage
                      ? 'text-white font-bold' // Active link color on home page without scroll
                      : 'text-gray-800 font-bold' // Active link color on other pages
                    : isHomePage
                    ? scrolled
                      ? 'text-black hover:text-gray-800' // On home page, with scroll
                      : 'text-gray-200 hover:text-white' // On home page, without scroll
                    : 'text-black hover:text-gray-800' // On other pages
                }`}
              >
                {href === '/ourstory' ? 'Our Story' : linkText}
              </Link>
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                  isActive
                    ? scrolled
                      ? 'bg-black scale-x-100' // Active underline color on home page with scroll
                      : isHomePage
                      ? 'bg-white scale-x-100' // Active underline color on home page without scroll
                      : 'bg-gray-800 scale-x-100' // Active underline color on other pages
                    : isHomePage
                    ? scrolled
                      ? 'bg-gray-800 group-hover:bg-gray-800' // On home page, with scroll
                      : 'bg-gray-200 group-hover:bg-gray-200' // On home page, without scroll
                    : 'bg-black group-hover:bg-gray-800' // On other pages
                }`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}

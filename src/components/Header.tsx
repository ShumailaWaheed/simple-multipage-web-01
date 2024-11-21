"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white py-4 px-8 shadow-md sticky top-0 z-10">
      <Link href="/" legacyBehavior>
      <a className="font-bold text-xl sm:text-2xl text-lg md:text-xl lg:text-3xl text-[#3f396d] mr-2 md:ml-[-20px]">Shumaila Waheed</a>
      </Link>

      <div className={`flex lg:gap-12 sm:gap-4 md:gap-6 vercel
         ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-white shadow-lg py-2 px-10 space-y-6' : 'hidden lg:flex, hidden md:flex'}`}>
        <Link href="/" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Home</a>
        </Link>
        <Link href="/#service" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Service</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">About</a>
        </Link>
        <Link href="/#portfolio" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Portfolio</a>
        </Link>
        <Link href="/#testimonial" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Testimonials</a>
        </Link>
        <Link href="/#blog" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Blog</a>
        </Link>
      </div>

      <button className="hidden lg:block bg-[#fca61f] text-white rounded-full lg:px-8 lg:py-2 md:block px-4 py-2 md:px-5 md:py-1.5 md:text-base ml-2 md:px-6 md:py-2 text-lg hover:bg-[#2e2a54]">
        Contact
      </button>

      <div className="text-3xl lg:hidden md:hidden cursor-pointer text-[#3f396d]" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'} 
      </div>
    </nav>
  );
};

export default Header;
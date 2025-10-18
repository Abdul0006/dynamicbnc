'use client';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-full"></div>
          <span className="text-xl font-bold text-primary">Dynamic BNC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-primary hover:text-primary font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="tel:+923361110444" 
            className="ml-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            +92 336 1110444
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-primary hover:text-primary font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+923361110444" 
              className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300 text-center"
            >
              +92 336 1110444
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
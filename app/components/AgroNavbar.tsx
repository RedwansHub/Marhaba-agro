'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AgroColors } from './AgroIcons';

const AgroNavbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Farm', href: '/farm' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-[#1D1D1D] shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src={pathname === '/' ? '/Logo/light-agro-logo.svg' : scrolled ? "/Logo/light-agro-logo.svg" : "/Logo/dark-agro-logo.svg"} 
            width={200} 
            height={40} 
            alt="Marhaba Agro" 
            className={`cursor-pointer transition-all`} 
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#F6B923] relative group ${
                  isActive 
                      ? 'text-[#F6B923]' 
                      : (pathname === '/' 
                          ? 'text-white'                                // Homepage: Always white
                          : (scrolled ? 'text-white' : 'text-[#2D2D2D]') // Other pages: Dark then White on scroll
                        )
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F6B923] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer z-50">
          {nav ? (
            <AiOutlineClose size={28} className="text-[#2D2D2D]" />
          ) : (
            <AiOutlineMenu size={28} className={!scrolled && pathname === '/marhaba-agro' ? 'text-white' : 'text-[#2D2D2D]'} />
          )}
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="text-center space-y-10">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setNav(false)}>
                <Link 
                  href={link.href} 
                  className={`text-3xl font-bold transition-colors ${pathname === link.href ? 'text-[#F6B923]' : 'text-[#2D2D2D] hover:text-[#F6B923]'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AgroNavbar;


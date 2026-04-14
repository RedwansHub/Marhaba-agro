import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AgroColors, CamelIcon } from './AgroIcons';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const AgroFooter = () => {
  return (
    <footer id="contact" className="bg-[#2D2D2D] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative SVG background */}
      <div className="absolute top-0 right-0 opacity-5 rotate-180 translate-x-1/2 -translate-y-1/2">
        <CamelIcon className="w-[600px] h-[600px]" color="white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6 max-w-xl lg:col-span-2">
            <Link href="/">
              <Image src="/Logo/marhabaAgro.svg" width={220} height={50} alt="Marhaba Agro" className="brightness-0 invert cursor-pointer" />
            </Link>
            <p className="text-gray-400 text-xs mt-3 leading-relaxed">
              Leading the way in sustainable livestock farming and innovative agribusiness solutions in Somalia. A subsidiary of the Marhaba Group.
            </p>
            <div className="flex gap-4">
              <AiFillFacebook size={24} className="hover:text-[#BF9B30] cursor-pointer transition-colors" />
              <AiFillInstagram size={24} className="hover:text-[#BF9B30] cursor-pointer transition-colors" />
              <AiFillLinkedin size={24} className="hover:text-[#BF9B30] cursor-pointer transition-colors" />
              <AiFillTwitterSquare size={24} className="hover:text-[#BF9B30] cursor-pointer transition-colors" />
            </div>
          </div>

          <div className='flex gap-5 w-full'>
            {/* Quick Links */}
            <div className='w-full'>
              <h4 className="text-lg font-bold mb-6 border-b border-[#BF9B30] pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/marhaba-agro" className="hover:text-[#BF9B30] transition-colors">Home</Link></li>
                <li><Link href="/marhaba-agro/about" className="hover:text-[#BF9B30] transition-colors">About Us</Link></li>
                <li><Link href="/marhaba-agro/services" className="hover:text-[#BF9B30] transition-colors">Our Services</Link></li>
                <li><Link href="/marhaba-agro/farm" className="hover:text-[#BF9B30] transition-colors">Our Farm</Link></li>
                <li><Link href="/marhaba-agro/contact" className="hover:text-[#BF9B30] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-[#BF9B30] pb-2 inline-block">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex flex-col">
                  <span className="text-white font-medium">Headquarters</span>
                  <span>Mogadishu, Somalia</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-white font-medium">Email</span>
                  <span>info@marhabaagro.so</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-white font-medium">Phone</span>
                  <span>+252 61XXXXXXX</span>
                </li>
              </ul>
            </div>
          </div>


        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Marhaba Agro. All rights reserved. A subsidiary of Marhaba Group of Companies.
          </p>
          <div className="flex gap-8 text-gray-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AgroFooter;


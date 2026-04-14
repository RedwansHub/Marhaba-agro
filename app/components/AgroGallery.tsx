'use client';
import React from 'react';
import Image from 'next/image';
import { AgroColors } from './AgroIcons';
import Reveal from '@/app/components/Motion/Reveal';

const AgroGallery = () => {
  return (
    <section id="herd" className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Gallery Image with Premium Framing */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-[#BF9B30] rounded-3xl opacity-20 -rotate-3" />
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Images/somali-goats.png" 
                  fill 
                  alt="Somali Goats Gallery" 
                  className="object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 bg-[#1A6D5E] p-8 rounded-2xl shadow-xl text-white">
                <p className="text-4xl font-bold mb-1">Premium</p>
                <p className="text-xs uppercase tracking-widest opacity-70">Husbandry Excellence</p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-8 leading-tight">
                Our Herd: <span className="text-[#1A6D5E]">Somali Goats</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                While we plan global agribusiness solutions, our foundation is built on premium goat livestock excellence. We specialize in the husbandry of indigenous Somali breeds, prioritizing health, genetic quality, and sustainable productivity.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#BF9B30] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Specialized Husbandry</h4>
                    <p className="text-gray-500 text-sm">Expert veterinary care and nutrition management tailored for Somali livestock.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#BF9B30] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Growth & Scalability</h4>
                    <p className="text-gray-500 text-sm">Future-ready infrastructure poised for expansion into a broader livestock portfolio.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[#1A6D5E] italic text-gray-500">
                &quot;Innovating the traditional pastoral heritage into a modern commercial success.&quot;
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgroGallery;

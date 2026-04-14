'use client';
import React from 'react';
import { 
  AgroColors, 
  InnovationIcon, 
  SustainabilityIcon, 
  IntegrityIcon
} from './AgroIcons';
import Reveal from '@/app/components/Motion/Reveal';

const AgroAbout = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Subsidiary Link Section */}
        <div className="flex flex-col items-center mb-24 text-center">
          <Reveal>
            <div className="w-20 h-1 bg-[#BF9B30] mb-8" />
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-[#1A6D5E] mb-6">Who We Are</h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl md:text-3xl font-semibold text-[#2D2D2D] max-w-5xl leading-tight">
              A subsidiary of the <span className="text-[#1A6D5E]">Marhaba Group of Companies</span> dedicated to transforming the agricultural landscape in Somalia through innovation and sustainable methods.
            </p>
          </Reveal>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <Reveal delay={0.1}>
            <div className="bg-[#F5F5F5] p-10 rounded-xl border-l-8 border-[#1A6D5E]">
              <h3 className="text-2xl font-bold text-[#1A6D5E] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1A6D5E] text-white flex items-center justify-center text-sm font-bold">V</span>
                Our Vision
              </h3>
              <p className="text-xl text-[#2D2D2D] leading-relaxed font-light">
                To be a leading force in East African agribusiness, contributing to regional food security.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="bg-[#F5F5F5] p-10 rounded-xl border-l-8 border-[#BF9B30]">
              <h3 className="text-2xl font-bold text-[#BF9B30] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#BF9B30] text-white flex items-center justify-center text-sm font-bold">M</span>
                Our Mission
              </h3>
              <p className="text-xl text-[#2D2D2D] leading-relaxed font-light">
                To produce high-quality agricultural and livestock products using efficient, scalable, and environmentally responsible methods.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Reveal>
              <h3 className="text-4xl font-bold text-[#2D2D2D]">Core Values</h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[#1A6D5E] font-medium mt-2">The principles that drive our operations</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<SustainabilityIcon />} 
              title="Sustainability" 
              desc="Rooted in protecting resources for the next generation. We prioritize long-term ecological balance in every harvest." 
              delay={0.1}
            />
            <ValueCard 
              icon={<InnovationIcon />} 
              title="Innovation" 
              desc="Using modern technology to solve complex farming challenges. We embrace cutting-edge irrigation and climate control." 
              delay={0.2}
            />
            <ValueCard 
              icon={<IntegrityIcon />} 
              title="Integrity" 
              desc="Maintaining transparency and trust within our community. We believe in ethical sourcing and honest communication." 
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
  <Reveal delay={delay}>
    <div className="h-full bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center">
      <div className="p-5 bg-[#F5F5F5] rounded-2xl mb-8 group-hover:bg-[#1A6D5E] transition-colors duration-500">
        <div className="group-hover:text-white transition-colors duration-500">
          {icon}
        </div>
      </div>
      <h4 className="text-2xl font-bold text-[#2D2D2D] mb-4">{title}</h4>
      <p className="text-gray-500 leading-relaxed font-light">{desc}</p>
    </div>
  </Reveal>
);

export default AgroAbout;


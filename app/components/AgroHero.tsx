'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CamelIcon, AgroColors, InnovationIcon, SustainabilityIcon, ExcellenceIcon } from './AgroIcons';
import Reveal from '@/app/components/Motion/Reveal';
import { AnimateDown, AnimateZoomIn } from '@/app/components/Motion/Animation';
import Link from 'next/link';

const AgroHero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-20">
      {/* Background Image with Teal Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-from-b from-red-400 "
          // style={{ backgroundImage: "url('/Images/Agro/hero.png')" }}
        />
        <div 
          className="absolute inset-0 opacity-80"
          style={{ background: `linear-gradient(135deg, ${AgroColors.primary} 40%, transparent 100%)` }}
        />
      </div>

      {/* Ghost Branding Waterman */}
      <div className="absolute right-[-10%] bottom-[5%] opacity-10 pointer-events-none -rotate-45">
        <CamelIcon className="w-[800px] h-[800px]" color="white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-white w-full">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-8">
              Cultivating a <span className="text-[#BF9B30]">Resilient</span> Future for Somalia.
            </h1>
          </Reveal>
          
          <AnimateDown delay={0.5}>
            <p className="text-lg md:text-lg text-gray-100/50 mb-12 leading-relaxed font-light max-w-2xl">
              Revolutionizing 150,000 m² of land through a high-tech, integrated ecosystem of year-round crop production and sustainable livestock breeding.
            </p>
          </AnimateDown>

          <div  className="flex flex-wrap gap-3">
            <AnimateZoomIn delay={0.8}>
              <Link 
                href="/farm"
                className="inline-block bg-[#BF9B30] hover:bg-[#A68628] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all transform "
              >
                Explore Our Farm
              </Link>
            </AnimateZoomIn>
          
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <FeatureCard 
            icon={<InnovationIcon color="white" />}
            title="Smart Greenhouse Systems"
            desc="Precision farming for year-round consistency and quality yields."
            delay={1.2}
          />
          <FeatureCard 
            icon={<CamelIcon className="w-10 h-10" color="white" />}
            title="Elite Livestock Breeding"
            desc="High-quality stock supported by integrated, on-site fodder production."
            delay={1.4}
          />
          <FeatureCard 
            icon={<SustainabilityIcon color="white" />}
            title="High-Yield Sustainable Crops"
            desc="Nutrient-rich produce grown with maximum solar-powered efficiency."
            delay={1.6}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Discover More</span>
        <div className="w-0.5 h-10 rounded-full bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute left-0 w-full h-1/2 bg-[#BF9B30]"
          />
        </div>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="bg-white/5 backdrop-blur-lg border border-white/20 p-8 rounded-lg cursor-pointer hover:bg-white/20 transition-all group"
  >
    <div className="mb-6 p-3 bg-[#059E50]/50 rounded-xl inline-block group-hover:bg-[#059E50] transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-200/75 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

export default AgroHero;


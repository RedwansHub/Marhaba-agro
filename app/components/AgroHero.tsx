'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CamelIcon, AgroColors, InnovationIcon, SustainabilityIcon, ExcellenceIcon } from './AgroIcons';
import Reveal from '@/app/components/Motion/Reveal';
import { AnimateDown, AnimateRight, AnimateZoomIn } from '@/app/components/Motion/Animation';
import Link from 'next/link';
import { GiSheep } from 'react-icons/gi';
import { PiFarmFill } from 'react-icons/pi';
import Image from 'next/image';

const AgroHero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center lg:pt-20 pt-44 pb-8">
      {/* Background Image with Teal Gradient Overlay */}
        <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 opacity-80"
                style={{ background: `linear-gradient(135deg, ${AgroColors.bgDark} 40%, ${AgroColors.primary} 100%)` }}
                />
        </div>

      {/* Ghost Branding Waterman */}
      <div className="absolute lg:left-[-10%] left-[10%] lg:bottom-[5%] bottom-[-35%] opacity-5 pointer-events-none lg:rotate-45 -rotate-45 lg:-translate-x-20">
        <Reveal>
          <CamelIcon className="lg:w-[650px] w-[550px] h-[650px]" color="white" />
        </Reveal>
        {/* <Image src={''} alt=''/> */}
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 h-fit lg:px-12 px-6  text-white w-full">
        <div className="h-full justify-center items-start flex  flex-col w-full">
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:mb-8 mb-4">
                The Future of Integrated <span className="text-[#eac454]">Agribusiness</span> in Somalia.
              </h1>
            </Reveal>
          </div>
          
          <div>
            <AnimateDown delay={0.8}>
              <p className="text-base md:text-lg text-gray-100/50 lg:mb-12 mb-8 leading-relaxed font-light lg:max-w-2xl">
                Transforming Somali agriculture by bridging modern technology with traditional practices to create a sustainable, year-round ecosystem of high-quality crop production, livestock breeding, and food security.
              </p>
            </AnimateDown>
          </div>

          <div  className="flex flex-wrap gap-3">
            <AnimateZoomIn delay={0.8}>
              <Link 
                href="/farm"
                className="inline-block bg-[#F6B923]/80 hover:bg-[#F6B923] text-black px-8 lg:px-6 lg:py-3 py-2 rounded-full font-semibold lg:text-lg text-base transition-all transform "
              >
                Explore Our Farm
              </Link>
            </AnimateZoomIn>
          
          </div>
        </div>

          <div className='w-full flex gap-3 h-fit items-end justify-end'>
            <AnimateRight delay={1.2}>
              <div className='rounded-2xl overflow-hidden'>
                <Image 
                  src="/farm/Fodder & Field Crops/Super Napier grass.png" 
                  width={420}
                  height={200}
                  alt="Somali Goats Gallery" 
                  className="object-cover  transition-transform duration-700 hover:scale-105 " 
                />
              </div>
            </AnimateRight>
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

export const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="bg-[#F5F5F5] backdrop-blur-lg border border-primary/20 shadow-md lg:p-8 p-5 rounded-lg cursor-pointer hover:bg-primary hover:scale-105 duration-500 ease-in-out transition-all group"
  >
    <div className={`lg:mb-6 mb-2 lg:p-3 p-2 bg-[#059E50] rounded-xl inline-block duration-500 ease-in-out transition-colors 
        ${title == 'Fodder & Field Crops' ? 'group-hover:bg-[#F6B923]' 
        : title == 'Livestock Farming' ? 'group-hover:bg-[#202020]'
        : 'group-hover:bg-[#F5F5F5]'}`}>
      {icon}
    </div>
    <h3 className="text-xl group-hover:text-white font-semibold mb-3">{title}</h3>
    <p className="group-hover:text-gray-200/75 text-black/50 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

export default AgroHero;


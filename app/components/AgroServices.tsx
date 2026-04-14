'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { AgroColors, InnovationIcon, SustainabilityIcon, ExcellenceIcon, IntegrityIcon } from './AgroIcons';
import Reveal from '@/app/components/Motion/Reveal';
import Image from 'next/image';

const services = [
  {
    title: 'Sustainable Livestock Breeding',
    desc: 'Providing high-quality livestock products through an integrated fodder-to-meat model, ensuring premium health and nutrition standards.',
    icon: <SustainabilityIcon />,
    image: '/farm/goats 2.jpeg'
  },
  {
    title: 'Crop Production',
    desc: 'Fresh produce grown in highly controlled greenhouse environments to ensure year-round quality, safety, and nutritional value.',
    icon: <InnovationIcon />,
    image: '/farm/greenhouse 1.png'
  },
  {
    title: 'Consultancy & Training',
    desc: 'Expert-led programs to empower the next generation of Somali farmers with modern methodologies and sustainable practices.',
    icon: <ExcellenceIcon />,
    image: '/farm/farm 1.jpeg'
  },
  {
    title: 'Value-Chain Integration',
    desc: 'Designing bespoke solutions to solve complex supply chain challenges in the Somali market, from farm to fork.',
    icon: <IntegrityIcon />,
    image: '/Images/Agro/farm-infra.png'
  }
];

const AgroServices = () => {
  return (
    <section id="services" className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-20 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold text-[#202020] mb-6">Our Services</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 max-w-2xl leading-relaxed text-lg font-light">
              Beyond production, we provide comprehensive agricultural solutions designed to scale and transform the Somali agribusiness landscape.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-gray-100">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    fill 
                    alt={service.title} 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-8 p-4 bg-white rounded-2xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[#1A6D5E]">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 group-hover:text-[#1A6D5E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light text-lg">
                    {service.desc}
                  </p>
                </div>
                <div className="px-10 pb-10">
                  <div className="w-12 h-1 bg-[#BF9B30] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgroServices;

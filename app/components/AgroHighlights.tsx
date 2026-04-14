'use client';
import React from 'react';
import Link from 'next/link';
import Reveal from '@/app/components/Motion/Reveal';
import { InnovationIcon, SustainabilityIcon, CamelIcon } from './AgroIcons';
import { AiOutlineArrowRight } from 'react-icons/ai';

const highlights = [
  {
    title: 'Our Journey',
    desc: 'From a subsidiary of Marhaba Group to a leading force in Somali agribusiness.',
    icon: <CamelIcon className="w-10 h-10" />,
    link: '/marhaba-agro/about',
    label: 'Explore Our Story'
  },
  {
    title: 'Modern Facilities',
    desc: 'Leveraging 150,000 m² of land with climate-controlled greenhouses and solar irrigation.',
    icon: <InnovationIcon />,
    link: '/marhaba-agro/farm',
    label: 'View Facilities'
  },
  {
    title: 'Integrated Services',
    desc: 'Specialized breeding and year-round crop production with supply chain excellence.',
    icon: <SustainabilityIcon />,
    link: '/marhaba-agro/services',
    label: 'Our Expertise'
  }
];

const AgroHighlights = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">Leading Somalia's Agricultural Revolution</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                By integrating traditional knowledge with world-class technology, we're building a sustainable future for food security in East Africa.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.4}>
            <Link 
              href="/marhaba-agro/contact"
              className="flex items-center gap-2 text-[#1A6D5E] font-bold text-lg hover:translate-x-2 transition-transform"
            >
              Partner With Us <AiOutlineArrowRight />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Reveal key={index} delay={0.2 * index}>
              <div className="bg-[#F5F5F5] p-10 rounded-[2.5rem] hover:bg-[#1A6D5E] hover:text-white transition-all duration-500 group h-full flex flex-col items-start">
                <div className="p-4 bg-white rounded-2xl mb-8 group-hover:bg-white/10 transition-colors">
                  <div className="text-[#1A6D5E] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-white/80 font-light leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <Link 
                  href={item.link}
                  className="inline-block border-b-2 border-[#BF9B30] text-[#BF9B30] font-bold group-hover:text-white group-hover:border-white transition-all pb-1"
                >
                  {item.label}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgroHighlights;

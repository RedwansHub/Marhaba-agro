'use client';
import React from 'react';
import Link from 'next/link';
import Reveal from '@/app/components/Motion/Reveal';
import { InnovationIcon, SustainabilityIcon, CamelIcon } from './AgroIcons';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FeatureCard } from './AgroHero';
import { PiFarmFill } from 'react-icons/pi';
import { GiSheep } from 'react-icons/gi';
import { AnimateRight } from './Motion/Animation';

const highlights = [
  {
    title: 'Our Journey',
    desc: 'From a subsidiary of Marhaba Group to a leading force in Somali agribusiness.',
    icon: <CamelIcon className="w-10 h-10" />,
    link: '#about',
    label: 'Explore Our Story'
  },
  {
    title: 'Modern Facilities',
    desc: 'Leveraging 150,000 m² of land with climate-controlled greenhouses and solar irrigation.',
    icon: <InnovationIcon />,
    link: '#farm',
    label: 'View Facilities'
  },
  {
    title: 'Integrated Services',
    desc: 'Specialized breeding and year-round crop production with supply chain excellence.',
    icon: <SustainabilityIcon />,
    link: '#services',
    label: 'Our Expertise'
  }
];

const AgroHighlights = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="w-full flex flex-col justify-items-center items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">Transforming Agriculture and Livestock in Somalia</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="lg:max-w-3xl lg:text-center text-gray-500 lg:text-lg font-light leading-relaxed">
                Marhaba Agro is an integrated agricultural and livestock farm operating in Somalia, with over two years of experience in greenhouse farming, fodder cultivation, and livestock management.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:mt-12">
          <FeatureCard 
            icon={<PiFarmFill className="lg:w-10 w-7 lg:h-10 h-7 group-hover:fill-primary" color="white" />}
            title="Greenhouse Farming"
            desc="Our facilities uses greenhouses and efficient watering systems to ensure consistent crop growth regardless of the weather."
            delay={1.2}
          />
          <FeatureCard 
            icon={<GiSheep className="lg:w-10 w-7 lg:h-10 h-7 " color="white" />}
            title="Livestock Farming"
            desc="A commitment to ethical animal husbandry ensures the highest standards of health and welfare for all dairy and meat production."
            delay={1.4}
          />
          <FeatureCard 
            icon={<CamelIcon className="lg:w-10 w-7 lg:h-10 h-7 " color="white" />}
            title="Fodder & Field Crops"
            desc="Nutrient-rich crops are grown to sustain our herds and support the surrounding farming community."
            delay={1.6}
          />
        </div>

      </div>
    </section>
  );
};

export default AgroHighlights;

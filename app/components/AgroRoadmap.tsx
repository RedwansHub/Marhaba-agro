'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/app/components/Motion/Reveal';
import { AgroColors } from './AgroIcons';

const roadmapData = [
  {
    period: 'Short-Term',
    timeframe: '0-12 Months',
    title: 'Optimization Phase',
    tasks: [
      'Maximizing yields from current greenhouse zones',
      'Optimizing solar-powered irrigation infrastructure',
      'Stabilizing initial Super Napier fodder cycles',
      'Establishing quality control benchmarks'
    ],
    color: '#1A6D5E'
  },
  {
    period: 'Medium-Term',
    timeframe: '12-24 Months',
    title: 'Expansion Phase',
    tasks: [
      'Expanding brick-walled Greenhouse capacity',
      'Scaling fodder production to maximum levels',
      'Full integration of livestock-to-market model',
      'Automating controlled environment systems'
    ],
    color: '#BF9B30'
  },
  {
    period: 'Long-Term',
    timeframe: '24+ Months',
    title: 'Diversification Phase',
    tasks: [
      'Introducing large-scale camel farming',
      'Exploring dairy and meat processing facilities',
      'Implementing value-added agricultural exports',
      'Leading regional sustainable farming education'
    ],
    color: '#1A6D5E'
  }
];

const AgroRoadmap = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-20 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">Growth Strategy</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 max-w-2xl leading-relaxed text-lg font-light">
              Our clear, phased objective for scaling operations and contributing to East Africa's agricultural future over the next two years and beyond.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <Reveal key={index} delay={index * 0.2}>
                <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Point */}
                  <div className="absolute left-[31px] md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#BF9B30] -translate-x-1/2 z-10 hidden md:block" />

                  {/* Content Box */}
                  <div className={`w-full hover:shadow-2xl  md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <div className="bg-[#F5F5F5] p-10 rounded-xl border border-gray-100 transition-all duration-500 group w-full">
                      <div className={`inline-block px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 text-white`} style={{ backgroundColor: item.color }}>
                        {item.period} ({item.timeframe})
                      </div>
                      <h3 className="text-3xl font-bold text-[#2D2D2D] mb-6">{item.title}</h3>
                      <ul className={`space-y-4 flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        {item.tasks.map((task, taskIdx) => (
                          <li key={taskIdx} className="flex items-start gap-3 md:contents text-gray-600 font-light text-sm">
                             {/* <span className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 ${index % 2 === 0 ? 'md:hidden' : 'md:inline-block'}`} style={{ backgroundColor: item.color }} /> */}
                             <p className={`flex gap-2 items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                               <span className={`w-2 h-2 rounded-full  flex-shrink-0 hidden md:inline-block ${index % 2 === 0 ? 'md:order-2' : ''}`} style={{ backgroundColor: item.color }} />
                              {task}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual Placeholder for other side */}
                  <div className="hidden md:block w-1/2">
                    <div className="p-12 flex justify-center opacity-10 group-hover:opacity-30 transition-opacity">
                       <span className="text-8xl font-black text-gray-200 select-none">0{index + 1}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgroRoadmap;

import React from 'react'
import AgroNavbar from './components/AgroNavbar'
import AgroHero from './components/AgroHero'
import AgroHighlights from './components/AgroHighlights'
import AgroFooter from './components/AgroFooter'
import Reveal from './components/Motion/Reveal'
import { GiCamel, GiChicken, GiSheep, GiSprout } from 'react-icons/gi'
import { AnimateDown, AnimateRight, AnimateZoomIn } from './components/Motion/Animation'
import { FaSeedling } from 'react-icons/fa'
import Link from 'next/link'

const MarhabaAgroPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <AgroNavbar />
      <main>
        {/* Full Screen Impact Hero */}
        <AgroHero />
        
        {/* Home Overview / Highlights */}
        <AgroHighlights />

        <div id="services" className='flex flex-col  gap-3  bg-[#F9F9F9]'>
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">Our Services</h2>
            </Reveal>
          </div>
          {/* Fodder Production */}
          <section id="about" className="py-12 bg-[#F9F9F9]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                  <Reveal>
                    <h2 className="text-sm uppercase tracking-wide font-bold text-[#1A6D5E] mb-4">Fodder Cultivation</h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <h3 className="sm:text-4xl text-2xl  font-bold text-[#2D2D2D] mb-6">Sustainable Feed Production</h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                      We cultivate high-quality, nutrient-rich fodder crops using efficient and sustainable farming practices to ensure a consistent, year-round supply of livestock feed. Our approach enhances animal health, improves productivity, and supports long-term agricultural sustainability.
                    </p>
                  </Reveal>
                  <div className="flex flex-col gap-2">
                    <AnimateRight delay={0.9}>
                      <div className="flex gap-4 items-center">
                        <GiSprout size={20}/> 
                        <p className='font-semibold text-primary'>Super Napier Grass</p>
                      </div>
                    </AnimateRight>
                    <AnimateRight delay={1.5}>
                      <div className="flex gap-4 items-center">
                        <GiSprout size={20}/> 
                        <p className='font-semibold text-primary'>Alfalfa</p>
                      </div>
                    </AnimateRight>
                    <AnimateRight delay={2.0}>
                      <div className="flex gap-4 items-center">
                        <GiSprout size={20}/> 
                        <p className='font-semibold text-primary'>Sudan Grass</p>
                      </div>
                    </AnimateRight>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative  rounded-3xl overflow-hidden">
                    <Reveal>
                      <div>
                        <img src="/farm/farm 1.jpeg" alt="Marhaba Agro Farm" className="w-full h-full object-cover" />
                      </div>
                    </Reveal>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1A6D5E]/40 to-transparent" /> */}
                </div>
              </div>
            </div>
          </section>

          {/* Greenhouse Farming */}
          <section id="about" className="py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2 relative  rounded-3xl overflow-hidden">
                    <Reveal>
                      <div>
                        <img src="/farm/greenhouse/Inside Greenhouse.jpg" alt="Marhaba Agro Greenhouse" className="w-full h-full object-cover" />
                      </div>
                    </Reveal>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1A6D5E]/40 to-transparent" /> */}
                </div>
                <div className="w-full md:w-1/2">
                  <Reveal>
                    <h2 className="text-sm uppercase tracking-wide font-bold text-[#1A6D5E] mb-4">Greenhouse Farming</h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <h3 className="sm:text-4xl text-2xl font-bold text-[#2D2D2D] mb-6">Controlled Crop Production</h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                      We grow high-quality vegetables in modern greenhouse systems designed to optimize climate, water usage, and crop health. This controlled approach ensures consistent yields, superior produce quality, and reliable year-round supply regardless of external weather conditions.
                    </p>
                  </Reveal>
                  <div className="flex flex-col gap-2">
                    <AnimateRight delay={0.9}>
                      <div className="flex gap-4 items-center">
                        <FaSeedling size={20}/> 
                        <p className='font-semibold text-primary'>Cucumber</p>
                      </div>
                    </AnimateRight>
                    <AnimateRight delay={1.5}>
                      <div className="flex gap-4 items-center">
                        <FaSeedling size={20}/> 
                        <p className='font-semibold text-primary'>Tomato</p>
                      </div>
                    </AnimateRight>
                    <AnimateRight delay={2.0}>
                      <div className="flex gap-4 items-center">
                        <FaSeedling size={20}/> 
                        <p className='font-semibold text-primary'>Bell Peper</p>
                      </div>
                    </AnimateRight>
                    <AnimateRight delay={2.0}>
                      <div className="flex gap-4 items-center">
                        <FaSeedling size={20}/> 
                        <p className='font-semibold text-primary'>Salad (leafy greens)</p>
                      </div>
                    </AnimateRight>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Livestock Farming */}
          <section id="about" className="py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                  <Reveal>
                    <h2 className="text-sm uppercase tracking-wide font-bold text-[#1A6D5E] mb-4">Livestock Farming</h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <h3 className="sm:text-4xl text-2xl font-bold text-[#2D2D2D] mb-6">Animal Husbandry & Production</h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                      We focus on raising and managing livestock through structured breeding programs and efficient farm practices to ensure healthy animals and high-quality meat production. Our operations are designed to scale sustainably, supporting current capacity while preparing for future expansion into additional livestock sectors.
                    </p>
                  </Reveal>
                  <div className="flex flex-col gap-2">
                    <AnimateRight delay={0.9}>
                      <div className="flex gap-4 items-center">
                        <GiSheep  size={20}/> 
                        <p className='font-semibold text-primary'>Goats Farming</p>
                      </div>
                    </AnimateRight>
                    <AnimateRight delay={1.5}>
                      <div className="flex gap-4 items-center">
                        <GiChicken size={20}/> 
                        <p className='font-semibold text-primary'>Poultry (hens)</p>
                      </div>
                    </AnimateRight>
                    <AnimateRight delay={2.0}>
                      <div className="flex gap-4 items-center">
                        <GiCamel size={20}/> 
                        <p className='font-semibold text-primary'>Camel Farming</p>
                      </div>
                    </AnimateRight>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative  rounded-3xl overflow-hidden">
                    <Reveal>
                      <div>
                        <img src="/farm/Livestock/Goats in barn.jpeg" alt="Marhaba Agro Livestock" className="w-full h-full object-cover" />
                      </div>
                    </Reveal>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1A6D5E]/40 to-transparent" /> */}
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* Simplified Farm Section */}
        <section id="farm" className="py-24 bg-[#1A6D5E] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between lg:items-start pt-2 items-start mb-16 gap-8">
              <div className="max-w-2xl">
                <Reveal>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Our 150,000 m² Facility</h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-white/70 text-lg font-light">
                    A high-tech ecosystem featuring climate-controlled greenhouses, solar irrigation, and bio-secure livestock units.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.4}>
                <Link 
                    href="/farm"
                    className="inline-block bg-[#F6B923]/80 hover:bg-[#F6B923] text-black px-8 lg:px-6 lg:py-3 py-2 rounded-full font-semibold lg:text-lg text-base transition-all transform "
                  >
                    Explore Our Farm
                  </Link>
              </Reveal>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '/farm/greenhouse/Greenhouse-Cucumbers.jpg',
                '/farm/Livestock/Goats in barn.jpeg',
                '/farm/Fodder & Field Crops/Super Napier grass.png',
                '/farm/greenhouse/bell peper.png'
              ].map((img, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
                    <img src={img} alt="Farm Facility" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <AgroFooter />
    </div>
  )
}

export default MarhabaAgroPage
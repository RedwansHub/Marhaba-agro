import React from 'react'
import AgroNavbar from '../components/AgroNavbar'
import AgroServices from '../components/AgroServices'
import AgroFooter from '../components/AgroFooter'
import Reveal from '@/app/components/Motion/Reveal'
import { ExcellenceIcon } from '../components/AgroIcons'
import { AnimateRight } from '../components/Motion/Animation'
import { GiCamel, GiChicken, GiSheep, GiSprout } from 'react-icons/gi'
import { FaSeedling } from 'react-icons/fa'

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AgroNavbar />
      <main className="py-20">
        {/* Page Header */}
        <div className="bg-[#BF9B30] py-24 relative overflow-hidden">
          <div className="absolute right-[5%] bottom-[-20%] opacity-10 pointer-events-none -rotate-12">
            <ExcellenceIcon />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-white/90 max-w-2xl font-light">
                Providing specialized livestock breeding, year-round crop production, and expert consultancy to drive the next generation of East African agribusiness.
              </p>
            </Reveal>
          </div>
        </div>

        <div id="services" className='flex flex-col  gap-3'>
          {/* Fodder Production */}
          <section id="about" className="py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                  <Reveal>
                    <h2 className="text-sm uppercase tracking-wide font-bold text-[#1A6D5E] mb-4">Fodder Cultivation</h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <h3 className="text-4xl font-bold text-[#2D2D2D] mb-6">Sustainable Feed Production</h3>
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
                    <h3 className="text-4xl font-bold text-[#2D2D2D] mb-6">Controlled Crop Production</h3>
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
                    <h3 className="text-4xl font-bold text-[#2D2D2D] mb-6">Animal Husbandry & Production</h3>
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
      </main>
      <AgroFooter />
    </div>
  )
}

export default ServicesPage

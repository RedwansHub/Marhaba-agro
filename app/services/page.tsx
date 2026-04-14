import React from 'react'
import AgroNavbar from '../components/AgroNavbar'
import AgroServices from '../components/AgroServices'
import AgroFooter from '../components/AgroFooter'
import Reveal from '@/app/components/Motion/Reveal'
import { ExcellenceIcon } from '../components/AgroIcons'

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AgroNavbar />
      <main className="pt-20">
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

        <AgroServices />
      </main>
      <AgroFooter />
    </div>
  )
}

export default ServicesPage

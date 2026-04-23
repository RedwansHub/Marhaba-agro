import React from 'react'
import AgroNavbar from '../components/AgroNavbar'
import AgroFarm from '../components/AgroFarm'
import AgroFooter from '../components/AgroFooter'
import Reveal from '@/app/components/Motion/Reveal'
import { InnovationIcon } from '../components/AgroIcons'

const FarmPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AgroNavbar />
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-[#1A6D5E] py-24 relative overflow-hidden">
          <div className="absolute left-[5%] bottom-[-10%] opacity-10 pointer-events-none rotate-12">
            <InnovationIcon color="white" />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <Reveal>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">Our Farm</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-white/60 max-w-2xl font-light">
                Explore our 150,000 m² integrated agricultural hub, featuring climate-controlled greenhouses, modern livestock units, and sustainable fodder plantations.
              </p>
            </Reveal>
          </div>
        </div>

        <AgroFarm />
      </main>
      <AgroFooter />
    </div>
  )
}

export default FarmPage

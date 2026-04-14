import React from 'react'
import AgroNavbar from '../components/AgroNavbar'
import AgroAbout from '../components/AgroAbout'
import AgroRoadmap from '../components/AgroRoadmap'
import AgroFooter from '../components/AgroFooter'
import Reveal from '@/app/components/Motion/Reveal'
import { CamelIcon } from '../components/AgroIcons'

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AgroNavbar />
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-[#1A6D5E] py-24 relative overflow-hidden">
          <div className="absolute right-[-5%] top-[-10%] opacity-10 pointer-events-none rotate-12">
            <CamelIcon className="w-[600px] h-[600px]" color="white" />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About Our Mission</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-white/60 max-w-2xl font-light">
                Discover the story behind Marhaba Agro, our dedication to Somali agriculture, and our vision for a sustainable, food-secure future.
              </p>
            </Reveal>
          </div>
        </div>

        <AgroAbout />
        
        {/* Growth Strategy / Roadmap */}
        <AgroRoadmap />
      </main>
      <AgroFooter />
    </div>
  )
}

export default AboutPage

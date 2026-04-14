import React from 'react'
import AgroNavbar from './components/AgroNavbar'
import AgroHero from './components/AgroHero'
import AgroHighlights from './components/AgroHighlights'
import AgroFooter from './components/AgroFooter'

const MarhabaAgroPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <AgroNavbar />
      <main>
        {/* Full Screen Impact Hero */}
        <AgroHero />
        
        {/* Home Overview / Highlights */}
        <AgroHighlights />
        
        {/* Call to Action Section */}
        <div className="bg-[#1A6D5E] py-24 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to transform the future of Somali agriculture?</h2>
            <p className="text-white/80 text-xl font-light mb-12">
              Join us in our mission to bring sustainable, tech-driven farming to Somalia. Whether as a partner, client, or team member, let's grow together.
            </p>
            <a 
              href="/marhaba-agro/contact"
              className="inline-block bg-[#BF9B30] hover:bg-[#A68628] text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </main>
      <AgroFooter />
    </div>
  )
}

export default MarhabaAgroPage
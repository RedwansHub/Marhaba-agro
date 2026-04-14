import React from 'react'
import AgroNavbar from '../components/AgroNavbar'
import AgroContact from '../components/AgroContact'
import AgroFooter from '../components/AgroFooter'
import Reveal from '@/app/components/Motion/Reveal'
import { IntegrityIcon } from '../components/AgroIcons'

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AgroNavbar />
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-[#202020] py-24 relative overflow-hidden">
          <div className="absolute right-[10%] top-[-10%] opacity-10 pointer-events-none rotate-45">
            <IntegrityIcon color="white" />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-white/70 max-w-2xl font-light">
                Connect with the Marhaba Agro team. We're here to answer your questions, explore partnerships, and help you grow with us.
              </p>
            </Reveal>
          </div>
        </div>

        <AgroContact />
      </main>
      <AgroFooter />
    </div>
  )
}

export default ContactPage

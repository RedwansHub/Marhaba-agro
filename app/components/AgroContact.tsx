'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/app/components/Motion/Reveal';
import { AgroColors } from './AgroIcons';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';

const AgroContact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-8">Get In Touch</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
                Have questions about our integrated farming model or interested in partnership opportunities? Our team is ready to provide you with the information you need.
              </p>
            </Reveal>

            <div className="space-y-8">
              <ContactInfoItem 
                icon={<AiOutlineMail size={24} />}
                title="Email Us"
                content="agro@marhabagroup.com"
                delay={0.3}
              />
              <ContactInfoItem 
                icon={<AiOutlinePhone size={24} />}
                title="Call Us"
                content="+252 (0) 61XXXXXXX"
                delay={0.4}
              />
              <ContactInfoItem 
                icon={<AiOutlineEnvironment size={24} />}
                title="Visit Our Office"
                content="Mogadishu, Somalia"
                delay={0.5}
              />
            </div>
          </div>

          <Reveal delay={0.6}>
            <div className="bg-[#F5F5F5] p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="First Name" placeholder="John" />
                  <InputGroup label="Last Name" placeholder="Doe" />
                </div>
                <InputGroup label="Email Address" placeholder="john@example.com" type="email" />
                <InputGroup label="Subject" placeholder="Inquiry about Livestock" />
                <div>
                  <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-[#1A6D5E] focus:outline-none transition-all placeholder:text-gray-300"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full bg-[#1A6D5E] hover:bg-[#145a4d] text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, title, content, delay }: { icon: React.ReactNode, title: string, content: string, delay: number }) => (
  <Reveal delay={delay}>
    <div className="flex items-start gap-6 group">
      <div className="p-4 bg-[#F5F5F5] rounded-2xl text-[#1A6D5E] group-hover:bg-[#1A6D5E] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#BF9B30] uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-xl text-[#2D2D2D] font-medium">{content}</p>
      </div>
    </div>
  </Reveal>
);

const InputGroup = ({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) => (
  <div>
    <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">{label}</label>
    <input 
      type={type}
      className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-[#1A6D5E] focus:outline-none transition-all placeholder:text-gray-300"
      placeholder={placeholder}
    />
  </div>
);

export default AgroContact;

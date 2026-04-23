'use client';
import React from 'react';
import Reveal from '@/app/components/Motion/Reveal';

interface TeamMember {
  name: string;
  role: string;
}

const boardMembers: TeamMember[] = [
  { name: 'Muhiadin Mohamed', role: 'Chairman of the Board' },
  { name: 'Farhia Muhiadin', role: 'Director of Strategic Growth' },
  { name: 'Abdifitah Muhiadin', role: 'Non-Executive Director' },
];

const managementMembers: TeamMember[] = [
  { name: 'Abdullahi Muhiadin', role: 'Chief Executive Officer (CEO)' },
  { name: 'Hani Mohamed', role: 'Farm Operations Manager' },
  { name: 'Hani Mohamed', role: 'Head of Livestock & Fodder Production' },
  { name: 'Abdinasir Muhiadin', role: 'Chief Sustainability Officer' },
];

const AgroTeam = () => {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Board of Directors Section */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-16 text-center">
            <Reveal>
              <div className="w-20 h-1 bg-[#BF9B30] mb-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-[#1A6D5E] mb-4">Leadership</h2>
            </Reveal>
            <Reveal delay={0.4}>
              <h3 className="text-4xl font-bold text-[#2D2D2D]">Board of Directors</h3>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={0.1 * index} />
            ))}
          </div>
        </div>

        {/* Senior Management Section */}
        <div>
          <div className="flex flex-col items-center mb-16 text-center">
            <Reveal>
              <div className="w-20 h-1 bg-[#1A6D5E] mb-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-[#BF9B30] mb-4">Operation</h2>
            </Reveal>
            <Reveal delay={0.4}>
              <h3 className="text-4xl font-bold text-[#2D2D2D]">Senior Management</h3>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={0.1 * index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, delay }: { member: TeamMember; delay: number }) => {
  // Generate initials for the avatar
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Reveal delay={delay}>
      <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-[#F5F5F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1A6D5E] transition-colors duration-500">
          <span className="text-2xl font-bold text-[#1A6D5E] group-hover:text-white transition-colors duration-500">
            {initials}
          </span>
        </div>
        <h4 className="text-xl font-bold text-[#2D2D2D] mb-2">{member.name}</h4>
        <p className="text-[#1A6D5E] font-medium text-sm mb-4 tracking-wide uppercase">{member.role}</p>
        <div className="w-10 h-0.5 bg-gray-100 group-hover:w-20 group-hover:bg-[#BF9B30] transition-all duration-500" />
      </div>
    </Reveal>
  );
};

export default AgroTeam;

'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose, AiOutlinePlayCircle, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { InnovationIcon, SustainabilityIcon } from './AgroIcons';
import Reveal from '@/app/components/Motion/Reveal';

type GalleryItem = {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  src: string;
  caption: string;
  category: 'greenhouse' | 'livestock' | 'fodder';
};

const ALL_ASSETS: GalleryItem[] = [
  // Greenhouse Zone
  { id: 'gh-1', type: 'image', thumbnail: '/farm/greenhouse/Greenhouse.jpg', src: '/farm/greenhouse/Greenhouse.jpg', caption: 'State-of-the-Art Greenhouse', category: 'greenhouse' },
  { id: 'gh-1', type: 'image', thumbnail: '/farm/greenhouse/Greenhouse 2.png', src: '/farm/greenhouse/Greenhouse 2.png', caption: 'Greenhouse', category: 'greenhouse' },
  { id: 'gh-2', type: 'image', thumbnail: '/farm/greenhouse/Greenhouse-Cucumbers.jpg', src: '/farm/greenhouse/Greenhouse-Cucumbers.jpg', caption: 'Cucumber Cultivation', category: 'greenhouse' },
  { id: 'gh-3', type: 'image', thumbnail: '/farm/greenhouse/Inside Greenhouse.jpg', src: '/farm/greenhouse/Inside Greenhouse.jpg', caption: 'Controlled Environment', category: 'greenhouse' },
  { id: 'gh-7', type: 'image', thumbnail: '/farm/greenhouse/salad.jpg', src: '/farm/greenhouse/salad.jpg', caption: 'Leafy Green Production', category: 'greenhouse' },
  { id: 'gh-9', type: 'image', thumbnail: '/farm/greenhouse 1.png', src: '/farm/greenhouse 1.png', caption: 'External Infrastructure', category: 'greenhouse' },
  { id: 'gh-10', type: 'video', thumbnail: '/farm/greenhouse 3.jpeg', src: '/farm/greenhouse 2.mp4', caption: 'Greenhouse Operations', category: 'greenhouse' },

  // Livestock Zone
  { id: 'ls-2', type: 'video', thumbnail: '/farm/goats 2.jpeg', src: '/farm/Livestock/Barn Video.mp4', caption: 'Active Herd Management', category: 'livestock' },
  { id: 'ls-1', type: 'image', thumbnail: '/farm/Livestock/Inside barn 2.jpeg', src: '/farm/Livestock/Inside barn 2.jpeg', caption: 'Inside the Barn', category: 'livestock' },
  { id: 'ls-5', type: 'image', thumbnail: '/farm/goats 2.jpeg', src: '/farm/goats 2.jpeg', caption: 'Elite Goat Breeding', category: 'livestock' },
  { id: 'ls-3', type: 'video', thumbnail: '/farm/Livestock/Goats in barn.jpeg', src: '/farm/Livestock/Livestock Goats.mp4', caption: 'Livestock Goats', category: 'livestock' },

  // Fodder & Crops Zone
  { id: 'fd-8', type: 'video', thumbnail: '/farm/Fodder & Field Crops/Super Napier grass.png', src: '/farm/Fodder & Field Crops/Grass video.mp4', caption: 'Harvesting Fodder', category: 'fodder' },
  { id: 'fd-2', type: 'image', thumbnail: '/farm/Fodder & Field Crops/alfalfa grass 2.jpg', src: '/farm/Fodder & Field Crops/alfalfa grass 2.jpg', caption: 'Alfalfa Fields', category: 'fodder' },
  { id: 'fd-1', type: 'image', thumbnail: '/farm/Fodder & Field Crops/Super Napier grass.png', src: '/farm/Fodder & Field Crops/Super Napier grass.png', caption: 'Super Napier Growth', category: 'fodder' },
  { id: 'fd-5', type: 'image', thumbnail: '/farm/Fodder & Field Crops/seseame crop.jpg', src: '/farm/Fodder & Field Crops/seseame crop.jpg', caption: 'Sesame Production', category: 'fodder' },
  { id: 'fd-10', type: 'image', thumbnail: '/farm/grass 1.png', src: '/farm/grass 1.png', caption: 'Sustainable Forage', category: 'fodder' },
];

const AgroFarm = () => {
  const [selectedCategory, setSelectedCategory] = useState<'greenhouse' | 'livestock' | 'fodder' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getItemsByCategory = (category: 'greenhouse' | 'livestock' | 'fodder') =>
    ALL_ASSETS.filter(item => item.category === category);

  const openLightbox = (category: 'greenhouse' | 'livestock' | 'fodder', index: number) => {
    setSelectedCategory(category);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedCategory(null);
    setCurrentIndex(0);
  };

  const nextItem = () => {
    if (!selectedCategory) return;
    const items = getItemsByCategory(selectedCategory);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    if (!selectedCategory) return;
    const items = getItemsByCategory(selectedCategory);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (selectedCategory && scrollRef.current) {
      const activeThumb = scrollRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        scrollRef.current.scrollTo({
          left: activeThumb.offsetLeft - scrollRef.current.clientWidth / 2 + activeThumb.clientWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, selectedCategory]);

  const currentItems = selectedCategory ? getItemsByCategory(selectedCategory) : [];
  const currentItem = currentItems[currentIndex];

  return (
    <section id="farm" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-24 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold text-[#202020] mb-6">Our Farm Facilities</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 max-w-3xl leading-relaxed text-lg font-light">
              Step inside our $150,000 m² integrated farm, where technology meets traditional land stewardship across three specialized zones.
            </p>
          </Reveal>
        </div>

        {/* Greenhouse Zone */}
        <FacilityZone
          category="greenhouse"
          title="Precision Greenhouse Zone"
          desc="Our operational brick-walled greenhouses enable year-round production of high-value crops, protected from the harsh Somali climate."
          items={getItemsByCategory('greenhouse').slice(0, 2)}
          onItemClick={(category, index) => openLightbox(category, index)}
          icon={<InnovationIcon />}
        />

        {/* Livestock Zone */}
        <FacilityZone
          category="livestock"
          title="Integrated Livestock Zone"
          desc="Modern housing units for specialized breeding, with a focus on genetic excellence and herd health within a bio-secure environment."
          items={getItemsByCategory('livestock').slice(0, 2)}
          onItemClick={(category, index) => openLightbox(category, index)}
          icon={<SustainabilityIcon />}
          reverse
        />

        {/* Fodder & Crops Zone */}
        <FacilityZone
          category="fodder"
          title="Fodder & Crops Zone"
          desc="Lush Super Napier and high-yield grain plantations supported by advanced solar irrigation, ensuring internal feed consistency."
          items={getItemsByCategory('fodder').slice(0, 2)}
          onItemClick={(category, index) => openLightbox(category, index)}
          icon={<InnovationIcon />}
        />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCategory && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-between p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#BF9B30] transition-colors z-[110]"
            >
              <AiOutlineClose size={40} />
            </button>

            {/* Main Content Area */}
            <div className="relative w-full max-w-6xl h-[65vh] flex items-center justify-center mt-12 mb-4 group">
              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevItem(); }}
                className="absolute left-0 md:-left-20 z-[110] text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-4 rounded-full hidden md:block"
              >
                <AiOutlineLeft size={40} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextItem(); }}
                className="absolute right-0 md:-right-20 z-[110] text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-4 rounded-full hidden md:block"
              >
                <AiOutlineRight size={40} />
              </button>

              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative w-full h-full flex items-center justify-center rounded-2xl overflow-hidden bg-black/50"
              >
                {currentItem.type === 'video' ? (
                  <video
                    src={currentItem.src}
                    className="max-w-full max-h-full"
                    controls
                    autoPlay
                    poster={currentItem.thumbnail}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={currentItem.src}
                      fill
                      alt={currentItem.caption}
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Caption & Counter */}
            <div className="text-center mb-6">
              <h3 className="text-white text-2xl font-bold mb-2">{currentItem.caption}</h3>
              <p className="text-[#BF9B30] text-sm uppercase tracking-widest">
                {selectedCategory} Zone — {currentIndex + 1} of {currentItems.length}
              </p>
            </div>

            {/* Scrollable Thumbnail Strip */}
            <div className="w-full max-w-4xl px-4 pb-4">
              <motion.div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {currentItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-20 h-20 md:w-28 md:h-28 flex-shrink-0 cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${currentIndex === idx ? 'border-[#BF9B30] scale-105 shadow-lg shadow-[#BF9B30]/20' : 'border-white/10 opacity-40 hover:opacity-100 hover:border-white/30'
                      }`}
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <Image src={item.thumbnail} fill alt="" className="object-cover" />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center text-white/70">
                        <AiOutlinePlayCircle size={24} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const FacilityZone = ({ category, title, desc, items, onItemClick, icon, reverse = false }: {
  category: 'greenhouse' | 'livestock' | 'fodder',
  title: string,
  desc: string,
  items: GalleryItem[],
  onItemClick: (category: 'greenhouse' | 'livestock' | 'fodder', index: number) => void,
  icon: React.ReactNode,
  reverse?: boolean
}) => (
  <div className={`flex flex-col lg:flex-row gap-16 mb-40 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className="w-full lg:w-5/12">
      {/* <Reveal>
        <div className="bg-[#F5F5F5] p-5 rounded-lg inline-block text-[#1A6D5E] mb-8 shadow-sm">
          {icon}
        </div>
      </Reveal> */}
      <Reveal delay={0.2}>
        <h3 className="text-2xl md:text-4xl font-bold text-[#2D2D2D] mb-8">{title}</h3>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-light mb-10">
          {desc}
        </p>
      </Reveal>
      <Reveal delay={0.6}>
        <button
          onClick={() => onItemClick(category, 0)}
          className="bg-[#1A6D5E] hover:bg-[#145a4d] cursor-pointer text-white px-8 py-4 rounded-full font-bold transition-all transform flex items-center gap-3"
        >
          View Full Category <AiOutlineRight />
        </button>
      </Reveal>
    </div>
    <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, idx) => (
        <Reveal key={item.id} delay={0.4 + idx * 0.2}>
          <div
            className="group relative h-[450px] rounded-lg overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 active:scale-95"
            onClick={() => onItemClick(category, idx)}
          >
            <Image
              src={item.thumbnail}
              fill
              alt={item.caption}
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
              <p className="text-white font-semibold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {item.caption}
              </p>
              {/* <p className="text-[#BF9B30] text-sm md:text-base uppercase tracking-[0.2em] mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 flex items-center gap-2">
                Open Gallery <AiOutlinePlayCircle />
              </p> */}
            </div>
            {item.type === 'video' && (
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                <AiOutlinePlayCircle size={32} />
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default AgroFarm;



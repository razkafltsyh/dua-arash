import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const allProjects = [
  {
    id: 'PRJ-01',
    title: 'Greenwood Residence',
    category: 'Architecture',
    location: 'Jakarta Selatan',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'PRJ-02',
    title: 'Alam Sutera Villa',
    category: 'Interior',
    location: 'Tangerang',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
  },
  {
    id: 'PRJ-03',
    title: 'Citra Garden House',
    category: 'Renovation',
    location: 'Jakarta Barat',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'PRJ-04',
    title: 'Industrial Coffee',
    category: 'Commercial',
    location: 'Bandung',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'PRJ-05',
    title: 'Minimalist Studio',
    category: 'Interior',
    location: 'Kemang',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'PRJ-06',
    title: 'Skyline Apartment',
    category: 'Architecture',
    location: 'Surabaya',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2070&auto=format&fit=crop'
  }
];

const categories = ['All', 'Architecture', 'Interior', 'Commercial', 'Renovation'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative z-20 bg-[#111] text-white py-24 md:py-32 border-b border-white/10 font-['NHaasGroteskTXPro']">
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
               <span className="w-8 h-[1px] bg-amber-500"></span>
               <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
                 Selected Works
               </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Curated <br/>
              <span className="text-gray-500 italic font-['AeonikTRIAL'] font-light">Masterpieces.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-300
                  ${activeFilter === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-white/50 hover:text-white'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          
          {filteredProjects.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer animate-fadeIn"
            >
              
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-900 border border-white/10 mb-6">
                
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                   <div className="w-20 h-20 rounded-full bg-amber-500/90 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="text-black w-8 h-8" />
                   </div>
                </div>

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 border border-white/10">
                   <p className="text-[10px] uppercase tracking-widest text-amber-500 font-['AeonikTRIAL'] font-bold">
                     {item.category}
                   </p>
                </div>
              </div>

              <div className="flex justify-between items-start border-t border-white/10 pt-4 group-hover:border-amber-500/50 transition-colors duration-500">
                <div>
                   <p className="text-xs text-gray-500 font-mono mb-1">{item.id}</p>
                   <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                     {item.title}
                   </h3>
                   <p className="text-sm text-gray-400 font-['AeonikTRIAL'] font-light mt-1">
                     {item.location}
                   </p>
                </div>
                
                <div className="text-right">
                   <p className="text-xs text-gray-500 font-bold border border-white/10 px-2 py-1">
                     {item.year}
                   </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <a href="#contact" className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm uppercase tracking-widest hover:text-amber-500 hover:border-amber-500 transition-all">
              View All Archive Projects <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>

      </div>
    </section>
  );
}
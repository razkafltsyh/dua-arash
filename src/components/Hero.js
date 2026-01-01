import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    title: "Private Sanctuary"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    category: "Commercial",
    title: "Urban Workspace"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    category: "Interior",
    title: "Minimalist Living"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-['NHaasGroteskTXPro']">
      
      <div className="absolute inset-0 pointer-events-none z-0 opacity-5" 
           style={{
             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="relative z-10 w-full h-full min-h-screen flex flex-col lg:flex-row">
        
        <div className="w-full lg:w-5/12 relative h-screen border-r border-white/10 bg-[#0a0a0a]/50 backdrop-blur-sm order-2 lg:order-1">
          
          <div className="absolute left-0 w-full px-8 md:px-16 top-[52%] -translate-y-1/2">
            
            <div className="pl-6 border-l-2 border-amber-500">
              
              <div className={`mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                 <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
                   Architecture & Design
                 </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95] tracking-tight">
                
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-1000 delay-500 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                    PRECISION
                  </span>
                </span>

                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-1000 delay-700 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                    MEETS
                  </span>
                </span>

                <span className="block overflow-hidden pt-2">
                  <span 
                    className={`block transition-transform duration-1000 delay-900 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}
                      text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700
                    `}
                  >
                    AESTHETICS.
                  </span>
                </span>

              </h1>

              <p className={`font-['AeonikTRIAL'] text-gray-400 text-base leading-relaxed max-w-sm mb-10 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                Kami membangun hunian dengan standar teknik tertinggi, memastikan setiap sudut memiliki fungsi dan keindahan yang abadi.
              </p>

              <div className={`transition-opacity duration-1000 delay-[1200ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <a href="#contact" className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white hover:text-amber-500 transition-colors">
                  <span className="w-12 h-[1px] bg-white group-hover:w-24 group-hover:bg-amber-500 transition-all duration-300 ease-out"></span>
                  Start Project
                </a>
              </div>

            </div>
          </div>

        </div>

        <div className="w-full lg:w-7/12 h-[50vh] lg:h-screen relative order-1 lg:order-2 overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out
                ${index === current ? 'opacity-100 z-10 clip-path-full' : 'opacity-0 z-0'}
              `}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out
                  ${index === current ? 'scale-110' : 'scale-100'}
                `}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-8 right-8 text-right z-20">
                 <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1 font-['AeonikTRIAL']">
                   0{index + 1} — {slide.category}
                 </p>
                 <h2 className="text-3xl md:text-5xl font-bold text-white leading-none tracking-tight">
                   {slide.title}
                 </h2>
              </div>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
             {slides.map((slide, index) => (
               <div 
                 key={index}
                 className={`absolute top-0 left-0 h-full bg-amber-500 transition-all duration-[5000ms] linear
                   ${index === current ? 'w-full opacity-100' : 'w-0 opacity-0'}
                 `}
                 style={{ 
                   left: `${(index / slides.length) * 100}%`,
                   width: index === current ? `${100 / slides.length}%` : '0%' 
                 }}
               />
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
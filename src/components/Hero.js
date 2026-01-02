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
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    category: "Architecture",
    title: "Modern Facade"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    category: "Interior",
    title: "Minimalist Living"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const DURATION = 5000;

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] md:h-screen bg-black overflow-hidden font-['NHaasGroteskTXPro']">

      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${index === current ? 'scale-110' : 'scale-100'
                }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full h-full flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">

          <div className="relative pl-6">
            
            <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-amber-500 origin-bottom transition-transform duration-[2500ms] ease-power-out delay-200 ${isLoaded ? 'scale-y-100' : 'scale-y-0'}`} />

            <div className={`mb-4 overflow-hidden`}>
              <div className={`transition-transform duration-[1200ms] ease-power-out delay-300 ${isLoaded ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
                  Architecture & Design
                </span>
              </div>
            </div>

            <h1 className="flex flex-col gap-y-1 md:block text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:leading-[0.95] tracking-tight">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-power-out delay-500 ${isLoaded ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                  PRECISION
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-power-out delay-700 ${isLoaded ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                  MEETS
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-power-out delay-900 ${isLoaded ? 'translate-y-0' : 'translate-y-[110%]'} 
                  text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-[length:200%_auto] animate-shine`}>
                  AESTHETICS.
                </span>
              </span>
            </h1>

            <p className={`font-['AeonikTRIAL'] text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-8 transition-all duration-[1500ms] ease-out delay-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              Kami membangun hunian dengan standar teknik tertinggi, memastikan setiap sudut memiliki fungsi dan keindahan yang abadi.
            </p>

            <div className={`transition-all duration-[1500ms] ease-out delay-[1200ms] ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <a href="#contact" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors">
                <span className="w-12 h-[1px] bg-white/50 group-hover:w-20 group-hover:bg-amber-400 transition-all duration-500 ease-out"></span>
                Start Project
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-20 md:bottom-12 right-6 md:right-12 lg:right-24 z-20 text-right">
        <p className="text-amber-500/80 font-mono text-[10px] uppercase tracking-widest mb-1">
          0{current + 1} — {slides[current].category}
        </p>
        <div className="overflow-hidden">
          <h3 key={current} className="text-white text-xl md:text-2xl font-bold tracking-tight animate-slide-up">
            {slides[current].title}
          </h3>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-20">
        <div
          key={current}
          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
          style={{
            width: '100%',
            animation: `progress ${DURATION}ms linear forwards`
          }}
        />
      </div>

      <style jsx>{`
        .ease-power-out {
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-shine {
          animation: shine 4s linear infinite;
        }

        @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
        }

        @keyframes slide-up {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
            animation: slide-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

    </div>
  );
}
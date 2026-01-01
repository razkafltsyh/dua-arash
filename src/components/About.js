import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  return (
    <section id="about" className="relative z-20 bg-[#111] text-white py-24 md:py-32 overflow-hidden border-b border-white/10 font-['NHaasGroteskTXPro']">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative overflow-hidden aspect-[4/5] lg:aspect-square bg-gray-900 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                alt="Construction Detail"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/20 hidden group-hover:block transition-all duration-500"></div>
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/20 hidden group-hover:block transition-all duration-500"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black px-6 py-4 hidden md:block border border-white/10">
              <p className="font-bold uppercase tracking-widest text-xs">
                Est. 2023
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-amber-500"></span>
              <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
                The Firm
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white tracking-tight">
              We Craft <br />
              <span className="text-gray-500 italic font-['AeonikTRIAL'] font-light">Timeless Spaces.</span>
            </h2>

            <p className="font-['AeonikTRIAL'] text-gray-400 text-lg leading-relaxed mb-8 font-light max-w-lg">
              Dua Arash berdiri di persimpangan antara seni dan teknik sipil.
              Kami tidak sekadar menumpuk bata; kami merancang alur kehidupan di dalam setiap ruang yang kami bangun.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-t border-white/10 mt-12">
              <div className="py-8 pr-8 border-b md:border-b-0 md:border-r border-white/10 group">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                  <AnimatedCounter end={3} />
                </h3>
                <p className="font-['AeonikTRIAL'] text-[10px] uppercase tracking-widest text-gray-500">
                  Years Exp.
                </p>
              </div>

              <div className="py-8 px-0 md:px-8 border-b md:border-b-0 md:border-r border-white/10 group">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                  <AnimatedCounter end={20} suffix="+" />
                </h3>
                <p className="font-['AeonikTRIAL'] text-[10px] uppercase tracking-widest text-gray-500">
                  Projects
                </p>
              </div>

              <div className="col-span-2 md:col-span-1 py-8 md:pl-8 group">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                  <AnimatedCounter end={10} suffix="" />
                </h3>
                <p className="font-['AeonikTRIAL'] text-[10px] uppercase tracking-widest text-gray-500">
                  Clients
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a href="#services" className="text-sm font-bold text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors uppercase tracking-widest">
                Explore Services
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
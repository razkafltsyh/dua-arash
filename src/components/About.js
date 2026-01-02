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
    <section id="about" className="relative z-20 bg-transparent text-white py-24 md:py-32 overflow-hidden font-['NHaasGroteskTXPro']">
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
              <p className="font-bold uppercase tracking-widest text-xs">Est. 2022</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-amber-500"></span>
              <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white tracking-tight">
              We Craft <br />
              <span className="text-gray-500 italic font-['AeonikTRIAL'] font-light">Timeless Spaces.</span>
            </h2>
            <p className="font-['AeonikTRIAL'] text-gray-400 text-lg leading-relaxed mb-8 font-light max-w-lg">
              Mitra konstruksi terpercaya yang menggabungkan presisi teknik sipil dengan estetika arsitektur modern. Kami bekerja dengan standar manajemen proyek yang ketat dan transparan, memastikan setiap hunian terbangun kokoh, fungsional, dan sesuai regulasi kawasan premium.
            </p>
            <div className="grid grid-cols-3 border-t border-white/10 mt-12">
              <div className="py-6 md:py-8 pr-2 md:pr-8 border-r border-white/10 group">
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-amber-500 transition-colors"><AnimatedCounter end={3} /></h3>
                <p className="font-['AeonikTRIAL'] text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 truncate">Years Exp.</p>
              </div>
              <div className="py-6 md:py-8 px-2 md:px-8 border-r border-white/10 group pl-4">
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-amber-500 transition-colors"><AnimatedCounter end={20} suffix="+" /></h3>
                <p className="font-['AeonikTRIAL'] text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500">Projects</p>
              </div>
              <div className="py-6 md:py-8 pl-4 md:pl-8 group">
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-amber-500 transition-colors"><AnimatedCounter end={10} suffix="" /></h3>
                <p className="font-['AeonikTRIAL'] text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500">Happy Clients</p>
              </div>
            </div>

            <div className="mt-8 flex justify-start md:justify-end">
              <a href="#services" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors">
                <span className="w-12 h-[1px] bg-white/50 group-hover:w-20 group-hover:bg-amber-400 transition-all duration-500 ease-out order-1 md:order-2"></span>
                <span className="order-2 md:order-1">Explore Services</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
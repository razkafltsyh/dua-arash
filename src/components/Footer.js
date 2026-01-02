import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative isolate z-[60] bg-[#000000] text-white pt-24 font-['NHaasGroteskTXPro'] w-full"
    >
      <div className="absolute inset-0 bg-black z-[70] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-[80]">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pb-24 border-b border-white/10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              Have an idea? <br />
              <span className="text-gray-500 italic font-['AeonikTRIAL'] font-light">Let's build it.</span>
            </h2>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 group cursor-pointer">
              <div className="relative w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-110">
                <ArrowUpRight className="w-8 h-8 transition-all duration-500 ease-out group-hover:-translate-y-10 group-hover:translate-x-10" />
                <ArrowUpRight className="absolute w-8 h-8 transition-all duration-500 ease-out -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
              <span className="text-xl font-bold uppercase tracking-widest group-hover:text-amber-500 transition-colors duration-300">Start Consultation</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span className="font-['AeonikTRIAL'] font-bold text-xs uppercase tracking-[0.2em]">BSD HQ</span>
            </div>
            <p className="font-['AeonikTRIAL'] text-gray-400 text-sm leading-relaxed">
              BSD City, Tangerang<br />Indonesia
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-['AeonikTRIAL'] text-gray-400 text-sm">
              <li><a href="mailto:hello@duaarash.com" className="hover:text-amber-500 transition-colors">duaarash@gmail.com</a></li>
              <li><a href="tel:+6281234567890" className="hover:text-amber-500 transition-colors">+62 812-3456-7890</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-6">Sitemap</h4>
            <ul className="space-y-4 font-['AeonikTRIAL'] text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Works</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Stories</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-6">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">© 2025 Dua Arash Studio.</p>
        </div>

        <div className="relative w-full overflow-hidden pb-8">
          <h1 className="text-[12vw] md:text-[13.5vw] font-bold leading-none text-white/5 tracking-tighter text-center select-none pointer-events-none">
            DUA ARASH<span className="text-amber-500 opacity-40">.</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
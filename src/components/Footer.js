import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-24 border-t border-white/10 font-['NHaasGroteskTXPro'] relative z-20">

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pb-24 border-b border-white/10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              Have an idea? <br />
              <span className="text-gray-500 italic font-['AeonikTRIAL'] font-light">Let's build it.</span>
            </h2>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                Start Consultation
              </span>
            </a>
          </div>

          <div className="mt-12 md:mt-0">
            <button
              onClick={scrollToTop}
              className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              ( Back to Top )
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span className="font-['AeonikTRIAL'] font-bold text-xs uppercase tracking-[0.2em]">
                Jakarta HQ
              </span>
            </div>
            <p className="font-['AeonikTRIAL'] text-gray-400 text-sm leading-relaxed">
              Jl. Pembangunan No. 88,<br />
              Jakarta Selatan, 12190<br />
              Indonesia
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-['AeonikTRIAL'] text-gray-400 text-sm">
              <li><a href="mailto:hello@duaarash.com" className="hover:text-amber-500 transition-colors">hello@duaarash.com</a></li>
              <li><a href="tel:+622198765432" className="hover:text-amber-500 transition-colors">(021) 9876-5432</a></li>
              <li><a href="https://wa.me/6281234567890" className="hover:text-amber-500 transition-colors">+62 812-3456-7890 (WA)</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-6">Sitemap</h4>
            <ul className="space-y-4 font-['AeonikTRIAL'] text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Works</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Stories</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-6">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">© 2025 Dua Arash Studio.</p>
          <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">Privacy Policy • Terms of Use</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <h1 className="text-[12vw] md:text-[13.5vw] font-bold leading-none text-white/5 tracking-tighter text-center select-none pointer-events-none">
            DUA ARASH
          </h1>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
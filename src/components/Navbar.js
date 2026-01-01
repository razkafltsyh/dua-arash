import React, { useState, useEffect, useRef } from 'react';

const menu = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#portfolio', label: 'Works' },
    { href: '#testimonials', label: 'Stories' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowNav(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return (
        <>
            <nav
                className={`
                    fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
                    ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                    ${isScrolled
                        ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
                        : 'bg-transparent py-6 md:py-8'}
                `}
            >
                <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12">

                    {/* LOGO BRAND */}
                    <a href="#" className="relative z-50 group">
                        <div className="text-white font-['NHaasGroteskTXPro'] font-bold text-xl md:text-2xl tracking-tight">
                            DUA ARASH
                            <span className="text-amber-500">.</span>
                        </div>
                        <div className="h-[1px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></div>
                    </a>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-8 font-['AeonikTRIAL']">
                        {menu.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-xs uppercase tracking-[0.15em] text-gray-300 hover:text-white transition-colors duration-300 relative group py-2"
                                >
                                    {item.label}
                                    {/* Garis Hover */}
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}

                        {/* CTA Button Kecil di Navbar */}
                        <li>
                            <a
                                href="#contact"
                                className={`ml-4 px-5 py-2 border text-xs font-bold uppercase tracking-widest transition-all duration-300
                                    ${isScrolled
                                        ? 'border-white/20 text-white hover:bg-white hover:text-black'
                                        : 'border-white text-white hover:bg-white hover:text-black'}
                                `}
                            >
                                Let's Talk
                            </a>
                        </li>
                    </ul>

                    {/* MOBILE HAMBURGER BUTTON */}
                    <button
                        className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`block w-4 h-[2px] bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
                    ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
                `}
            >
                {/* Background Grid Decoration */}
                <div className="absolute inset-0 pointer-events-none opacity-5"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="flex flex-col justify-center h-full px-8 relative z-10">
                    <p className="text-amber-500 font-mono text-xs mb-8 uppercase tracking-widest">
                        Navigation
                    </p>
                    <ul className="flex flex-col space-y-6">
                        {menu.map((item, index) => (
                            <li key={item.href} className="overflow-hidden">
                                <a
                                    href={item.href}
                                    className={`block text-4xl font-['NHaasGroteskTXPro'] font-bold text-gray-400 hover:text-white hover:translate-x-4 transition-all duration-300
                                        ${open ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                                    `}
                                    style={{ transitionDelay: `${100 + index * 50}ms` }}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 pt-12 border-t border-white/10">
                        <p className="text-gray-500 text-sm font-['AeonikTRIAL']">
                            Jakarta, Indonesia <br />
                            +62 812 3456 7890
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
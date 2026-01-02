import React, { useState, useEffect } from 'react';

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
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto';
    }, [open]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className={`mx-auto px-6 md:px-12 lg:px-24 transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-md' : 'py-8 bg-transparent'}`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <a href="#" className="text-white font-['NHaasGroteskTXPro'] font-bold text-xl tracking-tighter">
                                DUA ARASH<span className="text-amber-500">.</span>
                            </a>
                        </div>

                        {/* Menu Desktop: Muncul di Laptop (lg), Hilang di HP */}
                        <div className="hidden lg:flex items-center gap-8">
                            {menu.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors font-bold"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Hamburger Button: Hanya muncul di HP/Tablet, Hilang di Laptop (lg:hidden) */}
                        <button onClick={() => setOpen(!open)} className="lg:hidden relative z-[110] group py-2">
                            <div className="flex flex-col gap-1.5 items-end">
                                <span className={`h-[2px] bg-white transition-all duration-300 ${open ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
                                <span className={`h-[2px] bg-white transition-all duration-300 ${open ? 'opacity-0' : 'w-5'}`}></span>
                                <span className={`h-[2px] bg-white transition-all duration-300 ${open ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay: Tetap sama untuk HP */}
            <div className={`fixed inset-0 z-[90] bg-[#0a0a0a] transition-all duration-700 ease-in-out ${open ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="h-full flex flex-col justify-start pt-40 px-6 md:px-12 lg:px-24">
                    <p className="text-amber-500 font-mono text-xs mb-8 uppercase tracking-[0.3em]">
                        Navigation
                    </p>
                    <ul className="flex flex-col space-y-4 md:space-y-6">
                        {menu.map((item, index) => (
                            <li key={item.href} className="overflow-hidden">
                                <a
                                    href={item.href}
                                    className={`block text-3xl md:text-5xl font-['NHaasGroteskTXPro'] font-bold text-gray-400 hover:text-white transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    style={{ transitionDelay: `${200 + index * 50}ms` }}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto mb-12 pt-8 border-t border-white/10">
                        <div className="text-gray-500 text-sm font-['AeonikTRIAL']">
                            Jakarta, Indonesia <br />
                            <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                                +62 812 3456 7890
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: '01',
        name: 'Arif Muhammad',
        role: 'Private Residence Owner',
        location: 'Jagakarsa',
        text: 'Dua Arash menerjemahkan bahasa abstrak kami menjadi struktur beton yang bernyawa. Mereka tidak sekadar membangun rumah, tapi menciptakan ekosistem tempat kami tumbuh.',
    },
    {
        id: '02',
        name: 'Budi Santoso',
        role: 'CEO, TechSpace',
        location: 'BSD City',
        text: 'Presisi adalah bahasa cinta mereka. Dari sketsa awal hingga baut terakhir, level detail yang diberikan tim Dua Arash jauh melampaui standar kontraktor konvensional.',
    },
    {
        id: '03',
        name: 'Citra Lestari',
        role: 'Interior Enthusiast',
        location: 'Menteng',
        text: 'Sebuah kolaborasi yang menenangkan. Transparansi biaya dan progres kerja membuat kami tidur nyenyak selama proses konstruksi. Hasil akhirnya? Masterpiece.',
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
            setIsAnimating(false);
        }, 500);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 8000);
        return () => clearInterval(timer);
    }, []);

    const activeItem = testimonials[current];

    return (
        <section id="testimonials" className="relative z-20 bg-[#111] text-white min-h-screen flex flex-col justify-center items-center border-b border-white/10 overflow-hidden font-['NHaasGroteskTXPro'] px-6 py-20">
            
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                 style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
            </div>

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <Quote size={300} />
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
                
                <div className="flex items-center gap-3 mb-12 opacity-80">
                    <span className="w-8 h-[1px] bg-amber-500"></span>
                    <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
                        Client Stories
                    </span>
                    <span className="w-8 h-[1px] bg-amber-500"></span>
                </div>

                <div className={`transition-all duration-500 transform
                    ${isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}
                `}>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-light leading-normal tracking-wide mb-10">
                        "{activeItem.text}"
                    </h3>

                    <div className="mb-12">
                        <h4 className="text-xl font-bold text-white mb-2">
                            {activeItem.name}
                        </h4>
                        <p className="font-['AeonikTRIAL'] text-gray-500 text-xs uppercase tracking-widest">
                            {activeItem.role} — <span className="text-amber-500">{activeItem.location}</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-8 border-t border-white/10 pt-8 mt-4">
                    <button 
                        onClick={handlePrev}
                        className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <div className="font-mono text-white/40 text-sm">
                        <span className="text-white font-bold text-lg">0{current + 1}</span> / 0{testimonials.length}
                    </div>

                    <button 
                        onClick={handleNext}
                        className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                    >
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                <div 
                    className="h-full bg-amber-500 transition-all duration-500 ease-out mx-auto"
                    style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
                ></div>
            </div>

        </section>
    );
};

export default Testimonials;
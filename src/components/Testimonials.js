import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: '01',
        name: 'Hendra Setiawan',
        role: 'New House Construction',
        location: 'The Icon, BSD',
        text: 'Bangun rumah dari nol di BSD ternyata nggak serumit yang dibayangkan. Timnya sangat transparan soal material dan struktur, hasilnya kokoh sesuai spek yang dijanjikan.',
    },
    {
        id: '02',
        name: 'Sarah Wijaya',
        role: 'Home Interior',
        location: 'Avani, BSD',
        text: 'Suka banget sama hasil interiornya. Ruang keluarga jadi terasa lebih luas dan homie, persis seperti desain 3D. Finishing-nya rapi banget sampai ke sudut-sudut.',
    },
    {
        id: '03',
        name: 'Budi Hartono',
        role: 'Major Renovation',
        location: 'Foresta, BSD',
        text: 'Renovasi total rumah lama jadi konsep minimalis modern. Pengerjaannya bersih dan tukangnya sopan-sopan. Tetangga komplek sampai pada nanyain pakai kontraktor mana.',
    },
    {
        id: '04',
        name: 'Linda Kusuma',
        role: 'Kitchen & Extension',
        location: 'De Park, BSD',
        text: 'Nambah area dapur dan service area di belakang. Prosesnya cepat dan update progress dikirim tiap minggu tanpa harus ditanya. Sangat recommended untuk warga BSD.',
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const DURATION = 6000;

    const goToSlide = (index) => {
        if (current === index || isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent(index);
            setIsAnimating(false);
        }, 600);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % testimonials.length);
                setIsAnimating(false);
            }, 600);
        }, DURATION);
        return () => clearInterval(timer);
    }, [current]);

    const activeItem = testimonials[current];

    return (
        <section id="testimonials" className="relative z-20 bg-[#111] text-white py-12 md:py-20 border-b border-white/10 font-['NHaasGroteskTXPro']">
            
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                
                {/* Header Kecil Saja */}
                <div className="flex items-center gap-3 mb-12">
                    <span className="w-8 h-[1px] bg-amber-500"></span>
                    <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
                        Client Voices
                    </span>
                </div>

                {/* Konten Utama */}
                <div className={`transition-all duration-700 ease-in-out ${isAnimating ? 'opacity-0 translate-y-8 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
                    
                    {/* QUOTE */}
                    <div className="relative mb-12">
                         <div className="absolute -top-6 left-0 md:-top-10 md:-left-10 text-white/5 pointer-events-none">
                            <Quote size={100} className="md:w-[120px] md:h-[120px]" />
                        </div>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide text-white relative z-10 max-w-4xl pt-4 md:pt-0">
                            "{activeItem.text}"
                        </h3>
                    </div>

                    {/* USER INFO */}
                    <div className="flex flex-col items-end w-full border-t border-white/10 pt-6">
                        <h4 className="text-2xl font-bold text-white text-right">
                            {activeItem.name}
                        </h4>
                        <div className="flex items-center gap-3 mt-2 justify-end">
                            <p className="font-['AeonikTRIAL'] text-sm text-gray-500 uppercase tracking-widest text-right">
                                {activeItem.role}
                            </p>
                            <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                            <p className="font-['AeonikTRIAL'] text-sm text-amber-500 uppercase tracking-widest text-right">
                                {activeItem.location}
                            </p>
                        </div>
                    </div>

                </div>

                {/* LOADING INDICATORS (Segmented) */}
                <div className="mt-10 flex justify-end items-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="relative h-1 w-12 md:w-16 bg-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20"
                        >
                            {current === index && (
                                <div 
                                    className="absolute top-0 left-0 h-full bg-amber-500"
                                    style={{ 
                                        width: '100%',
                                        animation: `progress ${DURATION}ms linear forwards`
                                    }}
                                ></div>
                            )}
                        </button>
                    ))}
                </div>

                <style jsx>{`
                    @keyframes progress {
                        from { width: 0%; }
                        to { width: 100%; }
                    }
                `}</style>

            </div>
        </section>
    );
};

export default Testimonials;
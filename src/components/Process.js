import React, { useEffect, useState, useRef } from 'react';

const steps = [
    {
        id: '01',
        phase: 'Discovery',
        title: 'Site Inspection & Regulation',
        desc: 'Survey lokasi mendetail untuk analisis teknis lahan. Kami memastikan perencanaan desain mematuhi aturan Estate Management (IPL) dan Koefisien Dasar Bangunan (KDB) di kawasan Anda.'
    },
    {
        id: '02',
        phase: 'Concept',
        title: 'Residential Blueprinting',
        desc: 'Perancangan layout rumah yang memprioritaskan fungsi, sirkulasi udara, dan pencahayaan. Output berupa Denah, Visual 3D Fasad, dan Gambar Kerja (DED) yang presisi.'
    },
    {
        id: '03',
        phase: 'Execution',
        title: 'Clean Construction',
        desc: 'Eksekusi pembangunan dengan standar kerapian tinggi. Area kerja bersih, minim debu, dan manajemen logistik teratur agar tidak mengganggu kenyamanan tetangga dan lingkungan sekitar.'
    },
    {
        id: '04',
        phase: 'Handover',
        title: 'Final QC & Warranty',
        desc: 'Serah terima kunci setelah melalui checklist kualitas menyeluruh. Dilengkapi dengan garansi pemeliharaan (retensi) untuk memastikan hunian benar-benar siap ditinggali.'
    }
];

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setActiveStep(index);
                    }
                });
            },
            { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
        );
        stepRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="process" className="relative z-20 bg-transparent text-white py-24 font-['NHaasGroteskTXPro']">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
                
                <div className="text-center mb-20">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <span className="w-8 h-[1px] bg-amber-500"></span>
                        <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
                            The Methodology
                        </span>
                        <span className="w-8 h-[1px] bg-amber-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How We <span className="text-gray-600 italic font-['AeonikTRIAL'] font-light">Build.</span></h2>
                </div>

                <div className="relative">
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2 h-full"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} ref={el => stepRefs.current[index] = el} data-index={index} className={`relative flex flex-row items-start md:items-center gap-6 md:gap-0 transition-all duration-700 ${activeStep >= index ? 'opacity-100' : 'opacity-30 blur-[2px]'}`}>

                                <div className={`hidden md:block w-1/2 pr-12 text-right transition-all duration-500 relative ${index % 2 !== 0 ? 'order-3 pl-12 pr-0 text-left' : ''}`}>
                                    
                                    <div className={`absolute -top-12 text-9xl font-bold text-white/5 pointer-events-none select-none font-['AeonikTRIAL'] 
                                        ${index % 2 === 0 ? '-left-12' : '-right-12'}`}>
                                        {step.id}
                                    </div>

                                    <div className="relative z-10">
                                        <p className="font-mono text-amber-500 text-xs uppercase tracking-widest mb-1">// Phase {step.phase}</p>
                                        <h3 className="text-3xl font-bold">{step.title}</h3>
                                    </div>
                                </div>

                                <div className="relative z-10 flex-shrink-0 md:order-2">
                                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center bg-[#111] transition-all duration-500 ${activeStep >= index ? 'border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)]' : 'border-white/20'}`}>
                                        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${activeStep >= index ? 'bg-amber-500 scale-125' : 'bg-white'}`}></div>
                                    </div>
                                </div>

                                <div className={`w-full md:w-1/2 md:pl-12 md:order-3 relative ${index % 2 !== 0 ? 'md:pr-12 md:pl-0 md:text-right md:order-1' : ''}`}>
                                    
                                    <div className="md:hidden absolute -top-4 right-0 text-7xl font-bold text-white/5 pointer-events-none select-none font-['AeonikTRIAL']">
                                        {step.id}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="md:hidden mb-2">
                                            <p className="font-mono text-amber-500 text-[10px] uppercase tracking-widest mb-1">// {step.phase}</p>
                                            <h3 className="text-2xl font-bold">{step.title}</h3>
                                        </div>
                                        <p className="font-['AeonikTRIAL'] text-gray-400 text-lg leading-relaxed font-light">{step.desc}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
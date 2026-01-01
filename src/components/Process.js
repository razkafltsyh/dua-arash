import React, { useEffect, useState, useRef } from 'react';

const steps = [
  {
    id: '01',
    phase: 'Discovery',
    title: 'Consultation & Site Analysis',
    desc: 'Diskusi mendalam mengenai visi, kebutuhan, dan anggaran. Dilanjutkan dengan survei lokasi untuk analisis teknis lahan dan regulasi.'
  },
  {
    id: '02',
    phase: 'Concept',
    title: 'Design & Blueprinting',
    desc: 'Pengembangan konsep arsitektural. Output berupa sketsa, denah, model 3D, dan gambar kerja teknis (DED) yang presisi.'
  },
  {
    id: '03',
    phase: 'Execution',
    title: 'Construction & Management',
    desc: 'Eksekusi pembangunan dengan standar material SNI. Pengawasan ketat oleh tim sipil untuk memastikan struktur sesuai spesifikasi.'
  },
  {
    id: '04',
    phase: 'Handover',
    title: 'Final Inspection & Delivery',
    desc: 'Pemeriksaan akhir (checklist quality control) sebelum serah terima kunci. Jaminan garansi pemeliharaan pasca konstruksi.'
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

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative z-20 bg-[#111] text-white py-24 border-b border-white/10 font-['NHaasGroteskTXPro']">
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{
             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <p className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            The Methodology
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How We <span className="text-gray-600 italic font-['AeonikTRIAL'] font-light">Build.</span>
          </h2>
        </div>

        <div className="relative">
          
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2 h-full"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepRefs.current[index] = el}
                data-index={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 transition-all duration-700
                  ${activeStep >= index ? 'opacity-100' : 'opacity-30 blur-[2px]'}
                `}
              >
                
                <div className={`hidden md:block w-1/2 pr-12 text-right transition-all duration-500
                   ${index % 2 !== 0 ? 'order-3 pl-12 pr-0 text-left' : ''}
                `}>
                  <p className="font-mono text-amber-500 text-xs uppercase tracking-widest mb-1">
                    // Phase {step.phase}
                  </p>
                  <h3 className="text-3xl font-bold">{step.title}</h3>
                </div>

                <div className="relative z-10 flex-shrink-0 md:order-2">
                   <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-[#111] transition-all duration-500
                      ${activeStep >= index ? 'border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]' : ''}
                   `}>
                      <div className={`w-3 h-3 rounded-full bg-white transition-all duration-500
                         ${activeStep >= index ? 'bg-amber-500 scale-125' : ''}
                      `}></div>
                   </div>
                </div>

                <div className={`w-full md:w-1/2 pl-4 md:pl-12 md:order-3
                   ${index % 2 !== 0 ? 'md:pr-12 md:pl-0 md:text-right md:order-1' : ''}
                `}>
                  <div className="md:hidden mb-2">
                    <p className="font-mono text-amber-500 text-[10px] uppercase tracking-widest mb-1">
                      {step.id} // {step.phase}
                    </p>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>

                  <p className="font-['AeonikTRIAL'] text-gray-400 text-lg leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        <div className="mt-20 text-center border-t border-white/10 pt-8">
           <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
             System Protocol: Standardized Quality Control
           </p>
        </div>

      </div>
    </section>
  );
};

export default Process;
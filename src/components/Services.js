import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
    { id: '01', title: 'Residential Architecture', description: 'Perancangan khusus rumah tinggal. Fokus pada fungsi ruang, sirkulasi udara yang sehat, dan desain fasad modern yang tak lekang waktu.', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop' },
    { id: '02', title: 'Home Construction', description: 'Pembangunan rumah dari nol dengan standar struktur tahan gempa dan finishing rapi. Manajemen tukang terawasi ketat.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop' },
    { id: '03', title: 'Living Interior', description: 'Penataan interior yang homie dan fungsional. Kurasi furnitur serta pencahayaan untuk kenyamanan maksimal keluarga.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop' },
    { id: '04', title: 'Home Renovation', description: 'Revitalisasi rumah lama atau penambahan lantai dan ruang baru tanpa merusak struktur existing.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop' },
];

const Services = () => {
    const [activeService, setActiveService] = useState(0);
    return (
        <section id="services" className="relative z-20 bg-transparent text-white py-24 font-['NHaasGroteskTXPro']">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-amber-500"></span>
                            <span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">Our Expertise</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Technical <br /><span className="text-gray-500 italic font-['AeonikTRIAL'] font-light">Precision.</span></h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="space-y-0">
                            {services.map((service, index) => (
                                <div key={index} className={`group relative border-t border-white/10 py-10 cursor-pointer transition-all duration-500 hover:pl-4 ${activeService === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`} onMouseEnter={() => setActiveService(index)}>
                                    <span className="absolute top-10 left-0 text-xs text-amber-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-6 group-hover:translate-x-0">{service.id}</span>
                                    <div className="flex justify-between items-start">
                                        <h3 className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${activeService === index ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{service.title}</h3>
                                        <ArrowUpRight className={`w-6 h-6 transition-transform duration-300 ${activeService === index ? 'text-amber-500 rotate-45' : 'text-gray-600'}`} />
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500 ease-out ${activeService === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="font-['AeonikTRIAL'] text-gray-400 text-lg leading-relaxed max-w-lg font-light">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="border-t border-white/10"></div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 hidden lg:block relative h-[600px]">
                        <div className="sticky top-32 w-full h-full">
                            <div className="relative w-full h-full overflow-hidden bg-[#0a0a0a] border border-white/10">
                                {services.map((service, index) => (
                                    <img key={index} src={service.image} alt={service.title} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out transform ${activeService === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
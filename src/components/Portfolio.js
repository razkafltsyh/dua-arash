import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const allProjects = [
	{
		id: 'PRJ-01',
		title: 'The Icon Residence',
		category: 'Architecture',
		location: 'BSD City',
		year: '2023',
		image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
	},
	{
		id: 'PRJ-02',
		title: 'Foresta Modern House',
		category: 'Interior',
		location: 'BSD City',
		year: '2023',
		image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
	},
	{
		id: 'PRJ-03',
		title: 'De Park Classic',
		category: 'Renovation',
		location: 'BSD City',
		year: '2022',
		image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
	},
	{
		id: 'PRJ-04',
		title: 'Vanya Park Minimalist',
		category: 'Architecture',
		location: 'BSD City',
		year: '2024',
		image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop'
	},
	{
		id: 'PRJ-05',
		title: 'Avani Interior',
		category: 'Interior',
		location: 'BSD City',
		year: '2024',
		image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
	},
	{
		id: 'PRJ-06',
		title: 'Greenwich Luxury',
		category: 'Renovation',
		location: 'BSD City',
		year: '2023',
		image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
	}
];

const categories = ['All', 'Architecture', 'Interior', 'Renovation'];

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState('All');
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
	const [hoveredProjectId, setHoveredProjectId] = useState(null);

	const filteredProjects = activeFilter === 'All' ? allProjects : allProjects.filter(project => project.category === activeFilter);

	const handleMouseMove = (e, id) => {
		setCursorPos({
			x: e.clientX,
			y: e.clientY
		});
		setHoveredProjectId(id);
	};

	const handleMouseLeave = () => {
		setHoveredProjectId(null);
	};

	return (
		<section id="portfolio" className="relative z-20 bg-transparent text-white py-16 md:py-20 font-['NHaasGroteskTXPro']">
			<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

				<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
					<div>
						<div className="flex items-center gap-3 mb-4">
							<span className="w-8 h-[1px] bg-amber-500"></span>
							<span className="font-['AeonikTRIAL'] text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">Selected Works</span>
						</div>
						<h2 className="text-4xl md:text-6xl font-bold tracking-tight">Curated <br /><span className="text-gray-500 italic font-['AeonikTRIAL'] font-light">Residential.</span></h2>
					</div>
					<div className="flex flex-wrap gap-2 md:gap-4">
						{categories.map((cat) => (
							<button key={cat} onClick={() => setActiveFilter(cat)} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${activeFilter === cat ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-white/10 hover:border-white/50 hover:text-white'}`}>{cat}</button>
						))}
					</div>
				</div>

				<div className="min-h-[600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
					{filteredProjects.map((item) => (
						<div
							key={item.id}
							className="group cursor-pointer relative"
							onMouseMove={(e) => handleMouseMove(e, item.id)}
							onMouseLeave={handleMouseLeave}
						>

							{hoveredProjectId === item.id && (
								<div
									className="hidden md:flex fixed z-[9999] pointer-events-none items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded-sm shadow-lg will-change-transform"
									style={{
										top: 0,
										left: 0,
										transform: `translate3d(${cursorPos.x + 16}px, ${cursorPos.y + 16}px, 0)`,
									}}
								>
									<span className="text-[10px] font-bold uppercase tracking-widest font-['AeonikTRIAL']">VIEW</span>
									<ArrowUpRight className="w-3 h-3" />
								</div>
							)}

							<div className="relative aspect-[4/3] overflow-hidden bg-gray-900 border border-white/10 mb-6">
								<img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" />
								<div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 border border-white/10">
									<p className="text-[10px] uppercase tracking-widest text-amber-500 font-['AeonikTRIAL'] font-bold">{item.category}</p>
								</div>
							</div>

							<div className="flex justify-between items-start border-t border-white/10 pt-4 group-hover:border-amber-500/50 transition-colors duration-500">
								<div>
									<p className="text-xs text-gray-500 font-mono mb-1">{item.id}</p>
									<h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">{item.title}</h3>
									<p className="text-sm text-gray-400 font-['AeonikTRIAL'] font-light mt-1">{item.location}</p>
								</div>
								<div className="text-right"><p className="text-xs text-gray-500 font-bold border border-white/10 px-2 py-1">{item.year}</p></div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-10 text-center">
					<a href="#contact" className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm uppercase tracking-widest hover:text-amber-500 hover:border-amber-500 transition-all">
						View All Archive Projects <ArrowUpRight className="w-4 h-4" />
					</a>
				</div>

			</div>
		</section>
	);
}
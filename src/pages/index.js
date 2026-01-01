import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process'; // Komponen baru (Pastikan file Process.js sudah dibuat)
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    // Wrapper bg-[#111] menjaga konsistensi warna saat scroll/loading
    <main className="bg-[#111] min-h-screen text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />        {/* Split Layout: Intro */}
      <About />       {/* Monolith: Data & Statistik */}
      <Services />    {/* Blueprint Index: Katalog Layanan */}
      <Process />     {/* Timeline: Alur Kerja (PENTING untuk Trust) */}
      <Portfolio />   {/* Grid: Galeri Proyek */}
      <Testimonials />{/* Editorial: Social Proof */}
      <Footer />
    </main>
  );
}
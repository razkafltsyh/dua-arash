import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@studio-freight/lenis').then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 1.2,
          smooth: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      });
    }
  }, []);

  return (
    <main className={`${inter.className} relative min-h-screen bg-[#0a0a0a]`}>

      <div
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
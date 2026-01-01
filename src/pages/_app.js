import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Only run on client
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
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
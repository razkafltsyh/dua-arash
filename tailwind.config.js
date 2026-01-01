/** @type {import('tailwindcss').Config} */
module.exports = {
  // Path content dari file Anda sudah benar
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Konfigurasi animasi Anda tetap dipertahankan
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      // Kita gabungkan semua font family di sini
      fontFamily: {
        sans: ['AeonikTRIAL', 'sans-serif'], // Font default Anda
        aeonik: ['AeonikTRIAL', 'sans-serif'], // Alias untuk Aeonik
        suisse: ['SuisseIntl', 'sans-serif'], // Alias untuk Suisse
        haas: ['NHaasGroteskTXPro', 'sans-serif'], // Alias untuk font baru Anda
        inter: ['Inter', 'sans-serif'], // Tambahkan ini agar font inter bisa digunakan
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

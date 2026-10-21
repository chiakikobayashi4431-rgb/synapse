/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // iPhone Duo の内側ディスプレイ（約890px幅）など、2画面見開きで表示できる幅
        fold: '600px',
      },
    },
  },
  plugins: [],
} 
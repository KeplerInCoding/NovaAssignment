/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        '20': '20deg',
        '-20': '-20deg',
        
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rgba-blue': 'rgba(80, 48, 229, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ], 
  

}


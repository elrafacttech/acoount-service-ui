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
      },
      screens: {
        vvsm:"370px",
        vsm: "400px",
        ssm: "420px",
        sm: "640px",
        md: "768px",
        slg: "960px",
        lg: "1024px", 
        xl: "1280px",
      },
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ], 
  

}


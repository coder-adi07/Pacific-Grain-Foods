/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pgf: {
          burgundy: {
            DEFAULT: '#981A32',
            50: '#fdf3f4',
            100: '#fbe4e7',
            200: '#f8cbd2',
            300: '#f2a5b1',
            400: '#e87487',
            500: '#d94762',
            600: '#be2b47',
            700: '#981a32',
            800: '#831a2f',
            900: '#6f192b',
            950: '#400913',
          },
          gold: {
            DEFAULT: '#E9B11E',
            50: '#fefbee',
            100: '#fdf4d2',
            200: '#fbe7a5',
            300: '#f7d36d',
            400: '#f3bc38',
            500: '#e9b11e',
            600: '#cb8b13',
            700: '#a16312',
            800: '#824d16',
            900: '#6c4017',
          },
          green: {
            DEFAULT: '#2E5715',
            light: '#46a35e',
            dark: '#1c360c',
          },
          cream: {
            DEFAULT: '#F8F1E0',
            light: '#FCF8F0',
            dark: '#EAE0BD',
          },
          charcoal: {
            DEFAULT: '#1E2229',
            muted: '#4A5568',
            dark: '#111418',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["Montserrat"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'scampi': {
            '50': '#f4f4fa',
            '100': '#e7e7f2',
            '200': '#d4d4e9',
            '300': '#b6b8da',
            '400': '#9394c7',
            '500': '#7c79b8',
            '600': '#6e67a9',
            '700': '#625895',
            '800': '#574e7f',
            '900': '#484266',
            '950': '#2f2b40',
        },
      },
    },
  },
  plugins: [],
};

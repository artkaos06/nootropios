import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: { light: '#6366f1', DEFAULT: '#4f46e5', dark: '#4338ca' },
          secondary: { light: '#a78bfa', DEFAULT: '#8b5cf6', dark: '#7c3aed' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

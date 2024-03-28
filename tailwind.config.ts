import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        appGray: "#878A8B",
      },
    },
  },
  plugins: [],
};
export default config;

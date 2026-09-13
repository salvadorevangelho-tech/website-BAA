import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F2E9",
        charcoal: "#1E1E1C",
        "charcoal-soft": "#262622",
        lime: "#CFF43A",
        "lime-dark": "#8FAE1F",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        hand: ["var(--font-caveat)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wolf-black": "#0A0A0A",
        "wolf-charcoal": "#171717",
        "wolf-gold": "#F2A63D",
        "wolf-gold-dark": "#B8791F",
        "wolf-silver": "#D9D9D9",
        "wolf-white": "#F5F5F5",
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-oswald)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.06em",
        pack: "-0.04em",
      },
      keyframes: {
        "wolf-pulse": {
          "0%, 100%": {
            opacity: "0.72",
            filter:
              "drop-shadow(0 0 6px rgba(242,166,61,0.55)) drop-shadow(0 0 18px rgba(242,166,61,0.25))",
          },
          "50%": {
            opacity: "1",
            filter:
              "drop-shadow(0 0 14px rgba(242,166,61,0.95)) drop-shadow(0 0 36px rgba(184,121,31,0.7))",
          },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "70%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0" },
        },
      },
      animation: {
        "wolf-pulse": "wolf-pulse 2.6s ease-in-out infinite",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

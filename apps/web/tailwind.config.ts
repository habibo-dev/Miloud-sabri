import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172A38",
        navy: "#1F3A4D",
        champagne: "#C9A46A",
        cream: "#FAF8F4",
        mist: "#F2F4F5",
        muted: "#68747D",
      },
      boxShadow: {
        glass: "0 12px 40px rgba(31,58,77,.10)",
      },
      borderRadius: {
        glass: "24px",
      },
    },
  },
  plugins: [],
};

export default config;

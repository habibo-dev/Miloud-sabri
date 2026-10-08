import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#172A38", navy: "#1F3A4D", champagne: "#C9A46A", cream: "#FAF8F4", muted: "#68747D" }
    }
  },
  plugins: []
} satisfies Config;
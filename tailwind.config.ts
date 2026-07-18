import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171A16",
        muted: "#575B50",
        sage: "#66744D",
        "sage-dark": "#35402A",
        butter: "#FFF8D8",
        paper: "#FFFDF3",
        "sage-pale": "#EEF1DF",
        cream: "#F8F1D2",
        verified: "#87F502"
      },
      boxShadow: {
        paper: "0 18px 50px rgba(53,64,42,.10)",
        float: "0 24px 70px rgba(53,64,42,.15)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#071A52",
        electric: "#1F6BFF",
        cyan: "#31D7FF",
        softPurple: "#8B7BFF"
      },
      boxShadow: {
        glow: "0 12px 40px rgba(49,215,255,0.22)"
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 80% 20%, rgba(49,215,255,0.22), transparent 30%), radial-gradient(circle at 15% 10%, rgba(139,123,255,0.15), transparent 25%), linear-gradient(125deg, #041233 0%, #071A52 45%, #123D9A 100%)"
      }
    }
  },
  plugins: []
};

export default config;

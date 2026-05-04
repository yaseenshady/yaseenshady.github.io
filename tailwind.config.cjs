module.exports = {
  content: ["./app/index.html", "./app/src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070a",
        panel: "rgba(13, 18, 28, 0.72)",
        stroke: "rgba(255, 255, 255, 0.12)",
        cyan: "#7dd3fc",
        blue: "#60a5fa",
        violet: "#a78bfa",
        mint: "#86efac",
        gold: "#facc15"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(56, 189, 248, 0.18)",
        glass: "0 30px 120px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0, transparent 24%), radial-gradient(circle at 80% 0%, rgba(96,165,250,0.12) 0, transparent 28%), radial-gradient(circle at 50% 100%, rgba(167,139,250,0.14) 0, transparent 32%)"
      }
    }
  },
  plugins: []
};

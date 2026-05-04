/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.html", "./app/src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        mist: "#0a1022",
        panel: "rgba(10, 16, 34, 0.7)",
        line: "rgba(148, 163, 184, 0.14)",
        accent: "#79e4ff",
        glow: "#9b8cff",
      },
      boxShadow: {
        glass:
          "0 24px 80px rgba(4, 8, 20, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        soft: "0 18px 60px rgba(8, 15, 36, 0.38)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

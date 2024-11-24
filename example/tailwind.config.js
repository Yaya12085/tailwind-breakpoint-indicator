/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-breakpoint-indicator")({
      indicatorPosition: "bottom-right",
      indicatorBackground: "rgba(59, 130, 246, 1)",
      indicatorColor: "white",
    }),
  ],
};

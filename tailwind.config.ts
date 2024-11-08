import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainGreen: "#145566",
        lightGreen: "#25758A",
        headingColor: "#111111",
        pText: "#403F3F",
        darkPText: "#C8C8C8",
        darkBg: "#151515",
        lightBg: "#F2F2F2",
      },
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-350': 'repeat(auto-fit, minmax(350px, 1fr))',
        'auto-fit-450': 'repeat(auto-fit, minmax(450px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;

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
        primary: "#FA502F",
        secondary: "#383A47",
        jasper: "#D84830",
        rhino: "#273C75",
        valentineRed: "#EB5757",
        shamrockGreen: "#00A64F",
        gunsmoke: "#81848A",
        iron: "#D4D4D8",
        "grey-goose": "#CECECE",
        "antique-white": "#F6ECE0",
        "dark-jungle-green": "#1B1C20",
        "battleship-grey": "#828282",
        "desert-storm": "#F8F8FA",
        "midnight-moss": "#010F07",
        "green-white": "#E7EAEC",
        azure: "#0093FF",
        tuna: "#303A42",
      },
      fontFamily: {
        open_sans: ["var(--open_sans-font)"],
      },
      boxShadow: {
        xl: "0px 4px 28px 0px rgba(19, 41, 61, 0.15)",
        md: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
        message: "0px -30px 50px 7px rgba(0,0,0,0.01);",
        container: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fadeInDrawer: {
          "0%": { transform: "translateX(-320px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInDrawer: "fadeInDrawer 0.3s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",
      },
      backgroundImage: {
        test: "radial-gradient(circle at bottom right, white, #663a6d 40%);",
      },
    },
  },
  plugins: [],
};
export default config;

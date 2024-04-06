/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          500: "#872BFF",
          100: "#F411CF",
        },
        secondary: "#A8A8A8",
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
        },
        light: {
          900: "#FFFFFF",
        },
        "gradient-purple": "#1DA1F2",
        "gradient-pink": "#FF26DC",
        "gradient-orange": "#D9952F",
      },
      fontFamily: {
        Plus_Jakarta_Sans: ["var(--font-Plus_Jakarta_Sans)"],
      },
      boxShadow: {
        "white-shadow":
          "0px 4px 10px 0px rgba(140, 140, 140, 0.1), 0px 18px 18px 0px rgba(140, 140, 140, 0.09),0px 40px 24px 0px rgba(140, 140, 140, 0.05), 0px 71px 29px 0px rgba(140, 140, 140, 0.01)",
        "card-white": "0px 2px 70px 0px rgba(0, 0, 0, 0.06)",
        "card-dark": "0px 2px 70px 0px rgba(255, 255, 255, 0.06)",

        // backgroundImage: {
        //   "auth-dark": "url('/assets/images/auth-dark.png')",
        //   "auth-light": "url('/assets/images/auth-light.png')",
        // },
      },
      screens: {
        xs: "430px",
        md: "1024px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

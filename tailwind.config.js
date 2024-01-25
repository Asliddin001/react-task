/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#F0F0F0",
          1: "#F2FAF6",
          2: "#C9D2CE",
          3: "#EBF3EF",
          4: "#FAFFFC",
        },
        green: "#2EA97D",
        violet: {
          DEFAULT: "#856EC6",
          1: "#F6F2FF",
        },
        black: {
          DEFAULT: "#181A19",
          1: "#414644",
        },
        grey: {
          DEFAULT: "#6D7471",
          1: "#969F9B",
        },
      },
      container: {
        maxWidth: "1440px",
        center: true,
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

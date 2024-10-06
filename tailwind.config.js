/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      boxShadow: {
        // "inner-left-top": "inset 10px 5px 10px -5px rgba(112, 128, 144, 0.2), inset 5px 10px 10px -5px rgba(112, 128, 144, 0.2)",
      },
      colors: {
        link: "#FFC107",
        light: {
          background: "#F0F4F8",
          primary: "#BCCCE0",
          secondary: "#9FB3C8",
          txt: "#2C3E50",
          accent: "#3A5F8F",
        },
        dark: {
          background: "#1A2633",
          primary: "#2E4057",
          secondary: "#3C5A77",
          txt: "#D0D3D4",
          accent: "#6C8AB6",
        },
      },
      backgroundImage: {
        "btn-light-mode-1": "linear-gradient(45deg, #3A5F8F, #BCCCE0)",
        "btn-light-mode-2": "linear-gradient(45deg, #2C3E50, #AAB8C2)",
        "btn-dark-mode-1": "linear-gradient(45deg, #7F9AB8, #34495E)",
        "btn-dark-mode-2": "linear-gradient(45deg, #5D6D7E, #2C3E50)",
        "btn-dark-mode-3": "linear-gradient(45deg, #6C8AB6, #1A2633)",
        "btn-dark-mode-4": "linear-gradient(45deg, #3C5A77, #2E4057)",
        "btn-dark-mode-5": "linear-gradient(45deg, #3A5F8F, #1A2633)"

      },
      opacity: {
        light: "0.3",
        dark: "0.1",
      },
    },
  },
  plugins: [],
};

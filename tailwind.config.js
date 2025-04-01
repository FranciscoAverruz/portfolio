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
          accent: "#3A5F8F",
          title: "#1A252F",
          subtitle: "#34495E",
          paragraph: "#4A6071",
          generalText: "#2C3E50",
          active: "#0E6655",
        },
        dark: {
          background: "#1A2633",
          primary: "#2E4057",
          secondary: "#3C5A77",
          accent: "#6C8AB6",
          title: "#FFFFFF",
          subtitle: "#BFC3C4",
          paragraph: "#A9ADB0",
          generalText: "#D0D3D4",
          active: "#16A085",
        },
        tech: {
          Reactjs: "#ABE8FF",
          ReactjsDark: "#61DAFB",
          ReactRouter: "#E57373",
          ReactRouterDark: "#CA4245",
          TailwindCSS: "#90E0EF",
          TailwindCSSDark: "#38BDF8 ",
          FramerMotion: "#F88E72",
          FramerMotionDark: "#F05A28",
          Chartjs: "#FFA5B1",
          ChartjsDark: "#FF6384",
          Axios: "#9C71E0",
          AxiosDark: "#671DDF",
          Libphonenumberjs: "#FF8A65",
          LibphonenumberjsDark: "#E64A19",
          JSONWeb: "#555555",
          JSONWebDark: "#000000",
          Stripe: "#008CFC", // Color de Stripe backend (cerca del color principal)
          StripeDark: "#006BB3", // Variante más oscura de Stripe

          Vite: "#A5A9FF",
          ViteDark: "#646CFF",

          Nodejs: "#68A063", // Color oficial de Node.js
          NodejsDark: "#3C9D3D", // Variante más oscura de Node.js

          Expressjs: "#000000", // El color de Express es muy básico (negro)
          ExpressjsDark: "#3F3F3F", // Variante oscura de Express

          MongoDB: "#47A248", // Color oficial de MongoDB
          MongoDBDark: "#3E8E41", // Variante más oscura de MongoDB

          Mongoose: "#6CBBF2", // Color oficial de Mongoose
          MongooseDark: "#4F99CC", // Variante más oscura de Mongoose

          JWT: "#000000", // Sin un color oficial, pero puedes usar negro para JWT
          JWTDark: "#333333", // Variante oscura de JWT (de nuevo, negro)

          Nodemailer: "#D14836", // Color oficial de Nodemailer (rojo)
          NodemailerDark: "#B02E1A", // Variante más oscura de Nodemailer

          SocketIO: "#000000", // Color oficial de Socket.io (negro)
          SocketIODark: "#333333", // Variante más oscura de Socket.io

          CORS: "#F7A800", // Color de CORS (amarillo cálido)
          CORS_Dark: "#C67A00", // Variante más oscura de CORS

          Swagger: "#85EA2D", // Color principal de Swagger
          SwaggerDark: "#5EAC24", // Variante más oscura de Swagger

          Jest: "#C21325", // Color principal de Jest
          JestDark: "#9A0F1F", // Variante más oscura de Jest
        },
      },
      backgroundImage: {
        "btn-light-mode-1": "linear-gradient(45deg, #3A5F8F, #BCCCE0)",
        "btn-light-mode-2": "linear-gradient(45deg, #2C3E50, #AAB8C2)",
        "btn-dark-mode-1": "linear-gradient(45deg, #7F9AB8, #34495E)",
        "btn-dark-mode-2": "linear-gradient(45deg, #5D6D7E, #2C3E50)",
        "btn-dark-mode-3": "linear-gradient(45deg, #6C8AB6, #1A2633)",
        "btn-dark-mode-4": "linear-gradient(45deg, #3C5A77, #2E4057)",
        "btn-dark-mode-5": "linear-gradient(45deg, #3A5F8F, #1A2633)",
      },
      opacity: {
        light: "0.3",
        dark: "0.1",
      },
    },
  },
  plugins: [],
};

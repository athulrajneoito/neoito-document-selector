/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[class~='dark']"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for sidebar layout
      },
      colors: {
        primary: "#FF5A1F",
        primaryLight: "#FFF8F1",
        error: "#F21E1E",
        success: "#13C344",
        smalltext: "#1E1F22",
        card: "#F8F8FA",
        muted: "#999BA0",
      },
    },
  },
};

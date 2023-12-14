/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#199A8E",
        primaryDark: "#101623",
        primaryGray: "#717784",
        medicalGray: "#F9FAFB",
        secondary: "#E5E7EB",
        medical: "#A1A8B0",
        medicalBlack: "#3B4453",
        "medicalGray-2": "#F5F8FF",
        medicalError: "#FF5C5C",
        medicalGray_1: "#E8F3F1",
        medics_gray: "#ADADAD",
        medics_black: "#3B4453",
        medics_gray_2: "#717784",
        medics_gray_3: "#DEECE9",
        medics_green: "#E8F3F1",
      },
    },
  },
  plugins: [],
};

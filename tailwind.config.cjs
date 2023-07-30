/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "darker-blue": "hsl(207, 26%, 17%)",
        "very-dark-blue": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "light-gray": "hsl(0, 0%, 98%)",
      },
    },
  },

  plugins: [require("daisyui")],
};

module.exports = config;

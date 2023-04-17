/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          margin: {
            '40px': '40px',
          }
        },
    },
    plugins: [require("daisyui")],
  };

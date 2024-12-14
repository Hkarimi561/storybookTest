/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
    "./projects/**/*.{html,ts,scss}",
  ],
  darkMode: ['class', '[data-theme="emerald"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["emerald", "dark"],
  },
}


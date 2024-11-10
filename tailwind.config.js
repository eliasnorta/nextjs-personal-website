/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/blog/[slug]/page.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}


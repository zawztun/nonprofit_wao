/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F2EEEC",
        theme_primary: "#2E4149",
        theme_blue: "#6EA8E8",
        theme_light_blue: "#76D7D3",
        theme_yellow: "#F8E263",
        theme_orange: "#ff7849",
        theme_red: "#D11F22",
        theme_green: "#459B4A",
        theme_grar_dark: "#273444",
        theme_gray: "#8492a6",
        theme_footer: "#384C56",
        "theme_gray-light": "#d3dce6",
        theme_pj: "#FFFFFF",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "jiggle-3s": "jiggle 3s ease-in-out infinite",
        "jiggle-4s": "jiggle 4s ease-in-out infinite",
        "jiggle-5s": "jiggle 5s ease-in-out infinite",
        "jiggle-5.5s": "jiggle 5.5s ease-in-out infinite",
      },
      keyframes: {
        jiggle: {
          "0%": { transform: "translate(0)" },
          "50%": { transform: "translate(0px, 15px)" },
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        karla: ["var(--font-karla)"],
      },
      colors: {
        cutie: {
          "blue-100": "#93BEFF",
          "blue-200": "#506D98",
          "blue-300": "#314664",
          orange: "#FFB682",
          "gray-100": "#F8F8F8",
          "gray-200": "#D9D9D9",
          "gray-300": "#6B6B6B",
          "green-100": "#69DAD0",
          "green-200": "#44C2BB",
          "green-300": "#32938D",
        },
        hackathon: {
          "blue-100": "#38A3A5",
          "blue-200": "#22577A",
          "green-100": "#E7F7E9",
          "green-200": "#80ED99",
          "green-300": "#57CC99",
          "green-400": "#3CB97A",
          "yellow-100": "#FFCF55",
          "gray-100": "#E7E7E7",
          "gray-200": "#9ea4af",
          "gray-300": "#525252",
          page: "#F5F5F5",
          tags: {
            "red-bg": "#FFE9E2",
            "red-text": "#F07167",
            "yellow-bg": "#FFF0BC",
            "yellow-text": "#FFB81C",
            "green-bg": "#CFEDEA",
            "green-text": "#00AFB9",
            "gray-bg": "#E9E9E9",
            "gray-text": "#969696",
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
            "grayblue-bg": "#D3DDE4",
            "grayblue-text": "#22577A",
            "teal-bg": "#D7EDED",
            "teal-text": "#38A3A5",
            "lightgreen-bg": "#DDF5EB",
            "lightgreen-text": "#57CC99",
            "pink-bg": "#FFE3FB",
            "pink-text": "#F583F1",
            white: "#fff",
          },
        },
      },
    },
  },
  plugins: [],
};

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
        "bounce-1s": "bounce 1s infinite",
        "jiggle-3s": "jiggle 3s ease-in-out infinite",
        "jiggle-4s": "jiggle 4s ease-in-out infinite",
        "jiggle-5s": "jiggle 5s ease-in-out infinite",
        "jiggle-5.5s": "jiggle 5.5s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%": {
            transform: "translate(0px,-7px)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translate(0px, 0px)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translate(0px,-7px)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
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
          "blue-400": "#465974",
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
            "red-bg": "#F07167",
            "red-text": "#FFE9E2",
            "yellow-bg": "#FFB81C",
            "yellow-text": "#FFF0BC",
            "green-bg": "#00F1FF",
            "green-text": "#CFEDEA",
            "gray-bg": "#969696",
            "gray-text": "#E9E9E9",
            "purple-bg": "#C08EFF",
            "purple-text": "#E6DFF6",
            "grayblue-bg": "#95BFFF",
            "grayblue-text": "#D3DDE4",
            "teal-bg": "#38A3A5",
            "teal-text": "#D7EDED",
            "lightgreen-bg": "#57CC99",
            "lightgreen-text": "#DDF5EB",
            "pink-bg": "#F583F1",
            "pink-text": "#FFE3FB",
            white: "#fff",
          },
        },
      },
    },
  },
  plugins: [],
};

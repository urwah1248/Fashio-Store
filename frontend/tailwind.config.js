module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: [
          "Inter"
        ],
        noto: [
          "Noto Serif", "cursive"
        ],
        playfair: [
          'Playfair Display', 'serif'
        ]
      },
    },
  },
  plugins: [],
}

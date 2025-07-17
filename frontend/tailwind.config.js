// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        herbal: "#144525",
         diafixbg:'#043f64',
         herbalancebg:'#5d0f41',
         slimfitbg:'#59612e',
         uricarebg:'#4d052e'

      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      }
    }
  },
  plugins: [],
}

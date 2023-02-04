module.exports = {
  mode: "jit",
  purge: ["./src/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        sunflower: "#133752",
        valhalla: "#f3f4f2",
        monarch: "#dba621",
        cream: "#f5f6f4",
        vinRouge: "#a1415d",
      },
    },
  },
  variants: {},
  plugins: [],
};

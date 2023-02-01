module.exports = {
  mode: "jit",
  purge: ["./src/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        sunflower: "#E6D029",
        valhalla: "#201852",
        cream: "#F3EEE4",
      },
    },
  },
  variants: {},
  plugins: [],
};

const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postcss = require("postcss-import");

module.exports = {
  plugins: {
    postcss,
    tailwindcss,
    autoprefixer,
    // tailwindcss: {},
    // autoprefixer: {},
  },
};

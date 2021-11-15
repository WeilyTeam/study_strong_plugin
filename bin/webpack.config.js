const pkg = require("../package.json");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../plugin"),
  },
  plugins: [],
};

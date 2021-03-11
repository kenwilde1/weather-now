const path = require("path");

module.exports = {
  entry: "./assets/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./assets/dist"),
  },
};

const path = require("path");

module.exports = {
  mode: "development",
  entry: `${__dirname}/lib/index.js`,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
};

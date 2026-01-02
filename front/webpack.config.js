const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",

  entry: {
    server: "./scripts/index.js",
    form: "./scripts/formulario.js",
  },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    clean: true,
  },

  plugins: [
    new Dotenv({
      path: `./.env${
        process.env.NODE_ENV === "production" ? ".production" : ""
      }`,
    }),

    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};

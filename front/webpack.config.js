module.exports = {
  entry: {
    server: "./scripts/index.js",
    form: "./scripts/formulario.js",
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  },
};

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    "single-spa.config": "./src/single-spa.config.ts",
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true, // чтобы не кидало на 404 при вводе произвольного url
    port: 9000,
  },
};

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

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
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        test_react_app: "test_react_app@http://localhost:3000/remoteEntry.js",
      },
    }),
    /* В импортируемом модуле:

        new ModuleFederationPlugin({
          name: "test_react_app",
          library: { type: "var", name: "test_react_app" },
          filename: "remoteEntry.js",
          exposes: {
            "./single-spa.config": "./src/single-spa.config.ts",
          },
        }),
    */
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true, // чтобы не кидало на 404 при вводе произвольного url
    port: 9000,
  },
};

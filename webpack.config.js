const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".mjs", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "build/js/"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build/"),
    port: 4000,
    publicPath: "http://localhost:4000/js/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

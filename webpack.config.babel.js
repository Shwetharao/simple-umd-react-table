const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = (env, options) => {
  const isDevelopmentServer = options.mode === "development";
  return {
    devtool: isDevelopmentServer ? "source-map" : false,
    resolve: {
      extensions: [".js"]
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: ["babel-loader"]
        },
        {
          test: /\.css?$/,
          use: ["style-loader", {
            loader: "css-loader",
            options: {
              sourceMap: isDevelopmentServer
            }
          }]
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.join(path.join(__dirname, "src"), "index.html")
      })
    ],
    output: {
      path: path.join(__dirname, "dist"),
      filename: "react-simple-table-Umd-plugin.js",
      libraryTarget: "umd",
      globalObject: "this",
      libraryExport: "default",
    }
  }
}
// webpack.prod.js
import path from "path";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { fileURLToPath } from "url"; // For ES Module compatibility

// Get the current directory from import.meta.url
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { common } from "./webpack.common.js";

export default merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/css"),
          to: path.resolve(__dirname, "dist/css"),
        },
        {
          from: path.resolve(__dirname, "public/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
});

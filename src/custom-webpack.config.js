const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const path = require(`path`);

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 0,
      minRatio: 0.8,
      deleteOriginalAssets: true,
    }),
    new BrotliPlugin({
      filename: "[path][base].br",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 0,
      minRatio: 0.8,
    }),
  ],
};

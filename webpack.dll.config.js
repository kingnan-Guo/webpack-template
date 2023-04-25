const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    lodash: ["lodash"]
  },
  output: {
    filename: "dll/[name].js",
    library: "[name]", // 每个bundle暴露的全局变量名
    // library: '[name]', //每一个boundle 暴露的全局变量名
    // libraryTarget: "umd" //暴露出全局变量的方式
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "production-dll-dist", "[name].manifest.json"),
      name: "[name]"
    }),

  ]
};

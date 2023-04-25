const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const DeepScope = require("webpack-deep-scope-plugin").default;
const MiniCss = require("mini-css-extract-plugin");
const htmlPath = path.resolve(__dirname, "public/index.html");
const globAll = require("glob-all");
const srcAbs = path.resolve(__dirname, "src"); //得到src的绝对路径
const paths = globAll.sync([`${srcAbs}**/*.js`, htmlPath]);

const WebBundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const CompressionWebpackPlugin = require('compression-webpack-plugin');

const webpack = require("webpack");
module.exports =   {
    mode: "production",
    // devtool: "source-map",
    output:{
        path: path.resolve(__dirname, "production-terser-dist-zip"),
        // filename: "main.js"
        filename:"script/[name]-[hash:5].js"
    },
    optimization: {
        // 是否要启用压缩，默认情况下，生产环境会自动开启
        // minimize: true,
        minimizer: [
          // 压缩时使用的插件，可以有多个 webpack5可以直接使用
          new TerserPlugin(),
          new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), //在 开发环境中 和生产环境中
        // new WebBundleAnalyzerPlugin({
        //     analyzerMode: "static"
        // })
        // new WebBundleAnalyzerPlugin(), //图形查看包的大小
        // new CompressionWebpackPlugin(),
        new CompressionWebpackPlugin({
            test: /\.js/, //js才压缩
            // minRatio: 0.5
        })
        // new DeepScope(),
        // new MiniCss(),
    ]
}

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: './[name].js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../', 'public'),
        open: true,
        port: 9000
    },
    module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images'
                },
              },
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            }
          }
        ],
      },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './[name].css',
          }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.html'
        }),
        new CopyPlugin([
          {
            from: './public',
            to: 'public',
          },
        ]),
    ],
}
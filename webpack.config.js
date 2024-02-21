const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    target: ['web', 'es5'], // для перевода в код es5.. babel targets
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        favicon: path.resolve(__dirname, 'src', 'images', 'favicon-32x32.png'),
      }),
      new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),

      new webpack.ProgressPlugin(),
      // to see the building progression
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin({
          test: /\.css$/i,
          parallel: 4,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader, // for using 'style-loader' in order to inline <style> in html cahnge MiniCssExtractPlugin.loader to style-loader
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
          include: path.resolve(__dirname, 'src', 'style'), // where to take style.scss file
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      edge: '17',
                      firefox: '60',
                      chrome: '67',
                      safari: '11.1',
                      ie: '11',
                    },
                  },
                ],
              ],
            },
          },
        },
      ],
    },
  };
};

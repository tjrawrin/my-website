const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  return {
    mode: argv.mode,
    entry: {
      main: ['./assets/javascripts/main.js', './assets/stylesheets/main.css'],
    },
    output: {
      filename: devMode ? '[name].js' : '[name].[chunkhash:8].js',
      path: path.resolve(__dirname, 'static/assets'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'assets'),
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'assets'),
          use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[contenthash:8].css',
        chunkFilename: devMode ? '[id].css' : '[id].[contenthash:8].css',
      }),
      devMode
        ? null
        : new ManifestPlugin({
            publicPath: 'assets/',
            fileName: path.resolve(__dirname, 'data/manifest.json'),
          }),
    ].filter(Boolean),
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyWebpackPlugin({})],
    },
  };
};

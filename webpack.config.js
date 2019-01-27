const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  return {
    mode: argv.mode,
    devtool: devMode ? 'cheap-eval-source-map' : 'source-map',
    entry: {
      main: ['./assets/javascripts/main.js', './assets/stylesheets/main.css'],
    },
    output: {
      filename: devMode ? 'js/[name].js' : 'js/[name].[chunkhash:8].js',
      publicPath: '/',
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
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true },
            },
          ],
        },
      ],
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: devMode ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
        chunkFilename: devMode
          ? 'css/[id].css'
          : 'css/[id].[contenthash:8].css',
      }),
      ManifestPlugin({
        publicPath: 'assets/',
        fileName: path.resolve(__dirname, 'data/manifest.json'),
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true,
            },
          },
        }),
        new UglifyWebpackPlugin({ sourceMap: true }),
      ],
    },
  };
};

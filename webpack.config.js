const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (env, { mode = 'development' }) {
  return {
    mode,
    context: path.join(__dirname, 'examples'),
    entry: {
      index: './index.js',
    },
    output: {
      path: path.join(__dirname, 'examples-www'),
      filename: `js/[name]${mode === 'production' ? '.min' : ''}.js`,
    },
    devtool: 'sourcemap',
    resolve: {
      alias: {
        'xin-select2': __dirname,
      },
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: mode === 'production' },
            },
          ],
        },
        // {
        //   test: /\.(svg|png|jpe?g|gif)(\?.*)?$/i,
        //   use: {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 50,
        //       name: 'images/[name].[ext]',
        //     },
        //   },
        // },
        // {
        //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        //   use: {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 50,
        //       name: 'fonts/[name].[ext]',
        //     },
        //   },
        // },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `css/[name]${mode === 'production' ? '.min' : ''}.css`,
      }),
    ],
    // optimization: {
    //   minimizer: [
    //     new UglifyJsPlugin({
    //       cache: true,
    //       parallel: true,
    //       sourceMap: true, // set to true if you want JS source maps
    //     }),
    //     new OptimizeCSSAssetsPlugin({}),
    //   ],
    // },
  };
};

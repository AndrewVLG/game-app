const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = (env, argv) => {
  const mode = argv.mode || 'production'
  const isDev = mode === 'development'

  const devtool = isDev ? 'source-map' : 'nosources-source-map'
  return {
    mode,
    devtool,
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: 'html-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.ts|tsx$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset',
        },
        {
          test: /\.svg$/i,
          type: 'asset',
          use: ['url-loader'],
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: /\.tsx$/,
          resourceQuery: { not: [/url/] },
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
    ],
    devServer: {
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
      },
    },
  }
}

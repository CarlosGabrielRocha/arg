const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
        home: './src/home.js',
        elisabeth: './src/elisabeth.js'
    },
    mode: 'development',
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                targets: "defaults",
                presets: [
                  ['@babel/preset-env']
                ]
              }
            }
          }
        ]
      },
      module: {
        rules: [
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif|svg|mp4|mp3)$/i,
            type: 'asset/resource'
        }
    ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}
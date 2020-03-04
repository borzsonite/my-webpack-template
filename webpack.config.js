const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.css$/,
            loader: MiniCssExtractPlugin.loader
        }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: '[name].css'
            }
        )
    ]
}
const path = require('path');
<<<<<<< HEAD
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
=======
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
>>>>>>> temp

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
<<<<<<< HEAD
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
=======
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css'
    }
    )],
>>>>>>> temp
}
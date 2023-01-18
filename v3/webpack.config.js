const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './demo.js',
    output: {
        path: path.resolve(__dirname, '../demo')
    },
    resolve: {
        alias: {
            '<rootDir>': path.resolve(__dirname)
        },
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,

                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebPackPlugin({
            template: '../demo/index.html',
            filename: '../demo/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../demo')
        }
    }
};

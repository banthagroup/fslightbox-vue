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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebPackPlugin({
            filename: '../demo/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../demo')
        }
    }
};

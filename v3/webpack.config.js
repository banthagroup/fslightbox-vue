const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './d.js',
    output: {
        path: path.resolve(__dirname, '../1')
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
            template: '../1/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../1')
        }
    }
};

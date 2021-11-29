require('dotenv').config({ path: '../base/.env' });
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './tests/__tests-services__/cypress/test-app.js',
    output: {
        path: path.resolve(__dirname, '../base')
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
            template: '../base/index.html',
            filename: '../base/index.html'
        })
    ],
    devServer: {
        host: process.env.CYPRESS_HOST,
        port: process.env.CYPRESS_PORT,
        static: {
            directory: path.resolve(__dirname, '../base')
        }
    }
};
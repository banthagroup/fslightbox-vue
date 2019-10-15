const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, ''),
        libraryTarget: "commonjs2",
        filename: "./index.js",
    },
    resolve: {
        alias: {
            "vue": path.resolve(__dirname, './node_modules/vue'),
            "vue-template-compiler": path.resolve(__dirname, './node_modules/vue-template-compiler'),
        }
    },
    externals: {
        "vue-template-compiler": {
            commonjs: "vue-template-compiler",
            commonjs2: "vue-template-compiler",
            amd: "vue-template-compiler",
            root: "vue-template-compiler"
        },
        "vue": {
            commonjs: "vue",
            commonjs2: "vue",
            amd: "vue",
            root: "vue"
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: "vue-loader"
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: './index.js', to: './dist' },
            { from: './package.json', to: './dist' },
            { from: './README.md', to: './dist' }
        ]),
        new VueLoaderPlugin(),
    ]
};

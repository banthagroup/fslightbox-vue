const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const baseConfig = {
    externals: {
        "vue": {
            commonjs: "vue",
            commonjs2: "vue",
            root: "Vue"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
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
        new VueLoaderPlugin()
    ]
};

const packageConfig = Object.assign({
    entry: '../base/src/js/index.js',
    output: {
        path: path.join(__dirname, ''),
        libraryTarget: 'commonjs2',
        filename: '../v3.js',
    }
}, baseConfig);


const umdConfig = Object.assign({
    entry: './src/umd.js',
    output: {
        path: path.join(__dirname, ''),
        libraryTarget: 'umd',
        filename: '../fslightbox.v3.umd.js',
    }
}, baseConfig);

module.exports = [packageConfig, umdConfig];

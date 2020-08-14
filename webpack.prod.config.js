const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const baseConfig = {
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
        new VueLoaderPlugin()
    ]
};

const packageConfig = Object.assign({
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, ''),
        libraryTarget: "commonjs2",
        filename: "./index.js",
    }
}, baseConfig);


const umdConfig = Object.assign({
    entry: './src/umd.js',
    output: {
        path: path.join(__dirname, ''),
        libraryTarget: "umd",
        filename: "./dist/fslightbox.umd.js",
    }
}, baseConfig);

module.exports = [packageConfig, umdConfig];

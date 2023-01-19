const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const baseConfig = {
	mode: "production",
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
    entry: '../FsLightbox.vue',
    output: {
        path: path.join(__dirname, ''),
        libraryTarget: 'commonjs2',
        filename: '../package/index.js',
    }
}, baseConfig);


const umdConfig = Object.assign({
    entry: './umd.js',
    output: {
        path: path.join(__dirname, ''),
        libraryTarget: 'umd',
        filename: '../package/fslightbox.umd.js',
    }
}, baseConfig);

module.exports = [packageConfig, umdConfig];

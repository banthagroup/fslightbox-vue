var p=require("path"),h=require("html-webpack-plugin"),{VueLoaderPlugin}=require("vue-loader");module.exports={entry:"./d.js",output:{path:p.resolve(__dirname,"../s")},resolve:{alias:{"<rootDir>":p.resolve(__dirname)},modules:[p.resolve(__dirname,"node_modules")]},module:{rules:[{test:/\.vue$/,exclude:/node_modules/,use:{loader:"vue-loader"}}]},plugins:[new VueLoaderPlugin(),new h({template:"../s/index.html"})],devServer:{static:{directory:p.resolve(__dirname,"../s")}}}

var p=require("path"),{VueLoaderPlugin}=require("vue-loader"),b={mode:"production",externals:{"vue":{commonjs:"vue",commonjs2:"vue",root:"Vue"}},module:{rules:[{test:/\.js$/,exclude:/node_modules/,use:{loader:"babel-loader"}},{test:/\.vue$/,exclude:/node_modules/,use:{loader:"vue-loader"}}]},plugins:[new VueLoaderPlugin()]};module.exports=[Object.assign({entry:"./umd.js",output:{path:p.join(__dirname,""),libraryTarget:"umd",filename:"../package/fslightbox.v3.umd.js",}},b),Object.assign({entry:"../s/i.js",output:{path:p.join(__dirname,""),libraryTarget:"commonjs2",filename:"../package/v3.js"}},b)]

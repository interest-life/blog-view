const webpack = require("webpack");
const path = require("path");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  entry:{
    app:['./src/index.js']
  },
  mode:"development",
  output:{
    path:path.resolve(__dirname,"/build"),
    filename:'blog-boundle.js',
   // publicPath:'/blog/'
  },
  devtool: 'source-map',
  module:{
    rules:[
      {
        test:/\.css$/,
        //排除node_modules目录下的文件，npm包不需要编译
        exclude:/node_modules/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.less$/,
        exclude:/node_modules/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        // 排除node_modules目录下的文件, npm安装的包不需要编译
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html'
    }),
      new OpenBrowserPlugin({url: 'http://localhost:8087'})
  ],
  devServer:{
    port:8087,
    host:"localhost",
    disableHostCheck: true,
    historyApiFallback:true,
    proxy:{
        "/api/*": {
            target: "http://localhost:8082",
                secure: false,
                changeOrigin:true
        }
    }
  },

}
module.exports = config;

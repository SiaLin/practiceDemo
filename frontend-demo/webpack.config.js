const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Create multiple instances
const extractCSS = new ExtractTextPlugin('css/main.css');
const extractLESS = new ExtractTextPlugin('css/bootstrap.css');


module.exports = {
   entry: './src/index.js',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   output: {
     filename: 'build.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
       },
       {
            test: /\.less$/i,
            use: extractLESS.extract([ 'css-loader', 'less-loader' ])
       },
       {
         test: /\.(png|jpg|gif)$/,
         loader: 'url-loader',
         options: {
            outputPath: 'css/image/'
          }  
       },
       {
         test: /\.(png|jpg|gif)$/,
         loader: 'image-webpack-loader' 
       },
       {
          test: /.woff|.woff2|.svg|.eot|.ttf/,
          loader: 'url-loader',
          options:{
              limit:10000,
              publicPath: '../css/font/',
              outputPath: 'css/font/',
              name:'[hash].[ext]'
              
          }
       }
    ]
   },
    plugins: [
        extractCSS,
        extractLESS
   ]
}
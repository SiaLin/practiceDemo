const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');  //加载html的插件
const HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');  //开发环境下将html复制一份到dist目录下

module.exports ={
  entry:'./src/index.js',  //入口  字符串（1个）  对象（多个）
  output:{
      path: path.resolve(__dirname,'dist'),    //输出地址
      filename:'main.js'
  },
  module:{
      rules:[{
        test:/\.js?$/,
        include:[
          path.resolve(__dirname,"src")    //指定目录下的js
        ],
        loader:'babel-loader',     //加载器
        options:{                    //配置==>babel-loader的配置
          presets:[
            ["es2015",{modules:false}],
            "stage-0",
            "react"
          ]
        }
      } ]
  },
  plugins:[
    // new HTMLWebpackHarddiskPlugin(),
    new HTMLWebpackPlugin({
      alwaysWriteToDisk:true,
      filename:'index.html',
      template:'./src/views/index.html',  //html模板路径
      // chunks:['vendor','index']    //mainfest:可以理解为莫哭死清单，载货单
    })

  ]
}

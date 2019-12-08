const path = require('path');
const EndWebpackPlugin = require('../plugin/EndWebpackPlugin');

const modules = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, "../loader/loader.js"),
            options: {
              loader: '自定义的loader',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 在初始化 EndWebpackPlugin 时传入了两个参数，分别是在成功时的回调函数和失败时的回调函数；
    new EndWebpackPlugin(() => {
      // Webpack 构建成功，并且文件输出了后会执行到这里，在这里可以做发布文件操作
      console.log('----------success----------');
    }, (err) => {
      // Webpack 构建失败，err 是导致错误的原因
      console.error(err);
    })
  ]
}

module.exports = modules;
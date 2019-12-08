class EndWebpackPlugin {

  constructor(doneCallback, failCallback) {
    // 存下在构造函数中传入的回调函数
    this.doneCallback = doneCallback;
    this.failCallback = failCallback;
  }

  apply (compiler) {
    compiler.plugin('done', (stats) => {
      // 在 done 事件中回调 doneCallback
      this.doneCallback(stats);
    });
    compiler.plugin('failed', (err) => {
      // 在 failed 事件中回调 failCallback
      this.failCallback(err);
    });
  }
}
// 导出插件 
module.exports = EndWebpackPlugin;

/*
作者：浩麟
链接：https://juejin.im/post/5a5c18f2518825734f52ad65
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
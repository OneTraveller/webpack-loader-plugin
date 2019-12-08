// 自定义loader
// loader-utils, schema-utils是webpack的loader工具库，有很多便捷的方法可以调用
const { getOptions } = require("loader-utils");
const validateOptions = require("schema-utils");

// 第一步先验证options是否符合类型，
// 第二步获取参数，然后替换传入的资源文件字符串。

const schema = {
  type: "object",
  properties: {
    loader: {
      type: 'string'
    },
  }
};

module.exports = function (source) {
  const options = getOptions(this);
  validateOptions(schema, options, 'loader');
  source = source.replace(/\[loader\]/g, options.loader);
  return source;
}
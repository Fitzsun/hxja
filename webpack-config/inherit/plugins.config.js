var webpack = require('webpack');
var SpritesmithPlugin = require('webpack-spritesmith');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dirVars = require('../base/dir-vars.config.js');
var pageArr = require('../base/page-entries.config.js');

var HashOutput = require('webpack-plugin-hash-output');

var configPlugins = [

  /* 全局shimming */
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    Vue: 'vue',
    vue: 'vue',
  }),

  /* 抽取出所有通用的部分 */
  /* 只是雪碧图的方法 */
  new SpritesmithPlugin({
    // 目标小图标
    src: {
      cwd: path.resolve(dirVars.publicDir, './imgs/sprite'),
      glob: '*.png',
    },
    // 输出雪碧图文件和样式文件
    target: {
      image: path.resolve(dirVars.publicDir, './imgs/sprite.png'),
      css: path.resolve(dirVars.publicDir, './less/sprite.css'),
    },
    // 样式文件中调用雪碧图地址写法
    apiOptions: {
      cssImageRef: '../imgs/sprite.png',
    },
    spritesmithOptions: {
      algorithm: 'top-down',
    },
  }),
  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons/commons',      // 需要注意的是，chunk的name不能相同！！！
    filename: '[name]/bundle.[chunkhash].js',
    minChunks: 4,
  }),
  /* 抽取出webpack的runtime代码()，避免稍微修改一下入口文件就会改动commonChunk，导致原本有效的浏览器缓存失效 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'webpack-runtime',
    filename: 'commons/commons/webpack-runtime.[hash].js',
  }),
  /* 抽取出chunk的css */
  new ExtractTextPlugin('css/styles.[contenthash].css'),
  /* 配置好Dll */
  // new webpack.DllReferencePlugin({
  //   context: dirVars.staticRootDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
  //   manifest: require('../../manifest.json'), // 指定manifest.json
  //   name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  // }),
  new HashOutput({
    manifestFiles: 'webpack-runtime', // 指定包含 manifest 在内的 chunk
  }),
];

pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/page.html`,
    template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
    chunks: ['webpack-runtime', page, 'commons/commons'],
    hash: true, // 为静态资源生成hash值
    xhtml: true,
  });
  configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;

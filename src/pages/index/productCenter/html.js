const config = require('configModule');
const content = require('./content.ejs');
const layout = require('layout');
const dirsConfig = config.DIRS;

const renderData = Object.assign({}, dirsConfig, {content});
module.exports = layout.init({
  pageTitle: '产品中心',
}).run(content(renderData));

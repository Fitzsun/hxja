const config = require('configModule');
const content = require('./content.ejs');
const layout = require('layout');
const dirsConfig = config.DIRS;

const renderData = Object.assign({}, dirsConfig, {content});
module.exports = layout.init({
  pageTitle: '甲醛治理',
}).run(content(renderData));

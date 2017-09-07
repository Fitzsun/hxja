const config = require('configModule');
const content = require('./content.ejs');
const layout = require('layout');
// const publicDir = require('publicDir');
const dirsConfig = config.DIRS;

const renderData = Object.assign({}, dirsConfig, { content });
module.exports = layout.init({
  pageTitle: '华夏君安',
}).run(content(renderData));

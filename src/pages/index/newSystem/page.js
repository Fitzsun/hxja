//  html.js文件只用来组装html,css,js统一在page.js中require()
require('cp');
// require('./content.ejs');
require('./page.less');
const config = require('configModule');

$(() => {
  /* global IS_PRODUCTION:true */ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
  if (!IS_PRODUCTION) {
    console.log('如果你看到这个Log，那么这个版本实际上是开发用的版本');
    console.log(config.API_ROOT);
  }
  $(document).ready(function() {
    // when pages load
    $('.tab-content').hide();
    $('.list-tabs li:first').addClass('active');
    $('.tab-content:first').show();

    // event click
    $('.list-tabs li').click(function() {
      $('.list-tabs li').removeClass('active');
      $(this).addClass('active');
      // var index = $(this).index();
      $('.tab-content').hide();
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).fadeIn();
      // $(this).parent().next().next().children().eq(index).show().siblings().hide();
      return false;
    });
  });
});

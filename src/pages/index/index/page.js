//  html.js文件只用来组装html,css,js统一在page.js中require()
require('cp');
require('lessDir/sprite.css');
require('./page.less');
const config = require('configModule');

$(() => {
  /* global IS_PRODUCTION:true */ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
  if (!IS_PRODUCTION) {
    console.log('如果你看到这个Log，那么这个版本实际上是开发用的版本');
    console.log(config.API_ROOT);
  }

  // 让carousel-inner居中显示
  // 利用js读取屏幕尺寸
  function cc() {
    var cf = document.body.clientWidth;
    if (cf <= 1920) {
      cf = -(1920 - cf) / 2;
    } else if (cf > 1920) {
      cf = (cf - 1920) / 2;
    }
    $('.bd').css({marginLeft: cf});
  }
  cc();
  // document.getElementsByClassName('bd')[0].style.marginLeft = cf;

  // alert(cf);

  var i = 0;
  var timer = null;
  var firstimg = $('.carousel-inner li').first().clone(); // 复制第一张图片
  $('.carousel-inner').append(firstimg).width($('.carousel-inner li').length * ($('.carousel-inner img').width())); // 将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
  // 下一个按钮
  $('.next').click(function() {
    i++;
    if (i === $('.carousel-inner li').length) {
      i = 1; // 这里不是i=0
      $('.carousel-inner').css({left: 0}); // 保证无缝轮播，设置left值
    };
    $('.carousel-inner').stop().animate({left: -i * 1920}, 300);
    if (i === $('.carousel-inner li').length - 1) { // 设置小圆点指示
      $('.carousel-indicator li').eq(0).addClass('active').siblings().removeClass('active');
    } else {
      $('.carousel-indicator li').eq(i).addClass('active').siblings().removeClass('active');
    }
  });
  // 上一个按钮
  $('.prev').click(function() {
    i--;
    if (i === -1) {
      i = $('.carousel-inner li').length - 2;
      $('.carousel-inner').css({left: -($('.carousel-inner li').length - 1) * 600});
    }
    $('.carousel-inner').stop().animate({left: -i * 1920}, 300);
    $('.carousel-indicator li').eq(i).addClass('active').siblings().removeClass('active');
  });
  // //设置按钮的显示和隐藏
  // $('.banner').hover(function(){
  // $('.btn').show();
  // },function(){
  // $('.btn').hide();
  // })
  // 鼠标划入圆点
  $('.carousel-indicator li').mouseover(function() {
    var _index = $(this).index();
    $('.carousel-inner').stop().animate({left: -_index * 1920}, 150);
    $('.carousel-indicator li').eq(_index).addClass('active').siblings().removeClass('active');
  });
  // 定时器自动播放
  timer = setInterval(function() {
    i++;
    if (i === $('.carousel-inner li').length) {
      i = 1;
      $('.carousel-inner').css({left: 0});
    };
    $('.carousel-inner').stop().animate({left: -i * 1920}, 300);
    if (i === $('.carousel-inner li').length - 1) {
      $('.carousel-idicator li').eq(0).addClass('active').siblings().removeClass('active');
    } else {
      $('.carousel-idicator li').eq(i).addClass('active').siblings().removeClass('active');
    }
  }, 1000);
  // 鼠标移入，暂停自动播放，移出，开始自动播放
  $('.carousel-container').hover(function() {
    clearInterval(timer);
  }, function() {
    timer = setInterval(function() {
      i++;
      if (i === $('.carousel-inner li').length) {
        i = 1;
        $('.carousel-inner').css({left: 0});
      };
      $('.carousel-inner').stop().animate({left: -i * 1920}, 300);
      if (i === $('.carousel-inner li').length - 1) {
        $('.carousel-idicator li').eq(0).addClass('active').siblings().removeClass('active');
      } else {
        $('.carousel-idicator li').eq(i).addClass('active').siblings().removeClass('active');
      }
    }, 1000);
  });
});

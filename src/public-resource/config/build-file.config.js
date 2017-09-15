require('!!file-loader?name=index.html!../../index.html');
module.exports = {
  js: {
    html5shiv: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/ie-fix/html5shiv.min.js'),
    respond: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/ie-fix/respond.min.js'),
    jquery: require('!!file-loader?name=static/js/[name].[ext]!jquery/dist/jquery.min.js'),
    cssslidy: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/cssslidy.js'),
  },
  images: {
    // 'login-bg': require('!!file-loader?name=static/images/[name].[ext]!../imgs/login-bg.jpg'),
    'slogan': require('!!file-loader?name=static/images/[name].[ext]!../imgs/header/slogan.png'),
    'enSlogan': require('!!file-loader?name=static/images/[name].[ext]!../imgs/footer/en-slogan.png'),
    'contactLogo': require('!!file-loader?name=static/images/[name].[ext]!../imgs/footer/contact-logo.png'),
    'contactCode': require('!!file-loader?name=static/images/[name].[ext]!../imgs/footer/contact-code.jpg'),
    'index-bg': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/banner.jpg'),
    'air-test': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/airTest.png'),
    'formaldehyde': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/Formaldehyde.png'),
    'newsystem': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/newSystem.png'),
    'product1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/product1.png'),
    'product2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/product2.png'),
    'product3': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/product3.png'),
    'product4': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/product4.png'),
    'smbanner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/smbanner.png'),
    'case1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/case1.jpg'),
    'case2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/case2.jpg'),
    'case3': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/case3.jpg'),
    'case4': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/case4.jpg'),
    'case5': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/case5.jpg'),
    'honor1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/honor1.jpg'),
    'honor2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/honor2.jpg'),
    'honor3': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/honor3.jpg'),
    'honor4': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/honor4.jpg'),
    'honor5': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/honor5.jpg'),
    'advantage1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/advantage1.png'),
    'advantage2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/advantage2.png'),
    'advantage3': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/advantage3.png'),
    'advantage4': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/advantage4.png'),
    'news-carousel1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/index/newsCarousel1.jpg'),
    'carInner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/treatment/carInner.png'),
    'roomInner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/treatment/roomInner.png'),
    'danger': require('!!file-loader?name=static/images/[name].[ext]!../imgs/treatment/danger.png'),
    'process': require('!!file-loader?name=static/images/[name].[ext]!../imgs/treatment/process.png'),
    'trBanner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/treatment/banner.jpg'),
    'sysBanner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/newBanner.jpg'),
    'sysBrand': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/brand.png'),
    'sysFocus': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/focus.png'),
    'sysAdvanced': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/advanced.png'),
    'sysAfterService': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/afterService.png'),
    'sysProduct1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/product1.jpg'),
    'sysFog': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/fog.jpg'),
    'sysLoveStudent': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/loveStudent.jpg'),
    'sysLoveStuff': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/loveStuff.jpg'),
    'sysLoveOlder': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/loveOlder.jpg'),
    'sysLovePregnant': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/lovePregnant.jpg'),
    'sysLoveBaby': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/loveBaby.jpg'),
    'sysLoveBg': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newSystem/loveBg.png'),
    'testBanner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/airTest/testBanner.jpg'),
    'testDesc': require('!!file-loader?name=static/images/[name].[ext]!../imgs/airTest/desc.png'),
    'testStandard1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/airTest/standard1.jpg'),
    'testStandard2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/airTest/standard2.jpg'),
    'testStandard3': require('!!file-loader?name=static/images/[name].[ext]!../imgs/airTest/standard3.jpg'),
    'testStandard4': require('!!file-loader?name=static/images/[name].[ext]!../imgs/airTest/standard4.jpg'),
    'proBanner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/productCenterDetail/proBanner.jpg'),
    'proDetailDesc': require('!!file-loader?name=static/images/[name].[ext]!../imgs/productCenterDetail/proDesc.jpg'),
    'proDetailShow': require('!!file-loader?name=static/images/[name].[ext]!../imgs/productCenterDetail/proShow.png'),
    'proDetailSubmit': require('!!file-loader?name=static/images/[name].[ext]!../imgs/productCenterDetail/proSubmit.png'),
    'proProduct1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/productCenter/product1.jpg'),
    'proProduct2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/productCenter/product2.jpg'),
    'proProduct3': require('!!file-loader?name=static/images/[name].[ext]!../imgs/productCenter/product3.jpg'),
    'succBanner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/success/succBanner.jpg'),
    'succCase1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/success/succCase1.jpg'),
    'succCase2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/success/succCase2.jpg'),
    'succCase3': require('!!file-loader?name=static/images/[name].[ext]!../imgs/success/succCase3.jpg'),
    'succCase4': require('!!file-loader?name=static/images/[name].[ext]!../imgs/success/succCase4.jpg'),
    'succCase5': require('!!file-loader?name=static/images/[name].[ext]!../imgs/success/succCase5.jpg'),
    'succCase6': require('!!file-loader?name=static/images/[name].[ext]!../imgs/success/succCase6.jpg'),
    'news1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newsCenter/news1.jpg'),
    'news2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newsCenter/news2.jpg'),
    'newsBanner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newsCenter/newsBanner.jpg'),
    'asideLogo': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newsCenterDetail/asideLogo.jpg'),
    'workHard': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newsCenterDetail/workhard.png'),
    'newsDetail': require('!!file-loader?name=static/images/[name].[ext]!../imgs/newsCenterDetail/newsDetail.jpg'),
    'auBanner': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auBanner.jpg'),
    'auBg': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auBg.png'),
    'auGoal': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auGoal.png'),
    'auIdea': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auIdea.png'),
    'auMission': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auMission.png'),
    'auSpirit': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auSpirit.png'),
    'auIntro': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auIntro.png'),
    'auIntro1': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auIntro1.png'),
    'auIntro2': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auIntro2.png'),
    'auIntro3': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auIntro3.png'),
    'auButton': require('!!file-loader?name=static/images/[name].[ext]!../imgs/aboutUs/auButton.png'),
  },
  // dll: {
  //   js: require('!!file-loader?name=dll/dll.js!../../dll/dll.js'),
  //   css: require('!file-loader?name=dll/dll.css!../../dll/dll.css'),
  // },
};

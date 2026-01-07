

 //logoの表示
 $(window).on('load',function(){
   $("#loading").delay(1500).fadeOut('slow');//ローディング画面表示後1.5秒（1500ms）待機してからフェードアウト
   $("#splash_logo").delay(1200).fadeOut('slow');//ロゴ表示後1.2秒（1200ms）待機してからフェードアウト



  // setTimeout... 一定時間あとに処理を実行する ここでは1500
 setTimeout(function () {
     $('#site-wrapper').addClass('is-color');
   }, 1500); // loadingが消えるタイミングと合わせる
 });



console.log('ok')

$(function(){
  // .drawer-btnをclickすると
    $('.drawer-btn').on('click',function(){

  //  クリックされたこのボタン自身に active がついていたら
  if($(this).hasClass('active')) {
$(this).removeClass('active');
$('.drawer-nav').removeClass('open');

// そうじゃなければ　activeがついていなければ
    }else{
      $(this).addClass('active'); 
      $('.drawer-nav').addClass('open'); 
    }

    });


});









// thisがなくても動くのは動く
// でもhtmlが修正されてbtnが複数になればthisが必要
// thisがあったほうが拡張性も高く将来的にも安心
// バグを防ぐ
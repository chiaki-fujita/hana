console.log('ok');



 //全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
 // a[href*="#"]→ href 属性に  が含まれる <a> タグ
$('#page-link').on('click', 'a[href*="#"]',function () { 
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
    // pos の位置まで 0.5秒かけて移動
    //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	$('body,html').animate({scrollTop: pos}, 500); 
    // aタグの初期設定の無効化
	 return false;  
});





// ページ内リンクを取得
// const links = document.querySelectorAll('a[href*="#"]');

//links.forEach(link => {
 // link.addEventListener('click', function(e) {
//   return false; は e.preventDefault()で代用
//    e.preventDefault(); // デフォルトのジャンプを止める
//     const elmHash = this.getAttribute('href'); // href属性を取得
//    const target = document.querySelector(elmHash); // 移動先の要素
//    if (!target) return; // 要素が存在しなければ終了

//    const pos = target.offsetTop; // 上からの位置を取得

//    // スムーズスクロール
//    window.scrollTo({
//      top: pos,
//      behavior: 'smooth' // これで滑らかにスクロール
//    });
//  });
// });

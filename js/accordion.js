

// 単純なon off切り替えならtoggleClassでok
// addClassやremoveClassがいい場合もある

$('.open-area').on('click', function() {
// スライドしながら表示されていれば → 閉じる　非表示なら → 開く
//  .slideToggle...開閉を自動で切り替えるメソッド
// next...直後にある兄弟要素
  $(this).next(".open-text").slideToggle();
// kariの中にあるアイコンを探す
// toggleClass...ON / OFF を切り替えるスイッチ
  $(this).find('.icon').toggleClass('close'); // ← icon に close を付与
});


// slideToggle...見た目の開閉アニメーション
// toggleClass...CSSの見た目切り替えスイッチ
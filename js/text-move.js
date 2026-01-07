

function BlurTextAnimeControl() {
	// .blurTrigger が付いた要素1つ1つに対して、「今その要素が画面内に入ったか？」をチェックする関数
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
        // .each() の中の this は 今処理している1つの要素
        // -50 → 少し早めにアニメーションを始めるための調整　 elemPos は アニメーション開始位置(変数)
		var elemPos = $(this).offset().top-50;
    //    今の スクロール量ページの一番上から、どれだけ下に来ているか
		var scroll = $(window).scrollTop();
        // 画面内に要素が入ったかどうかを判定するのに必要 ※ブラウザの 表示領域の高さ
		var windowHeight = $(window).height();
		
		// 「現在のスクロール位置が、 要素の位置 − 画面の高さ より下に来たら」　⇒　「要素が画面の一番下にちょうど触れる位置」
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}else{
		$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
		});
}



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	BlurTextAnimeControl();/* 上記で設定したアニメーション用の関数を呼ぶ*/
});

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	BlurTextAnimeControl();/* 上記で設定したアニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




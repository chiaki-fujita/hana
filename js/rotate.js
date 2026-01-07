

document.addEventListener('DOMContentLoaded', () => {
  // js-anim クラスを持つ要素を 全部取得
  const targets = document.querySelectorAll('.js-anim');

  // IntersectionObserver... 要素が画面に入ったかどうかを監視する仕組み スクロールイベントより軽い
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // entry.isIntersecting... 画面内に入ったら true trueのみのif文
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  }, {
    // 要素の35％が画面に見えたら反応　※0〜1の範囲で指定
    threshold: 0.35
  });

  // 取得したすべての要素をIntersectionObserver で 監視スタート
  // forEach...1つずつ順番に処理する
  // e1...今処理している 1つの要素 名前はなんでもいい
   targets.forEach(el => observer.observe(el));
});

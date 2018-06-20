// ページ内移動をするリンクの取得
const links = document.querySelectorAll('a[href^="#"]')

// 取得したリンクに対して
links.forEach(link => {
  // リンク先の要素の取得
  const targetId = link.getAttribute('href').slice(1)
  const target = document.getElementById(targetId)
  // 無かったら中断
  if (!target) { return }
  // リンクがクリックされた時
  link.addEventListener('click', e => {
    // リンクをクリックした時のデフォルトの挙動を無効化
    e.preventDefault()
    // スクロールアニメーションする
    scrollTo(target, -30)
  })
})

/**
 * targetまでアニメーションしながらスクロールする
 * offsetを指定するとその分だけ多めに下にスクロールする
 * @param {HTMLElement} target 
 * @param {number} offset 
 */
const scrollTo = (target, offset) => {
  anime({
    targets: { scroll: window.scrollY },
    scroll: target.offsetTop + offset,
    // アニメーション時間 (ミリ秒)
    duration: 400,
    // アニメーションの動きの種類 (http://animejs.com/documentation/#penner)
    easing: 'easeInOutQuart',
    run: (a) => {
      window.scrollTo(0, a.animations[0].currentValue)
    },
  })
}

// より厳格なエラーチェックを行う宣言
'use strict'

addEventListener('load',() => {
  //定数gameに、あなたはゲームですよ、と教える
  const game = new Game();

  //gameに、ゲームをスタートして、とお願いする
	game.start(1136, 640);
})
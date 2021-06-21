// より厳格なエラーチェックを行う宣言
'use strict'

addEventListener('load',() => {
  //定数gameに、あなたはゲームですよ、と教える
  const game = new Game();

  //変数yamadaに、あなたは山田先生のスプライト画像ですよ、と教える
	const yamada = new Sprite( 'img/yamada.png' );
	//gameに、山田先生のスプライト画像を表示して、とお願いする
	game.add( yamada );

  
  //gameに、ゲームをスタートして、とお願いする
	game.start(1136, 640);
})
// より厳格なエラーチェックを行う宣言
'use strict'

addEventListener('load',() => {
  //定数gameに、あなたはゲームですよ、と教える
  const game = new Game();

  const WALKING_SPEED = 4;
  //変数yamadaに、あなたは山田先生のスプライト画像ですよ、と教える
	const yamada = new Sprite( 'img/yamada.png' );

//常に呼び出される
// 変数yamadaはスプライトだから、スプライトクラスのメソッドを使える。
// スプライトクラスで何も書かれていなかったonenterframをここでオーバーライドする。
yamada.onenterframe = () => {
  //キーが押されたとき、山田先生が移動する
  if(game.input.left)yamada.x -= WALKING_SPEED;
  if (game.input.right) yamada.x += WALKING_SPEED;
  if (game.input.up) yamada.y -= WALKING_SPEED;
  if (game.input.down) yamada.y += WALKING_SPEED;
}

	//gameに、山田先生のスプライト画像を表示して、とお願いする
	game.add( yamada );

  
  //gameに、ゲームをスタートして、とお願いする
	game.start(1136, 640);
})
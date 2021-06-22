// より厳格なエラーチェックを行う宣言
'use strict'

addEventListener('load',() => {
  //Gameインスタンス作成
  const game = new Game();
  //キャラクターの歩く速さ
  const WALKING_SPEED = 4;

  //Sceneインスタンス作成
  const scene = new Scene();


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
  //sceneに、山田先生のスプライト画像を追加して、とお願いする
  // sceneにスプライトyamadaを追加
  scene.add(yamada);

  //gameに、シーンを追加して、とお願いする
  // 29行目のsceneをgameに追加
  game.add(scene);

  
  //gameに、ゲームをスタートして、とお願いする
	game.start(1136, 640);
})
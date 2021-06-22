// より厳格なエラーチェックを行う宣言
'use strict'

addEventListener('load',() => {
  //Gameインスタンス作成
  const game = new Game();

  //マップの作成
	const map = [
		[11,11,11,11,11,11,11,11,11,11],
		[11,10,10,10,10,10,10,10,10,11],
		[11, 4, 4, 4, 4, 4, 4, 4, 4,11],
		[11, 4,11, 4, 4,11,11,11, 4,11],
		[11, 4,11,11,11,11,10,10, 4,11],
		[11, 4,11,10,10,11, 4, 4, 4,11],
		[11, 4,11, 4, 4,11,11,11, 4,11],
		[11, 4, 9, 4, 4, 9,10,11, 4,11],
		[11, 4, 4, 4, 4, 4, 4,11, 4,11],
		[11,11,11,11,11,11,11,11,11,11]
	];

  //キャラクターの歩く速さ
  const WALKING_SPEED = 4;

  //Sceneインスタンス作成
  const scene = new Scene();

  // Tilemapのインスタンス生成
  const tilemap = new Tilemap('img/tile.png');
  //tilemap.dataに、どんなマップなのか教える
  tilemap.data = map;
  //マップを登録する
  scene.add(tilemap);

  //変数yamadaに、あなたは山田先生のスプライト画像ですよ、と教える
	const yamada = new Sprite( 'img/yamada.png' );


  //sceneに、山田先生のスプライト画像を追加して、とお願いする
  //sceneにスプライトyamadaを追加
  scene.add(yamada);

  //常に呼び出される
  // 変数yamadaはスプライトだから、スプライトクラスのメソッドを使える。
  // スプライトクラスで何も書かれていなかったonenterframをここでオーバーライドする。
  scene.onenterframe = () => {
    //キーが押されたとき、山田先生が移動する
    if(game.input.left)yamada.x -= WALKING_SPEED;
    if (game.input.right) yamada.x += WALKING_SPEED;
    if (game.input.up) yamada.y -= WALKING_SPEED;
    if (game.input.down) yamada.y += WALKING_SPEED;
  }
  

  //gameに、シーンを追加して、とお願いする
  //29行目のsceneをgameに追加
  game.add(scene);

  
  //gameに、ゲームをスタートして、とお願いする
	game.start();
})
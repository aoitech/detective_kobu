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

  //タイルのサイズ
  const TILE_SIZE = 32;

  //キャラクターの歩く速さ
  const WALKING_SPEED = 4;

  //Sceneインスタンス作成
  const scene = new Scene();

  // Tilemapのインスタンス生成
  const tilemap = new Tilemap('img/tile.png');
  //tilemap.dataに、どんなマップなのか教える
  tilemap.data = map;
  //マップ全体の位置をずらす
  tilemap.x = TILE_SIZE * 4 - TILE_SIZE / 2;
  tilemap.y = TILE_SIZE * 3 - TILE_SIZE / 2;

  //マップを登録する
  scene.add(tilemap);

  //定数yamadaに、あなたは山田先生のスプライト画像ですよ、と教える
	const yamada = new Tile('img/yamada.png');
  //山田先生を画面の中央に配置
  yamada.x = yamada.y = TILE_SIZE * 5 - TILE_SIZE / 2;

  //sceneに、山田先生のタイルを追加して、とお願いする
  tilemap.add(yamada);

  //ループから常に呼び出される
  //変数yamadaはスプライトだから、スプライトクラスのメソッドを使える。
  //スプライトクラスで何も書かれていなかったonenterframをここでオーバーライドする。
  scene.onenterframe = () => {
    //タイルマップの移動速度に0を代入する(ずっと移動するのを防ぐため)
    // 最初に0を代入→キー入力があった時のみ移動速度を代入する
		tilemap.vx = tilemap.vy = 0;
    //キーが押されたとき、山田先生（マップ）が移動する
    if(game.input.left) tilemap.vx = WALKING_SPEED;
    if (game.input.right) tilemap.vx = -1 * WALKING_SPEED;
    if (game.input.up) tilemap.vy = WALKING_SPEED;
    if (game.input.down) tilemap.vy = -1 * WALKING_SPEED;
  }
  

  //gameに、シーンを追加して、とお願いする
  //29行目のsceneをgameに追加
  game.add(scene);

  
  //gameに、ゲームをスタートして、とお願いする
	game.start();
})
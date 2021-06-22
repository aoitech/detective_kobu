// ゲームエンジン作成用ファイル

// より厳格なエラーチェックを行う宣言
'use strict'

// ゲーム作りの基本となるクラス
class Game {
  // 引数width,heightはゲームの横・縦幅
  // constructorはclassが使われるときに実行される。初期化するためのメソッド。
  // constructorでcanvasを使うための準備をする。
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.canvas.width = width || 320;
    this.canvas.height = height || 320;

    //ゲームに登場する全てのもの（オブジェクト）を入れるための配列
    this.objs = [];

    //ゲームに使用するキーと、そのキーが押されているかどうかを入れるためのハッシュ
		//例 { up: false, down: false }
    this.input = {};
    //登録されたキーに割り当てられたプロパティ名と、キー名を関連づけるためのハッシュ
		//例 { up: "ArrowUp", down: "ArrowDown" }
    this._keys = {};
  }

// startメソッドを呼び出してメインループ開始
start() {
  //デフォルトのキーバインドを登録する（使いたいキーを登録する）
  this.keybind('up','ArrowUp')
  this.keybind('down', 'ArrowDown');
  this.keybind('right', 'ArrowRight');
  this.keybind('left', 'ArrowLeft');

  this._mainLoop();
  //イベントリスナーをセットする
  this._setEventListener();
}

_setEventListener() {
  //なにかキーが押されたときと、はなされたときに呼ばれる
  const _keyEvent = e => {
    e.preventDefault();
    //_keysに登録された数だけ繰り返す
    for (let key in this._keys) {
      //イベントのタイプによって呼び出すメソッドを変える
      // switchはほぼif文と同義
      switch(e.type) {
        case 'keydown' :
          //押されたキーが、登録されたキーの中に存在するとき、inputのそのキーをtrueにする
          if (e.key === this._keys[key]) this.input[key] = true;
          break;
        case 'keyup' :
          //押されたキーが、登録されたキーの中に存在するとき、inputのそのキーをfalseにする
          if(e.key === this._keys[key]) this.input[key] = false;
          break;
      }
    }
  }
  // スクロールする時、登録されたすべてのイベントの中にpreventdefault();がないかを確認するまで、JSが止まる。
  // →遅延が発生し、スクロール時のパフォーマンスが下がる。これがスクロールジャンク。
  // passiveという引数をtrueにすることで、「リスナーで登録されたpreventDefault();は一切実行しない」という宣言ができる
  // 今回はpreventDefault使うのでfalseにする。

  //なにかキーが押されたとき
  addEventListener('keydown', _keyEvent, { passive: false})
  //キーがはなされたとき
  addEventListener('keyup', _keyEvent, { passive: false });
}

// _から始まるのはprivateの意。
_mainLoop() {
  // getContextはキャンパスに描画するためのオブジェクト(コンテキスト)を取得するメソッド
  // 2dは2次元グラフィックのコンテキストを取得
  // コンテキストはcanvasに絵を描く画家のイメージ
  const ctx = this.canvas.getContext('2d')
  // fillStyleはcanvasで図形の内側を塗りつぶすために色などを指定できる
  ctx.fillStyle = '#000000';
  //塗りつぶしの四角形を描く際に使用。左上から、画面のサイズまでを、塗りつぶす。
  ctx.fillRect( 0,0,this.canvas.width,this.canvas.height );

  //ゲームに登場する全てのもの（オブジェクト）の数だけ繰り返す
  // 第一引数はカウンター変数を初期化するため、第二引数はループの処理前に評価され、trueならfor内が実行される
  // 第三引数はループ後に変数を1ずつ増加
  for ( let i = 0; i<this.objs.length; i++) {
    //スプライトやテキストなど、すべてのオブジェクトのupdateメソッドを呼び出す
    // this.objs[i].updateでsprite.jsのSpriteクラスのupdateメソッドを呼び出している
    this.objs[i].update(this.canvas);
  }

  // bindは引数にthisを指定して振る舞いを変える事ができる
  requestAnimationFrame(this._mainLoop.bind(this));
}

// オブジェクトをゲームに追加できるようになる、addメソッドを作成
// 引数obj : 追加したいオブジェクト
add(obj) {
  this.objs.push(obj);
}

}
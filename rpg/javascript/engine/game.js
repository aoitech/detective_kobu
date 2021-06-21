// ゲームエンジン作成用ファイル

// より厳格なエラーチェックを行う宣言
'use strict'

// ゲーム作りの基本となるクラス
class Game {
  // 引数width,heightはゲームの横・縦幅
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.canvas.width = width || 320;
    this.canvas.height = height || 320;
  }

// startメソッドを呼び出してメインループ開始
start() {
  this._mainLoop();
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

  // bindは引数にthisを指定して振る舞いを変える事ができる
  requestAnimationFrame(this._mainLoop.bind(this));
}

}
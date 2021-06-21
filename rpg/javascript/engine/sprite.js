// スプライト=画像を動かす仕組みのこと
'use strict'

class Sprite {
  constructor(img) {
    //this.imgに、あなたは画像ですよ、と教える
    //new Imageで新たなimg要素を作成
    this.img = new Image();
    //this.img.srcに画像ファイルまでのパスを代入
    this.img.src = img;
    //画像の初期位置
    this.x = this.y = 0;
  }


  // Gameクラスのメインループからずっと呼び出され続ける。
  // 引数canvasは描画のための紙(キャンパス)

  // updateメソッドはスプライトの表示や移動のような、常に更新こうしんしたいものを作る。
  udpate(canvas) {
    //画像などを画面に表示するためのメソッドを呼び出す
    // スプライトを表示するプログラムをかいている。
    this.render(canvas);
  }
}
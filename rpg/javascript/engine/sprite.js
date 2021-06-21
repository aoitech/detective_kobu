// スプライト=画像を動かす仕組みのこと
'use strict'

class Sprite {
  // 引数
	//  * img : 画像ファイルまでのパス
	//  * width : 画像の表示する範囲（横幅）
	//  * height : 画像の表示する範囲（縦幅）
  constructor(img) {
    //this.imgに、あなたは画像ですよ、と教える
    //new Imageで新たなimg要素を作成
    this.img = new Image();
    //this.img.srcに画像ファイルまでのパスを代入
    this.img.src = img;
    //画像の初期位置
    this.x = this.y = 0;
  }


  // Gameクラスのメインループからずっと呼び出される。
  // 引数canvasは描画のための紙(キャンパス)
  // updateメソッドはスプライトの表示や移動のような、常に更新したいものを作る。
  update(canvas) {
    //画像などを画面に表示するためのメソッドを呼び出す
    // スプライトを表示するプログラムをかいている。
    this.render(canvas);
  }

  render(canvas) {
    //画家さん（コンテキスト）を呼ぶ
    const _ctx = canvas.getContext('2d');
    //画家さんに、絵を描いてとお願いする
    // drawImageは使用範囲を指定してイメージを描画する
    _ctx.drawImage(this.img,this.x,this.y);
  }
}
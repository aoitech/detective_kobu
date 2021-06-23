// スプライト=画像を動かす仕組みのこと
'use strict'

class Sprite {
  // 引数
	//  * img : 画像ファイルまでのパス
	//  * width : 画像の表示する範囲（横幅）
	//  * height : 画像の表示する範囲（縦幅）
  constructor(img,width,height) {
    //this.imgに、あなたは画像ですよ、と教える
    //new Imageで新たなimg要素を作成
    this.img = new Image();
    //this.img.srcに画像ファイルまでのパスを代入
    this.img.src = img;
    //画像の初期位置
    this.x = this.y = 0;


    //画像表示の幅を指定
    //画像を表示する範囲の横幅。引数widthが指定されていない場合、this.widthに32を代入
		this.width = width || 32;
		//画像を表示する範囲の縦幅。引数heightが指定されていない場合、this.heightに32を代入
		this.height = height || 32;
		//12個の画像があった場合に何番目の画像を表示するか。
    //frameはスプライトに設定されているフレームを示す
		this.frame = 0;
    //数値によってスプライトを移動させることができる（移動速度）
    // ここでしていることは移動速度のプロパティの初期化
    this.vx = this.vy = 0;
  }


  // Gameクラスのメインループからずっと呼び出される。
  // 引数canvasは描画のための紙(キャンパス)
  // updateメソッドはスプライトの表示や移動のような、常に更新したいものを作る。
  update(canvas) {
    //画像などを画面に表示するためのメソッドを呼び出す
    // スプライトを表示するプログラムをかいている。
    this.render(canvas);
    //スプライトを動かしたり、なにかのきっかけでイベントを発生させたりするために使うメソッドを呼び出す
    this.onenterframe();
    //スプライトを移動する
    // スプライトの座標に移動速度を足す
    this.x += this.vx;
    this.y += this.vy;
  }

  render(canvas) {
    //キャンバスの外にスプライトがあるとき、ここでこのメソッドを終了する
    if (this.x < -1 * this.width || this.x > canvas.width) return;
    if (this.y < -1 * this.height || this.y > canvas.height) return;

    //X,Y方向に、何番目の画像か
    const _frameX = this.frame % (this.img.width /this.width);
    // ~~は小数点切り捨ての意味。
    const _frameY = ~~(this.frame / (this.img.width /this.width ) );
    
    //画家さん（コンテキスト）を呼ぶ
    const _ctx = canvas.getContext('2d');
    //画家さんに、絵を描いてとお願いする
    // drawImageは使用範囲を指定してイメージを描画する
    _ctx.drawImage(
      this.img,
			this.width * _frameX,
			this.height * _frameY,
			this.width,
			this.height,
			this.x,
			this.y,
			this.width,
			this.height
      );
  }
  // 常に呼び出され、スプライトの移動やイベントの発生などに使うメソッド。空なのはオーバーライドして使うため。
  onenterframe() {};
}
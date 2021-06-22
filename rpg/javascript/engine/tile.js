'use strict'

//Spriteクラスの継承
class Tile extends Sprite {
  // 引数
	//  * img : 画像ファイルまでのパス
	//  * size : タイルの大きさ

  // Spriteは3つの引数があったが、タイルのため、正方形だけを表示できるようにしている。
  constructor(img,size) {
    //親クラス(Spriteクラス)のコンストラクタを呼び出す
    super(img,size,size);
    //引数sizeが指定されていない場合、this.sizeに32を代入
    this.size = size || 32;
  }
}
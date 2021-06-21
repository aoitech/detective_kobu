// ゲームエンジン作成用ファイル

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
}
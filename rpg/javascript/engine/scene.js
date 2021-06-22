class Scene {
  constructor() {
    this.objs = [];
  }

  // シーンにオブジェクトを追加するときに呼び出されるメソッド
  // 引数
	//  * obj : スプライトやテキストなど（オブジェクト）
  add(obj) {
    this.objs.push(obj);
  }

  // Gameクラスのメインループからずっと呼び出され続ける
  // 引数
	//  * canvas : 紙（キャンバス）
  
  // ここで23行目のonenterframeメソッドを呼び出す
  update(canvas) {
    //スプライトを動かしたり、なにかのきっかけでイベントを発生させたりするために使うメソッドを呼び出す
    this.onenterframe();
  }
  
  // 常に呼び出され、スプライトの移動やイベントの発生などに使うメソッド。空なのはオーバーライドして使うため
  onenterframe() {}
}
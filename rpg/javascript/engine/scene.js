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
}
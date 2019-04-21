'use strict';

{
  // クラス

  class Player {
  // 初期化処理をし、名前を与える
    constructor(name, score) { // メソッド
      this.name = name;
      this.score = score;
    }
// 設定することで中身を見ることができる
    showInfo() {
      console.log(`name: ${this.name} score: ${this.score}`);
    }
// インスタンスせず直接呼び出せる
    static showVersion() {
      console.log('Player class ver. 1.0');
    }
  }
// 設定したクラスに入ってインスタンス（オブジェクト）になる
  const taguchi = new Player('taguchi', 32);
  const fkoji = new Player('fkoji', 44);

  // console.log(taguchi.name);
  // taguchi.showInfo();
  // fkoji.showInfo();
// 直接呼び出す
  Player.showVersion();

}

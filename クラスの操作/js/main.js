'use strict';

{
  // クラス
// オブジェクトを個別ではなくクラスにする
  // const taguchi = {
  //   name: 'taguchi',
  //   score: 32,
  // };
  // const fkoji = {
  //   name: 'fkoji',
  //   score: 44,
  // };

  class Player {
    // 初期化処理　変数を与える
    constructor(name, score) { // メソッド
      // このインスタンス（this）のnameプロパティは初期化された
      // nameである
      this.name = name;
      this.score = score;
    }
  }

}

'use strict';

{
  // オブジェクト
  //プロパティ（キーと値）を設定することでオブジェクトになる

  const player = {
    name: 'taguchi',
    score: 32,
  };
  // オブジェクト名とキーを取りだす
  // console.log(player.name);
  // console.log(player['name']);
// 指定して書き換える（値の変更であるため定数でも可能）
  // player.score = 100;
  // console.log(player);
// オブジェクト名にキーと値を与えることで追加できる
  // player.email = 'taguchi@gmail.com';
  // console.log(player);

  delete player.score;
  console.log(player);

}

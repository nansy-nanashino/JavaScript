'use strict';

// 関数
//関数に変数を持たせる
function showAd(message = 'AD') { // 仮引数
  console.log('----------');
  console.log(`--- ${message} ---`);
  console.log('----------');
}
//関数を呼び出す
//変数に代入
showAd('Header AD'); // 実引数
console.log('Tom is great!');
console.log('Bob is great!');
// showAd('AD');

//初期値として設定した値を使って関数を呼び出す
showAd();
console.log('Steve is great!');
console.log('Rich is great!');
showAd('Footer Ad');
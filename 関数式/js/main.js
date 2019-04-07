'use strict';

// 関数
//代入されたものを処理し、それを返す
function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
}

// sum(1, 2, 3);
// sum(3, 4, 5);

//関数を呼び出しつつ、関数の変数に代入
const total = sum(1, 2, 3) + sum(3, 4, 5);
// const total = 6 + 12; // 18

console.log(total);
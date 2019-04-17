'use strict';

// Scope

{
  const a = 1;

  function f1() {
    const b = 2;
    console.log(b); // 2
    console.log(a); // 1
  }

  function f2() {
    const b = 3;
    console.log(b); // 3
    console.log(a); // 1
  }

  f1();
  f2();

  console.log(a); // 1　ブロックの外であるため有効
  console.log(b); // error　ブロック内でしたスコープされないためエラーになる
}

'use strict';

// for

for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  // console.log(i + ' hello');
  console.log(`${i} hello`);
}

// 通常のfor文
var sum = 0;
//var i =0で初期化;i<10で10以下まで繰り返す:i++一ずつ加える
for (var i = 0; i < 10; i++){
  sum += 2;
}

document.write("<p>2を10回加えた合計は" + sum + "</p>");

document.write("<p>");

// forの中にfor
//for1~9の中に1〜9をくわえる
//１に対して1〜９のfor処理されることになる
for (var i = 1; i <= 9; i++){
  for (var j = 1; j <= 9; j++){
    document.write(i + " × " + j + " = " + (i * j) + "<br />");
  }
}

document.write("</p>");


// fo...in...

var personal = {
  name:'加藤',
  old:28,
  address:'東京都',
  email:'katou@example.com'
}

document.write("<p>");
//オブジェクトの中に入っているプロパティを取り出す
//取り出す順番はランダム
for(var pname in personal){
  document.write(pname + " : " + personal[pname] + "<br />");
}

document.write("</p>");

// 必ず一回は実行する
// 実行してから分岐処理になる
var num = 1;

document.write("<p>");

do{
  document.write("num = " + num + "<br />");
  num *= 3;
}while (num < 50);

document.write("</p>");
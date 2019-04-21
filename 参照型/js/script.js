/* JavaScriptサンプル */
// 参照型と値型の違い
//参照型は別にメモリ領域を確保し場所を示しているため変えてしまうと参照しているすべての値が変わる
// 値型は複製のためもともとの値は変わらない

var object='神奈川';
var object1;
var object2='東京';
object1=object;
object1=object2;

document.write("<p>  object:" +  object+ "</p>");
document.write("<p>  object1:" +  object1+ "</p>");
document.write("<p>object2:" + object2 + "</p>");


var obj1;
obj1 = ['東京都', '大阪府', '北海道'];

var obj2;
obj2 = obj1;

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");

obj1[1] = '神奈川県';

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");

obj2[2] = '福岡県';

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");
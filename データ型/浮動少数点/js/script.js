// PCは小数点を認識できないがための対応
// JavaScriptでは浮動小数点処理しなくても処理できる

var n1 = 0.148;
// -3とすることで3桁下げている
var n2 = 2.4e-3;

document.write('<p>' + n1 + '</p>');
document.write('<p>' + n2 + '</p>');
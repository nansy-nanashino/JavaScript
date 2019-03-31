// Document Object Modelの略
// idのsampleを読み込んで「変更されましたに書き換える」書き換える
// html側にonClickでクリックした時に関数を実行させる
function change(){
    var val = document.getElementById("sample").innerHTML = "変更されました";
}

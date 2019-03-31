//あるノードを取得した後でそのノードの子ノードを取得するにはNodeインターフェースの「childNodes」プロパティを使う。
// 「childNodes」プロパティを使うと、対象のノードに含まれる全ての子ノードのノードの集合(NodeList)を返す
// NodeListから特定のノードを取り出すには配列の形式でインデックス番号を指定するか「item」メソッドを使う
// nodeの下にあるhildNodesの下にあるhildNodesの更に下にあるhildNodesへアクセス
function change(){
    var node = document.getElementsByTagName("body");
    node[0].childNodes[0].childNodes[0].childNodes[0].innerHTML = "変更しました";
}
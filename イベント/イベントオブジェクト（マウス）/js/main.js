'use strict';
// divを指定し取得
  const div = document.querySelector('div');
//mousemoveをイベントとして加えてマウスの座標を取得
  document.addEventListener('mousemove', e => {
    div.textContent = `${e.clientX}:${e.clientY}`;
  });


}
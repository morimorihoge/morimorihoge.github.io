function appendCircle(){
  // 1. id="modal"のElementオブジェクトを取得する
  let element = document.querySelector('#modal');
  // 2. 既存innerHTMLの後ろに○を繋げた文字列を新たなinnerHTMLとして設定する
  element.append('○');
}

function appendCross(){
  // 1. id="modal"のElementオブジェクトを取得する
  let element = document.querySelector('#modal');
  // 2. 既存innerHTMLの後ろに×を繋げた文字列を新たなinnerHTMLとして設定する
  element.append('×');
}
let sheetId = '1VwrGuz6_cJ-_M-qpjjCT1r6xIEyEFJw4omxdMJqNMsg';
let sheetName = 'summary';
let apiKey = 'AIzaSyDqV4k5Ygqa7SEtF30PRtvqXKlvRzdsvaE'; // only enabled in morimorihoge.github.io domain

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`).then(
    response => {
      return response.json();
    }
).then(
    json => {
      let counterElement = document.querySelector('#access-counter');
      let imgHtml = "";

      // 数値変換して1桁ずつIMGタグを作っていく
      let count = Number(json.values[1][1]);

      for (let i = 0; i < 8; i++) {
        // そのときのcountの1の位を抽出
        let digit = count % 10;
        imgHtml = `<img src="images/candle_number${digit}.png" alt="${digit}" class="counter">` + imgHtml;
        // 小数点の位置を1桁ずらして、小数点以下を消す
        count = Math.floor(count / 10);
      }

      // 出力
      counterElement.innerHTML = imgHtml;
    }
);

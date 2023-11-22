function doFetch() {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/1dDHlI3E-MrO6uMFMm0NUEkA0kbx-JrTnWnFNXFkjP3w/values/sheet1?key=AIzaSyCD62JukhZKvKAzLPZfXBx93CUQCqQ82b4`, {mode: 'cors'}).then(
      function (response) {
        return response.json();
      }
  ).then(
      function (json) {
        console.log(json);
        let answerText = "<ul>";

        // json.valuesが配列の配列になっている。
        // データ形式は以下
        // values: Array(7)
        // 0: (3) ["id", "name", "age"]
        // 1: (3) ["1", "ほげ", "12"]
        // 2: (3) ["2", "ふが", "41"]
        // ...
        json.values.forEach((data) => {
          // そのままだとヘッダ列が出てしまうので、ヘッダ列は表示しないようにする
          if (data[0] == "date") {
            return;
          }
          if (data[1] != "ほげ") {
            return;
          }
          answerText += `<li>${data[1]}さん：${data[2]}才</li>`;
        });
        answerText += "</ul>";
        let answerElement = document.querySelector("#answer");
        answerElement.innerHTML = answerText;
      }
  );
}


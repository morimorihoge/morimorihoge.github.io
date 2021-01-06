function doFetch() {
  let zipcodeElement = document.querySelector("#zipcode");

  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcodeElement.value}`, {mode: 'cors'}).then(
      function (response) {
        return response.json();
      }
  ).then(
      /** データ形式は以下の通り
       * {
	"message": null,
	"results": [
		{
			"address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		}
	],
	"status": 200
}
       * @param json
       */
      function (json) {
        console.log(json);
        let addressText = `${json.results[0].zipcode}: ${json.results[0].address1} ${json.results[0].address2} ${json.results[0].address3}`;
        let addressElement = document.querySelector("#answer");
        addressElement.innerHTML = addressText;
      }
  );
}


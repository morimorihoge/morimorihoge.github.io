fetch("https://zipaddress.net/?zipcode=7830060", {mode: 'cors'}).then(
    function (res) {
      console.log(res);
      return res.text();
    }
).then(
    function (json) {
      console.log(json);
      // let answerHtml = "";
      // document.querySelector("#answer").innerHTML = answerHtml;
    }
);

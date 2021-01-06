function doFetch() {
  fetch("https://morimorihoge.github.io/teu2020f/tweets.json").then(
      function (response) {
        return response.json();
      }
  ).then(
      function (json) {
        let answerHtml = "<ul>";
        json.forEach(
            (tweet) => {
              answerHtml += `<li>${tweet.name}</li>`;
            }
        );
        answerHtml += "</ul>";
        console.log(json);
        let answer = document.querySelector("#answer");
        answer.innerHTML = answerHtml;
      }
  );
}


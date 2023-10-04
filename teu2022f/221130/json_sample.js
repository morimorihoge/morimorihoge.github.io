fetch("https://morimorihoge.github.io/teu2022f/tweets.json")
    .then((response) => response.json())
    .then(
        function(json){
          let answerHtml = "";
          json.forEach(function(tweet){
            answerHtml += `<li>${tweet.name}</li>`;
          });
          document.querySelector("#answer").innerHTML = answerHtml
        }
    )
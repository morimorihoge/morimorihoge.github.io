fetch("http://morimorihoge.github.io/teu2019f/tweets.json").then(
    function(response){
      return response.json();
    }
).then(
    function(json){
      let answerHtml = "";
      json.forEach(function(tweet){
        answerHtml += `<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML = answerHtml;
    }
);

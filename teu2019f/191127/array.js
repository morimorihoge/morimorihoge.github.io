console.log("array.jsの読み込み");

function doCheckAnswers(){
  let input = document.querySelector("#input_string");
  let inputString = input.value;
  let output = document.querySelector("#answer");
  let answers = document.querySelectorAll("ul.answer-list li");
  let answersArray = Array.from(answers);

  let correct = false;
  answersArray.forEach(function(answer){
    answerString = answer.innerHTML;
    if(inputString == answerString){
      correct = true;
    }
  });

  if(correct){
    output.innerHTML = "正解";
  }else{
    output.innerHTML = "不正解";
  }
}

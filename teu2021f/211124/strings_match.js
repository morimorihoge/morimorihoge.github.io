function doCheckAnswers(){
  let input = document.querySelector("#input_string");
  let answer = document.querySelector("#answer");
  let answerNodeList = document.querySelectorAll(
      "ul.answer-list li"
  );
  let answers = Array.from(answerNodeList);
  answer.innerHTML = "";
  answers.forEach(function(liElement){
    if(input.value === liElement.innerHTML){
      answer.innerHTML = "正解";
    }
    console.log(
        `input_string: ${input.value}, li: ${liElement.innerHTML}`
    )
  });
  if(answer.innerHTML === ""){
    answer.innerHTML = "不正解";
  }
}

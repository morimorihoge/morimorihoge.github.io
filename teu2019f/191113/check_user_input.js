function checkUserInput(){
  let userInput = document.querySelector("#user_input").value;
  let result;
  if(userInput == "隣の客はよく柿食う客だ"){
    result = "○";
  }else{
    result = "☓";
  }

  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = result;
}

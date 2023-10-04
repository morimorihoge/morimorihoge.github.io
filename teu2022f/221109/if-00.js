function checkUserInput(){
  let userInput = document.querySelector("#user_input").value;
  let answer = document.querySelector("#answer");
  let message;
  if(userInput == "隣の客はよく柿食う客だ"){
    message = "○";
  }else{
    message = "×"
  }
  answer.innerHTML = message;
}
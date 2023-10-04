function checkAge(){
  let age = Number(document.querySelector("#age").value);
  let answer = document.querySelector("#answer");
  let message;

  if(age <= 0){
    message = "エラー";
  }else if(age < 20){
    message = "未成年";
  }else if(age < 65){
    message = "成人";
  }else{
    message = "高齢者";
  }

  answer.innerHTML = message;
}
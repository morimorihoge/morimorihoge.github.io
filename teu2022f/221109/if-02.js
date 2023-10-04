function checkYear(){
  let year = Number(document.querySelector("#year").value);
  let answer = document.querySelector("#answer");
  let message;

  if(year % 400 == 0){
    message = "閏年";
  }else if(year % 100 == 0){
    message = "平年";
  }else if(year % 4 == 0){
    message = "閏年";
  }else{
    message = "平年";
  }

  answer.innerHTML = message;
}

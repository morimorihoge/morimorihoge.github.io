function doFizzBuzz(){
  // iが1～100までのループ
  let i = 1;
  let answer = document.querySelector("#answer");
  while(i <= 100){
    let message = "";
    if(i % 3 === 0){
      message = message + "Fizz";
    }
    if(i % 5 === 0){
      message = message + "Buzz";
    }
    if(message === ""){
      message= i;
    }

    answer.innerHTML = `${answer.innerHTML} <br>${message}`;
    i++;
  }
}

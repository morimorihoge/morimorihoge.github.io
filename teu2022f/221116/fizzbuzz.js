function doFizzBuzz(){
  let answer = document.querySelector("#answer");
  let message = "";

  let i = 1;
  while(i <= 100){
    // 処理はここに書く
    if(i % 3 == 0 && i % 5 == 0){
      message += `FizzBuzz<br />`;
    }else if(i % 3 == 0){
      message += `Fizz<br />`;
    }else if(i % 5 == 0){
      message += `Buzz<br />`;
    }else{
      message += `${i}<br />`;
    }
    i++;
  }

  answer.innerHTML = message;
}
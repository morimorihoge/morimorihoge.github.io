function doLoop(){
  let answer = document.querySelector("#answer");

  let i = 0;
  let sum = 0;
  while(true){
    sum += i;
    if(sum >= 50000){
      break;
    }
    i++;
  }
  answer.innerHTML = i;
}

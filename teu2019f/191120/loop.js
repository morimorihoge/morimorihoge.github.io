console.log("whileの練習");

function doLoop(){
  console.log("実行ボタンが押された");
  let i = 0;
  let sum = 0;
  let answer = document.querySelector("#answer");

  while(i <= 100){
    answer.innerHTML = answer.innerHTML + "<br>" + i;
    i++;
  }
}

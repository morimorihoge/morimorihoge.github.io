function checkYear(){
  let year = Number(document.querySelector('#year').value);
  let answer = document.querySelector('#answer');

  // ベン図の内側から順番に評価していく場合
  if(year % 400 == 0){
    answer.innerHTML = "閏年";
  }else if(year % 100 == 0){
    answer.innerHTML = "平年";
  }else if(year % 4 == 0){
    answer.innerHTML = "閏年";
  }else{
    answer.innerHTML = "平年";
  }
}

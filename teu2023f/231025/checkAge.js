function checkAge(){
  let age = Number(document.querySelector('#age').value);
  let answer = document.querySelector('#answer');

  if(age <= 0){
    answer.innerHTML = 'エラー';
  }else if(age < 20){
    answer.innerHTML = '未成年';
  }else if(age < 65){
    answer.innerHTML = '成人';
  }else{
    answer.innerHTML = '高齢者';
  }
}

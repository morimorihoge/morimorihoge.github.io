function checkAge(){
    let age = Number(document.querySelector('#age').value);
    let answer = document.querySelector('#answer');
    console.log(age);

    if(age <= 0){
        answer.innerHTML = 'エラー';
    }else if(age < 20){
        answer.innerHTML = '未成年';
    }else if(age < 65){
        answer.innerHTML = '成人';
    }else{
        answer.innerHTML = '高齢者';
    }
    /*
    if(0 < age && age < 20){
        answer.innerHTML = '未成年';
    }else if(20 <= age && age < 65){
        answer.innerHTML = '成人';
    }else if(65 <= age){
        answer.innerHTML = '高齢者';
    }else{
        answer.innerHTML = 'エラー';
    }
     */
}

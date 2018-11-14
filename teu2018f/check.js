function checkNumber() {
  if (Number(document.querySelector("#num").value) == 10) {
    window.alert("true");
  } else {
    window.alert("false");
  }
}

function checkUserInput() {
  let input = document.querySelector("#user_input");
  let answer = document.querySelector("#answer");
  let question = document.querySelector("#question");
  if (input.value == question.innerHTML) {
    answer.innerHTML = "○";
  } else {
    answer.innerHTML = "×";
  }
}

function checkAge() {
  let age = document.querySelector("#age");
  let ageNumber = Number(age.value);
  let answer = document.querySelector("#answer");

  // 下から条件を書いていった場合
  if (ageNumber <= 0) {
    answer.innerHTML = "エラー";
  } else if (ageNumber < 20) {
    answer.innerHTML = "未成年";
  } else if (ageNumber < 65) {
    answer.innerHTML = "成人";
  } else {
    answer.innerHTML = "高齢者";
  }

  // // 上から条件を書いていた場合
  // if(ageNumber >= 65){
  //   answer.innerHTML = "高齢者";
  // }else if(ageNumber >= 20){
  //   answer.innerHTML = "成人";
  // }else if(ageNumber > 0){
  //   answer.innerHTML = "未成年";
  // }else{
  //   answer.innerHTML = "エラー";
  // }
}

function checkYear() {
  let year = document.querySelector("#year");
  let yearNumber = Number(year.value);
  let answer = document.querySelector("#answer");

  // if (yearNumber % 400 == 0) {
  //   answer.innerHTML = "閏年";
  // } else if (yearNumber % 100 == 0) {
  //   answer.innerHTML = "平年";
  // } else if (yearNumber % 4 == 0) {
  //   answer.innerHTML = "閏年";
  // } else {
  //   answer.innerHTML = "平年";
  // }


  // 閏年判定
  // 400で割り切れる、または4の倍数でも100で割り切れない年は閏年
  // 例: 1996 -> 閏年
  //     2000 -> 閏年
  //     2100 -> 平年
  //     2019 -> 平年
  if(yearNumber % 400 == 0 ||
      (yearNumber % 100 != 0 && yearNumber % 4 == 0)){
    answer.innerHTML = "閏年";
  }else{
    answer.innerHTML = "平年";
  }

  if (yearNumber % 4 != 0) {
    answer.innerHTML = "平年";
  } else {
    if (yearNumber % 100 == 0) {
      if (yearNumber % 400 == 0) {
        answer.innerHTML = "閏年";
      } else {
        answer.innerHTML = "平年";
      }
    } else {
      answer.innerHTML = "閏年";
    }
  }

}


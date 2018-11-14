// 配列リテラルは[]の中に「,」区切りで入れる
let numbers = ["one", "two", "three"];

numbers.forEach(function(num){
  console.log(num);
});


// 添字は0番目から
console.log(numbers[0]); // one
console.log(numbers[1]); // two
console.log(numbers[2]); // three

// 代入
numbers[1] = "にばんめ";
console.log(numbers[1]); // にばんめ

// 存在しない部分にアクセスするとundefined
console.log(numbers[3]); // undefined

numbers.forEach(function(num){
  console.log(num);
});

function doCheckAnswers() {
  let answerText = "不正解";
  let inputString = document.querySelector("#input_string");
  let answer = document.querySelector("#answer");

  Array.from(document.querySelectorAll("ul.answer-list li")).forEach(function(element){
    if(element.innerHTML == inputString.value){
      answerText = "正解";
    }
  });
  answer.innerHTML = answerText;
}


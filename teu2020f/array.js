// テキストボックス内に入力した値が、
// HTMLのli要素のいずれかに一致する場合に「正解」
// どれにも一致しない場合には「不正解」と表示する
function doCheckAnswers(){
    let inputElement = document.querySelector("#input_string");
    let answerElement = document.querySelector("#answer");
    let answerListElements = document.querySelectorAll("ul.answer-list li");
    let answerArray = Array.from(answerListElements);

    let answerText = "不正解";
    answerArray.forEach(function(answer){
        // answerにはliタグのElementが入っている
        if(answer.innerHTML == inputElement.value){
            answerText = "正解";
        }
    })
    answerElement.innerHTML = answerText;
}

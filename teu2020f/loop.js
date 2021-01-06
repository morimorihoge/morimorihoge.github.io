// ① 0から10000までの総和を計算して表示する
function doLoop1() {
    let answerElement = document.querySelector("#answer");
    let summary = 0;
    let counter = 0;
    while (counter <= 10000) {
        summary = summary + counter;
        counter++;
    }
    answerElement.innerHTML = summary;
}

// ② 0から10000までを足していき、合計値がはじめに50000を超えた時の値を表示する
function doLoop2() {
    let answerElement = document.querySelector("#answer");
    let summary = 0;
    let counter = 0;
    while (true) {
        summary = summary + counter;
        if (summary > 50000) {
            break;
        }
        counter++;
    }
    answerElement.innerHTML = summary;
}

// 1から100までの値について、各値につき1行ずつ以下のルールに従って表示せよ
// 値が3で割り切れる場合はFizz
// 値が5で割り切れる場合はBuzz
// 値が3と5両方で割り切れるFizzBuzz
// 上記どれでもない場合はその値を表示
function doFizzBuzz() {
    let answerElement = document.querySelector("#answer");
    let counter = 1;
    while (counter <= 100) {
        // ここに処理を書く
        let message = "";
        if (counter % 3 == 0 && counter % 5 == 0) {
            message = "FizzBuzz"
        } else if (counter % 3 == 0) {
            message = "Fizz"
        } else if (counter % 5 == 0) {
            message = "Buzz";
        } else {
            message = counter;
        }

        // 画面出力
        answerElement.innerHTML =
            answerElement.innerHTML + message + "<br>";

        counter++;
    }
}

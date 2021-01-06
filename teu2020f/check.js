function checkNumber() {
    if (document.querySelector("#num").value == 123) {
        window.alert("true");
    } else {
        window.alert("false");
    }
}

function checkUserInput() {
    let input = document.querySelector("#user_input");
    let answer = document.querySelector("#answer");
    if (input.value == "隣の客はよく柿食う客だ") {
        answer.innerHTML = "正解";
    } else {
        answer.innerHTML = "不正解";
    }
}

// 数値が20より小さいなら「未成年」と表示
// 数値が20以上なら「成人」と表示
// 数値が65以上なら「高齢者」と表示
// 数値が0以下なら「エラー」と表示
function checkAge() {
    let ageElement = document.querySelector("#age");
    let answerElement = document.querySelector("#answer");
    let age = Number(ageElement.value);
    if (age <= 0) {
        answerElement.innerHTML = "エラー";
    } else if (age < 20) {
        answerElement.innerHTML = "未成年";
    } else if (age < 65) {
        answerElement.innerHTML = "成人";
    } else {
        answerElement.innerHTML = "高齢者";
    }
}

// 閏年の条件（グレゴリオ歴）
// 4で割り切れる年は閏年（例: 2020）
// ただし、100で割り切れる年は平年（例: 1900）
// ただし、400で割り切れる年は閏年（例: 2000）
function checkYear() {
    let yearElement = document.querySelector("#year");
    let answerElement = document.querySelector("#answer");
    let year = Number(yearElement.value);
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                answerElement.innerHTML = "閏年";
            } else {
                answerElement.innerHTML = "平年";
            }
        } else {
            answerElement.innerHTML = "閏年";
        }
    } else {
        answerElement.innerHTML = "平年";
    }
}

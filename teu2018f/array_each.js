let tweetsHTML = "<ul>";

// let i = 0;
// while(i < tweets.length){
//   tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//   i++;
// }

// for(let i = 0; i < tweets.length;i++){
//   tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
// }
//
// Array#forEach版
let appendTweet = function(tweet){
  tweetsHTML += `<li><b>${tweet.name}</b> ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
};
tweets.forEach(appendTweet);

tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;





// let fruitsHTML = "<ul>";
//
// // fruitsNamesからliタグを作ってfruitsHTMLに
// // += で追加していく
// //
// //// while版
// // let i = 0;
// // while(i < fruitNames.length){
// //   fruitsHTML += `<li>${fruitNames[i]}</li>`;
// //   i++;
// // }
//
// // for版
// // for(let i = 0;i < fruitNames.length;i++){
// //   fruitsHTML += `<li>${fruitNames[i]}</li>`;
// // }
//
// // Array#forEach()版
// let appendFruit = function(fruit){
//   fruitsHTML += `<li>${fruit}</li>`;
// };
// fruitNames.forEach(appendFruit);
//
// fruitsHTML += "</ul>";
// document.querySelector("#answer").innerHTML = fruitsHTML;























// // 呼び出し元で配列変数の定義がある前提のコードです
//
// let i = 0;
// let html = "<ul>";
// while(i < tweets.length){
//   html += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//   i++;
// }
// html += "</ul>";
//
// document.querySelector("#answer").innerHTML = html;
//
//
// // let i = 0;
// // let html = "<ul>";
// // while (i < fruit_names.length) {
// //   html += `<li>${fruit_names[i]}</li>`;
// //   i++;
// // }
// // html += "</ul>";
// //
// // document.querySelector("#answer").innerHTML = html;
// //
// //
// // let arr = [3, 2, 4, 1, 2, 3, 5, 1];
// // console.log(arr.length); // 8
// //
// //
// // let objarr = [
// //   { name: "タロウ", age: 20, birthDate: "1998-04-01" },
// //   { name: "ジロウ", age: 19, birthDate: "1998-12-01" },
// //   { name: "花子",   age: 10, birthDate: "2008-05-03" }
// // ];
// // console.log(objarr.length); // 3
// // console.log(objarr[1].age); // 19
// //
//

// // 今までやった関数
// // この書き方だと`func01`という名前の関数が宣言される
// function func01(){
//   console.log("func01 called.");
// }
// func01(); // 今まで通りの呼び出し
// console.log(func01); // 関数オブジェクトとして参照
//
// // 関数は宣言時に名前を付けないで作ることもできる（匿名関数）。
// // その場合、通常の変数代入の様な形式で変数に関数オブジェクトを
// // 保存し、後で呼び出すことができる
// let func02 = function(){
//   console.log("func02 called.");
// };
// func02(); // 普通の関数と同じように呼び出せる
// console.log(func02); // 関数オブジェクトとして参照
//
// // 括弧を付けなければ関数オブジェクトは
// // 普通のオブジェクトの様に参照・代入できる
// let func02_alter = func02;
// func02_alter(); // func02と全く同じように呼び出せる
//
// ES2016から付けるアロー関数書式

// 仮引数が複数ある場合
let func03 = (x, y) => {
  console.log(`func03(${x}, ${y}) called.`);
};
func03("hoge", "huga"); // func03(hoge, huga) called.

// 仮引数が一つの場合、括弧が省略できる
let func04 = x => {
  console.log(`func04(${x}) called.`);
};
func04("piyo"); // func04(piyo) called.

// 仮引数がない場合、括弧が必須
let func05 = () => {
  console.log(`func05() called.`);
};// ES2016から付けるアロー関数書式

// 仮引数が複数ある場合
let func03 = (x, y) => {
  console.log(`func03(${x}, ${y}) called.`);
};
func03("hoge", "huga"); // func03(hoge, huga) called.

// 仮引数が一つの場合、括弧が省略できる
let func04 = x => {
  console.log(`func04(${x}) called.`);
};
func04("piyo"); // func04(piyo) called.

// 仮引数がない場合、括弧が必須
let func05 = () => {
  console.log(`func05() called.`);
};
func05(); // func05() called
func05(); // func05() called


// 配列オブジェクトと関数オブジェクトを用意して呼び出す
let arr = [2,3,1,4,5];

let logNumber = function(number){
  console.log(number);
};
arr.forEach(logNumber); // 関数オブジェクトを引数にする

// 引数に匿名関数を直接入れてしまう方法
arr.forEach(function(number){
  console.log(number);
});

// document.querySelectorAllおさらい

// liタグの中身をconsole.logする
let liNodeList = document.querySelectorAll("li");
let liArray = Array.from(liNodeList);
let logHTML = function(element){
  console.log(element.innerHTML);
};
liArray.forEach(logHTML);

// 一時変数を使わずにまとめるとこうなる
Array.from(document.querySelectorAll("li")).forEach(function(element){
  console.log(element.innerHTML);
});

// さらにアロー関数を使う
Array.from(document.querySelectorAll("li")).forEach((element) => {
  console.log(element.innerHTML);
});



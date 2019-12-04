function showModal() {
  console.log("showModal() called");
  // div#modalの中に文字列を表示する
  let modal = document.querySelector("div#modal");
  modal.innerHTML = "クリックされたよ！";
}

function changeRed() {
  console.log("changeRed() called");
  let modal = document.querySelector("div#modal");
  modal.style.backgroundColor = "red";
}

function changeYellow() {
  console.log("changeYellow() called");
  let modal = document.querySelector("div#modal");
    modal.style.backgroundColor = "yellow";
}

function changeGreen() {
  console.log("changeGreen() called");
  let modal = document.querySelector("div#modal");
  modal.style.backgroundColor = "green";
}

function appendCircle(){
  console.log("appendCircle() called");
  let modal = document.querySelector("div#modal");
  modal.append("○");
}

function appendCross(){
  console.log("appendCross() called");
  let modal = document.querySelector("div#modal");
  modal.append("☓");
}



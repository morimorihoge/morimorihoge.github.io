
function showModal(){
  let modal = document.querySelector("#modal");
  modal.innerHTML = "クリックされたぞ！";
}

function changeRed(){
  let modal = document.querySelector("#modal");
  modal.style.backgroundColor = "red";
}

function changeYellow(){
  let modal = document.querySelector("#modal");
  modal.style.backgroundColor = "yellow";
}

function changeGreen(){
  let modal = document.querySelector("#modal");
  modal.style.backgroundColor = "green";
}

function addCircle(){
  let modal = document.querySelector("#modal");
  modal.innerHTML = `${modal.innerHTML}○`;
}

function addCross(){
  let modal = document.querySelector("#modal");
  modal.innerHTML = `${modal.innerHTML}×`;
}

function plusOne(){
  let modal = document.querySelector("#modal");
  modal.innerHTML = Number(modal.innerHTML) + 1;
}

function plusFive(){
  let modal = document.querySelector("#modal");
  modal.innerHTML = Number(modal.innerHTML) + 5;
}

function plusTen(){
  let modal = document.querySelector("#modal");
  modal.innerHTML = Number(modal.innerHTML) + 10;
}



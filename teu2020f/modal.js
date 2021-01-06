function showModal(){
    console.log("クリックされました");
    let modal = document.querySelector("#modal");
    modal.innerHTML = "<span style='color: red'>showModal()</span>";
}

function changeRed(){
    let modal = document.querySelector("#modal");
    modal.style.backgroundColor ="red";
}

function changeYellow(){
    let modal = document.querySelector("#modal");
    modal.style.backgroundColor ="yellow";
}

function changeGreen(){
    let modal = document.querySelector("#modal");
    modal.style.backgroundColor ="green";
}

function appendCircle(){
    let modal = document.querySelector("#modal");
    modal.append("○");
}

function appendCross(){
    let modal = document.querySelector("#modal");
    modal.append("×");
}

function plusOne(){
    let modal = document.querySelector("#modal");
    let numModal = Number(modal.innerHTML);
    modal.innerHTML = numModal + 1;
}

function plusFive(){
    let modal = document.querySelector("#modal");
    let numModal = Number(modal.innerHTML);
    modal.innerHTML = numModal + 5;
}

function plusTen(){
    let modal = document.querySelector("#modal");
    let numModal = Number(modal.innerHTML);
    modal.innerHTML = numModal + 10;
}

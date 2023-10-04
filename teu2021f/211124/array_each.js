let answer = document.querySelector("#answer");

for(let i = 0;i < fruitNames.length;i++){
  answer.innerHTML += `<li>${fruitNames[i]}</li>`;
  console.log(fruitNames[i]);
}
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;

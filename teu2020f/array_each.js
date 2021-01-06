// Goalとして以下のようなHTMLを#answerの中に入れたい
//   <ul>
//     <li>りんご</li>
//     <li>みかん</li>
//     <li>いちご</li>
//     <li>いちじく</li>
//   </ul>
let answerElement = document.querySelector("#answer");
let output = "<ul>"

// forバージョン
for(let i = 0;i < fruitNames.length;i++){
    output = output + `<li>${fruitNames[i]}</li>`;
}

// whileバージョン
let i = 0;
while (i < fruitNames.length) {
    output = output + `<li>${fruitNames[i]}</li>`
    i++;
}

// Array#forEachバージョン
fruitNames.forEach(function (fruit) {
    output = output + `<li>${fruit}</li>`;
});


output = output + "</ul>";
answerElement.innerHTML = output;

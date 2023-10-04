console.log(fruitNames);

let answer = document.querySelector("#answer");

/**
 * 作りたいHTML
 *   <ul>
 *     <li>りんご</li>
 *     <li>みかん</li>
 *     <li>いちご</li>
 *     <li>いちじく</li>
 *   </ul>
 */
let html = "<ul>";
let i = 0;
for(let i = 0;i < fruitNames.length;i++){
  html += `<li>${fruitNames[i]}</li>`
}
html += "</ul>";
answer.innerHTML = html;

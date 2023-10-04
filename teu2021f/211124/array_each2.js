let answer = document.querySelector("#answer");

let i = 0;
while(i < tweets.length){
  answer.innerHTML += `<li>
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
    </li>`;
  i++;
}
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;

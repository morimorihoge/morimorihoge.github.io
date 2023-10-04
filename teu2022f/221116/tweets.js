let answer = document.querySelector("#answer");
let html = "<ul>";

/**
 * 作りたいHTML
 *   <ul>
 *     <li><b>太郎</b>: 満腹度が回復した <i>2018-11-01 20:05:38</i></li>
 *     <li><b>太郎</b>: 満腹度が回復した <i>2018-11-01 20:05:38</i></li>
 *     ...
 *   </ul>
 */

// for(let i = 0;i < tweets.length;i++){
//   html += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
// }
let renderTweet = function(tweet){
  html += `<li><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
};
tweets.forEach(renderTweet);

html += "</ul>";
answer.innerHTML = html;

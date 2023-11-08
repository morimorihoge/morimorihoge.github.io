let answer = document.querySelector('#answer');

let outputHtml = '<ul>';

// Array.forEach()を使って書く
tweets.forEach(function(tweet){
  outputHtml += `<li><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
});

// // whileを使って書く
// let i = 0;
// while(i < tweets.length){
//   outputHtml += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//   i++;
// }

outputHtml += '</ul>';
answer.innerHTML = outputHtml;

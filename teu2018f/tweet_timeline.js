// ユーザーリストの生成

let userNames = [];
tweets.forEach( (tweet) => {
  if(!userNames.includes(tweet.name)){
    userNames.push(tweet.name);
  }
});

let userListNode = document.querySelector("#user-list");
let userListHTML = "";
userNames.forEach( (name) => {
  userListHTML += `<li class="list-inline-item">${name}</li>`;
});
userListNode.innerHTML = userListHTML;

// tweet timeline
let visibleTweets = [];

let tweetListNode = document.querySelector("#tweet-list");
let tweetListHTML= "";
tweets.forEach( (tweet) => {
  tweetListHTML += `
    <li class="list-group-item">
      <div class="row">
        <div class="col-2">
          <img src="${tweet.avatar}" class="img-thumbnail">  
        </div>
        <div class="col-10">
          <b>${tweet.name}</b> ${tweet.message} <i>${tweet.tweetedAt}</i> 
        </div>
      </div>
    </li>`
});
tweetListNode.innerHTML = tweetListHTML;

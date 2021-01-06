// Goalとして以下のようなHTMLを#answerの中に入れたい
//   <ul>
//     <li><b>太郎</b>: 満腹度が回復した <i>2018-11-01 20:05:38</i></li>
//     <li>以下略</li>
//   </ul>
let answerElement = document.querySelector("#answer");
let output = "<ul>"

// whileバージョン
while (i < tweets.length) {
    output = output + `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`
    i++;
}

// forバージョン
for (let i = 0; i < tweets.length; i++) {
    output = output + `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`
}

// forEachバージョン
tweets.forEach(function (tweet) {
    output = output + `<li><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`
})

output = output + "</ul>";
answerElement.innerHTML = output;


[
    {
        "name": "三郎BOT",
        "message": "21時でござる",
        "tweetedAt": "2019-11-01 21:00:00",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"
    },
    {
        "name": "次郎",
        "message": "悲しいので寝ます",
        "tweetedAt": "2019-11-01 20:14:44",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png"
    },
    {
        "name": "次郎",
        "message": "33-4・・・・・",
        "tweetedAt": "2019-11-01 20:13:03",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png"
    },
    {
        "name": "太郎",
        "message": "満腹度が回復した",
        "tweetedAt": "2019-11-01 20:05:38",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
    },
    {
        "name": "三郎BOT",
        "message": "20時でござる",
        "tweetedAt": "2019-11-01 20:00:00",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"
    },
    {
        "name": "太郎",
        "message": "もぐもぐ・・・",
        "tweetedAt": "2019-11-01 19:50:22",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
    },
    {
        "name": "太郎",
        "message": "ごはんつくった！",
        "tweetedAt": "2019-11-01 19:48:01",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
    },
    {
        "name": "太郎",
        "message": "お腹空いたなあ....",
        "tweetedAt": "2019-11-01 19:30:59",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
    },
    {
        "name": "太郎",
        "message": "お腹空いたなあ",
        "tweetedAt": "2019-11-01 19:08:01",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png"
    },
    {
        "name": "次郎",
        "message": "久々にやきうやったるで！パワプロやけどな！",
        "tweetedAt": "2019-11-01 19:04:12",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png"
    },
    {
        "name": "三郎BOT",
        "message": "19時でござる",
        "tweetedAt": "2019-11-01 19:00:00",
        "avatar": "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"
    }
]

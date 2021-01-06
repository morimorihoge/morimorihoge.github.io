let pageObject;

function doFetch() {
  let titleElement = document.querySelector("#title");
  fetch(`https://ja.wikipedia.org//w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${titleElement.value}`, {mode: 'cors'}).then(
      function (response) {
        return response.json();
      }
  ).then(
      function (json) {
        console.log(json);
        // json.query.pagesはオブジェクトだが、プロパティ名がWikipediaのpage idで検索内容によって変わってしまう
        // Object.keys(object)を使うと、objectのプロパティ名の配列が取れるので、その0番目を取り出すことで、実際に検索したときのプロパティ名を取得できる
        let keys = Object.keys(json.query.pages);
        // json.query.pages[pageId]の中身は以下
        // {pageid: 1420036, ns: 0, title: "学校", extract: "学校（がっこう）は、幼児・児童・生徒・学生その他に対する教育制度の中核的な役割を果たす機関。また、その施設。学園、学院などもほぼ同様の意味を持つ。"}
        json.query.pages[keys[0]];
        let answerElement = document.querySelector("#answer");
        answerElement.innerHTML =
            `<b>${json.query.pages[keys[0]].title}</b><p>${json.query.pages[keys[0]].extract}</p>`;
      }
  );
}


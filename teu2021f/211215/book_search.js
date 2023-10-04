function doSearch() {
  let keyword = document.querySelector("#keyword").value;
  // API document: https://developers.google.com/books/docs/v1/using#PerformingSearch
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=40&orderBy=newest`).then(
      function (response) {
        return response.json();
      }
  ).then(
      function (json) {
        console.log(json);
        let html = "<ul>";
        json.items.forEach((item) => {
          html += `<li>${item.volumeInfo.title}</li>`;
        });
        html += "</ul>";
        document.querySelector("#answer").innerHTML = html;
      }
  );
}
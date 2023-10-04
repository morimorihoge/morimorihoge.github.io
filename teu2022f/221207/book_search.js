function doSearch() {
  let bookTitle = document.querySelector("#book_title").value;

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)
      .then((response) => response.json())
      .then(
          function (json) {
            console.log(json);

            let answerHtml = "";
            json.items.forEach(function (item) {
              answerHtml += `<li>${item.volumeInfo.title}</li>`;
            });

            document.querySelector("#answer").innerHTML = answerHtml
          }
      );
}


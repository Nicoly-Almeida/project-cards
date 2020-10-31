window.addEventListener("load", async () => {
  const response = await fetch("http://localhost:3333/books");

  if (response.status === 200) {
    let renderData = "";
    const bookList = await response.json();

    for (const bookData of bookList) {
      const { id, title, book, link_book } = bookData;

      renderData += `
      <div class="book">
          <a href="livro.html?${id}"><img src="../../assets/pdf.png" />${title}</a>
      </div>
      `;
    }

    document.getElementById("book-list").innerHTML = renderData;
  }
});
//
//
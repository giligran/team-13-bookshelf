// import { shoppingListBooks } from './js/home';

const bookList = document.getElementById('book-list');

const savedBooks = JSON.parse(localStorage.getItem(shoppingListBooks));

function getBooksForCurrentPage(currentPage, itemsPerPage, savedBooks) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return savedBooks.slice(startIndex, endIndex);
}

if (savedBooks && savedBooks.length > 0) {
  const booksOnPage = getBooksForCurrentPage(1, 3, savedBooks);
  // Проходимося по кожній збереженій книзі
  booksOnPage.forEach(book => {
    const bookElement = document.createElement('li');
    bookElement.classList.add('book-item');
    bookElement.innerHTML = `
    
       <li class="book-item">
            <div class="book-card">
              <div>
                <img
                  src="${book.image}"
                  alt="Зображення обгортки книги"
                  class="img-title-book"
                />
              </div>
              <div class="book-info">
                <h2 class="book-title">${book.title}</h2>
                <h3 class="book-category">${book.category}</h3>
                <p class="book-description">${book.description}</p>
                <div class="buying-list">
                  <p class="book-author">${book.author}</p>
                  <ul class="book-retailers">
                  ${boor.retailers.map(retailer => ``)}
                    <li>
                      <a href=""
                        ><img
                          src="../img/logo-partners/amazon.png"
                          class="retailer-logo amazon-logo"
                      /></a>
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="../img/logo-partners/ibook.png"
                          class="retailer-logo ibook-logo"
                      /></a>
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="../img/logo-partners/bookshop.png"
                          class="retailer-logo bookshop-logo"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button type="button" class="remove-book" data-item-remove>
              <svg class="remove-book-item" width="28" height="28">
                <use href="../img/symbol-defs.svg#icon-dump"></use>
              </svg>
            </button>
          </li>

      <img src="${book.image}" alt="Зображення обгортки книги">
      <h2 class="book-title">${book.title}</h2>
      <h3 class="book-category">${book.category}</h3>
      <p class="book-description">${book.description}</p>
      <p class="book-author">${book.author}</p>
      <ul class="book-retailers">
        ${book.retailers
          .map(retailer => `<li><a href="${retailer.link}"></a></li>`)
          .join('')}
      </ul>
      <button class="remove-button">Видалити зі списку покупок</button>
      
    `;
    bookList.appendChild(bookElement);
  });
} else {
  const noBooksImage = document.createElement('img');
  noBooksImage.src = '../img/blocks.png';
  noBooksImage.alt = 'Зображення порожнього списку покупок';
  bookList.appendChild(noBooksImage);
}

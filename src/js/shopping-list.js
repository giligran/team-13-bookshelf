import { shoppingListBooks } from '../js/home';

const bookList = document.getElementById('book-list');

const savedBooks = JSON.parse(localStorage.getItem(shoppingListBooks));

function getBooksForCurrentPage(currentPage, itemsPerPage, savedBooks) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return savedBooks.slice(startIndex, endIndex);
}

if (savedBooks && savedBooks.length > 0) {
  const booksOnPage = getBooksForCurrentPage(1, 10, savedBooks);
  // Проходимося по кожній збереженій книзі
  savedBooks.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-card');
    bookElement.innerHTML = `
      <img src="${book.image}" alt="Зображення обгортки книги">
      <h2 class="book-title">${book.title}</h2>
      <h3 class="book-category">${book.category}</h3>
      <p class="book-description">${book.description}</p>
      <p class="book-author">${book.author}</p>
      <ul class="book-retailers">
        ${book.retailers
          .map(
            retailer =>
              `<li><a href="${retailer.link}">${retailer.name}</a></li>`
          )
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

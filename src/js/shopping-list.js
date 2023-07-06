import BookApiService from './fetch-api';
import { localStorageKey } from './localKey';
import imgBlockBooks from '../img/blocks.png';

const bookList = document.querySelector('.book-list');
const fetch = new BookApiService();

function removeBookElement(element) {
  const bookItem = element.closest('.book-item');
  const siblings = Array.from(bookItem.parentNode.children);
  const index = siblings.indexOf(bookItem);

  // Видалення елемента з DOM
  bookItem.remove();

  // Оновлення індексів та схлопування дірки
  siblings.forEach((sibling, i) => {
    if (i >= index) {
      sibling.style.transform = `translateY(-${bookItem.offsetHeight}px)`;
    }
  });

  const remainingBooks = Array.from(document.querySelectorAll('.book-item'));
  if (remainingBooks.length === 0) {
    const noBookText = document.createElement('p');
    noBookText.classList.add('empty-list-description');
    noBookText.innerHTML = 'This page is empty, add some books and proceed to order.';
    const noBooksImage = document.createElement('img');
    noBooksImage.src = blocks;
    noBooksImage.alt = 'Зображення порожнього списку покупок';
    bookList.appendChild(noBookText);
    bookList.appendChild(noBooksImage);
  }
}

const localData = JSON.parse(localStorage.getItem(localStorageKey));

console.log(localData);
if (localData.length > 0) {
  localData
    .map(book => {
      let titleForRender;
      titleForRender =
        book.title.length > 16 ? book.title.slice(0, 15) + '...' : book.title;
      if (window.screen.width >= 768) {
        titleForRender = book.title;
      }

      const bookElement = document.createElement('li');
      bookElement.classList.add('book-item');
      bookElement.innerHTML = `
            <div>
              <img src="${book.book_image}" alt="Зображення обгортки книги" class="img-title-book" />
            </div>
            <div class="book-info">
              <h2 class="book-title">${titleForRender}</h2>
              <h3 class="book-category">${book.category}</h3>
              <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew,
              living a dream life just a short drive away from the working-class suburb where he and his wife,
              Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David
              was asleep just down the hall.</p>
              <div class="buying-list">
                <p class="book-author">${book.author}</p>
                <ul class="book-retailers">
                  <li>
                    <a href="${book.amazon_product_url}"><img src="./img/logo-partners/amazon.png" class="retailer-logo amazon-logo" /></a>
                  </li>
                  <li>
                    <a href=""><img src="./img/logo-partners/ibook.png" class="retailer-logo ibook-logo" /></a>
                  </li>
                  <li>
                    <a href=""><img src="./img/logo-partners/bookshop.png" class="retailer-logo bookshop-logo" /></a>
                  </li>
                </ul>
              </div>
            </div>
          <button type="button" class="remove-book" data-id=${book._id}>
            <svg class="remove-book-item" width="28" height="28">
              <use href="./img/symbol-defs.svg#icon-dump"></use>
            </svg>
          </button>
        `;

      const removeBtn = bookElement.querySelector('.remove-book');
      removeBtn.addEventListener('click', () => {
        const idForDelete = removeBtn.getAttribute('data-id');
        removeBookElement(removeBtn);
        const localData = JSON.parse(localStorage.getItem(localStorageKey));

        const indexToDelete = localData.findIndex(bookForDelete => {
          return bookForDelete._id === idForDelete;
        });
        if (indexToDelete !== -1) {
          localData.splice(indexToDelete, 1);
        }
        localStorage.setItem(localStorageKey, JSON.stringify(localData));
      });

      bookList.appendChild(bookElement);
    })
    .join('');
} else {
  const noBookText = document.createElement('p');
  noBookText.classList.add('empty-list-description');
  noBookText.innerHTML = 'This page is empty, add some books and proceed to order.';
  const noBooksImage = document.createElement('img');
  noBooksImage.src = imgBlockBooks;
  noBooksImage.classList.add('empty-list-png');
  noBooksImage.alt = 'Зображення порожнього списку покупок';
  bookList.appendChild(noBookText);
  bookList.appendChild(noBooksImage);
  
}

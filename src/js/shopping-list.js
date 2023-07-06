import BookApiService from './fetch-api';

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
    const noBooksImage = document.createElement('img');
    noBooksImage.src = '../img/blocks.png';
    noBooksImage.alt = 'Зображення порожнього списку покупок';
    bookList.appendChild(noBooksImage);
  }
}

fetch
  .fetchBooksByCategory('Young Adult Paperback Monthly')
  .then(data => {
    const savedBooks = data;
    console.log(data);
    if (savedBooks.length > 0) {
      savedBooks
        .map(book => {
          let titleForRender;
          titleForRender =
            book.title.length > 16
              ? book.title.slice(0, 15) + '...'
              : book.title;
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
                    <a href="${book.amazon_product_url}"><img src="../img/logo-partners/amazon.png" class="retailer-logo amazon-logo" /></a>
                  </li>
                  <li>
                    <a href=""><img src="../img/logo-partners/ibook.png" class="retailer-logo ibook-logo" /></a>
                  </li>
                  <li>
                    <a href=""><img src="../img/logo-partners/bookshop.png" class="retailer-logo bookshop-logo" /></a>
                  </li>
                </ul>
              </div>
            </div>
          <button type="button" class="remove-book" data-item-remove>
            <svg class="remove-book-item" width="28" height="28">
              <use href="./img/symbol-defs.svg#icon-dump"></use>
            </svg>
          </button>
        `;

          const removeBtn = bookElement.querySelector('.remove-book');
          removeBtn.addEventListener('click', () => {
            removeBookElement(removeBtn);
          });

          bookList.appendChild(bookElement);
        })
        .join('');
    } else {
      const noBooksImage = document.createElement('img');
      noBooksImage.src = '../img/blocks.png';
      noBooksImage.classList.add('empty-list-png');
      noBooksImage.alt = 'Зображення порожнього списку покупок';
      bookList.appendChild(noBooksImage);
    }
  })
  .catch(error => {
    console.error(error);
  });

// const refsShopping = {
//   switcherRef: document.querySelector('.switch'),
//   shoppingCard: document.querySelectorAll('.book-card'),
//   bookTitle: document.querySelectorAll('.book-title'),
// };

// function colorChanger(evt) {
//   if (evt.target.nodeName === 'INPUT') {
//     refsShopping.shoppingCard.forEach(card => {
//       card.classList.toggle('dark');
//     });
//     // refsShopping .shoppingCard.classList.toggle('dark');
//     // refsShopping .bookTitle.classList.toggle('dark');
//   }
// }
// refsShopping.switcherRef.addEventListener('click', colorChanger);

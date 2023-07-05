import BookApiService from './fetch-api';
import Notiflix from 'notiflix';

const bookApiService = new BookApiService();
const popularBooksList = document.querySelector('.popular-books-list');
const categoryList = document.querySelector('.category-navigation');
const singleCategoryBooks = document.querySelector('.single-category-list');
const bookList = document.querySelector('.single-category-item');
const categoryItem = document.querySelector('.category-list-link');
const loader = document.querySelector('.loader');
const categoryTitle = document.querySelector('.category-title');
const firstListLink = document.querySelector('.first-list-link');
const addItemBtn = document.querySelector('.card-button');
console.log(addItemBtn);
bookApiService.fetchPopularBooks().then(books => {
  renderMarkup(books);
  hideElement(loader);
});

const localStorageKey = 'shoping-list';

if (!localStorage.getItem(localStorageKey)) {
  console.log(Boolean(localStorage.getItem(localStorageKey)));
  localStorage.setItem(localStorageKey, JSON.stringify([]));
}
// const idForREmove = '643282b1e85766588626a0ba';
// const data = JSON.parse(localStorage.getItem(localStorageKey));
// data.map((item, index) => {
//   console.log(item);
//   console.log(item._id);
// });

bookApiService.fetchCategoryList().then(renderListCategory);

let currentCategory = firstListLink;

categoryList.addEventListener('click', event => {
  if (!event.target.classList.contains('js-click')) {
    return;
  }
  event.preventDefault();

  if (currentCategory) {
    currentCategory.classList.remove('current');
  }

  if (currentCategory !== event.target) {
    event.target.classList.add('current');
    currentCategory = event.target;
  } else {
    currentCategory = null;
  }
  if (event.target.classList.contains('all-categories')) {
    bookApiService.fetchPopularBooks().then(books => {
      renderMarkup(books);
      hideElement(loader);
    });
    console.log(event);
    return;
  }

  bookList.innerHTML = '';

  const selectedCategory = event.target.dataset.list;

  renderSingleCategoryBooks(selectedCategory);
});

popularBooksList.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const selectedCategory = event.target.dataset.list;
  renderSingleCategoryBooks(selectedCategory);
});

function renderMarkup(popularBooks) {
  showElement(loader);
  const markup = reduceLimitCategory(popularBooks)
    .map(({ list_name, books }) => {
      const bookInfo = reduceByScreenSize(books)
        .map(({ author, book_image, title, _id }) => {
          return `<li class="book-card-home" data-id=${_id}><img src="${book_image}" alt="${title}" class ="home-book-img"/>
      <p class="top-book-title">${title}</p><p class="top-book-author">${author}</p></li>`;
        })
        .join('');
      return `<p class = "category-name-book">${list_name.toUpperCase()}</p><ul class="books-list">${bookInfo}</ul><button type='button' class="top-book-button" data-list='${list_name}'>SEE MORE</button>`;
    })
    .join('');
  popularBooksList.insertAdjacentHTML('beforeend', markup);
}

function reduceByScreenSize(books) {
  let limitedBooks = books;
  if (window.screen.width < 1440 && window.screen.width >= 768) {
    limitedBooks = books.slice(0, 3);
    return limitedBooks;
  } else if (window.screen.width < 768) {
    limitedBooks = books.slice(0, 1);
    return limitedBooks;
  } else {
    return limitedBooks;
  }
}
function reduceLimitCategory(category) {
  const limitedCategory = category.slice(0, 4);
  return limitedCategory;
}

function renderListCategory(category) {
  const markup = category
    .map(({ list_name }) => {
      return `<li class='category-item'><a href="" data-list='${list_name}' class="category-list-link js-click">${list_name}</a></li>`;
    })
    .join('');
  categoryList.insertAdjacentHTML('beforeend', markup);
}

function renderSingleCategoryBooks(categoryName) {
  popularBooksList.classList.add('visually-hidden');
  singleCategoryBooks.classList.remove('visually-hidden');

  categoryTitle.innerHTML = `${categoryName}`;

  bookApiService
    .fetchBooksByCategory(categoryName)
    .then(books => {
      if (books.length === 0) {
        throw new Error('No books in this category');
        return;
      }

      const booksMarkup = books
        .map(({ author, book_image, title, _id }) => {
          return `<li class="book-card-home" data-id=${_id}><img src="${book_image}" alt="${title}" class ="home-book-img"/>
      <p class="top-book-title">${title}</p><p class="top-book-author">${author}</p></li>`;
        })
        .join('');

      bookList.insertAdjacentHTML('beforeend', booksMarkup);
    })
    .catch(error => {
      Notiflix.Notify.warning(error.message);
    });
}
function hideElement(elem) {
  elem.classList.add('visually-hidden');
}

function showElement(elem) {
  elem.classList.remove('visually-hidden');
}

const categorysMenu = document.querySelector('.popular-books-list');
const listByCategory = document.querySelector('.single-category-list');

listByCategory.addEventListener('click', e => {
  if (e.target.closest('.book-card')) {
    fetchBook(e.target.closest('.book-card').getAttribute('data-id'));
  }
});

categorysMenu.addEventListener('click', e => {
  if (e.target.closest('.book-card')) {
    fetchBook(e.target.closest('.book-card').getAttribute('data-id'));
  }
});

function fetchBook(id) {
  bookApiService.fetchBookById(id).then(item => renderPopUp(item));
}

function renderPopUp(item) {
  const refForPopUp = document.querySelector('.pop-up');
  refForPopUp.classList.remove('is-hidden');
  refForPopUp.innerHTML = `<div class="card book-select">
    <button type="button" class="card-close" data-card-close>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="#111111"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>  
    </button>
    <div class="book-img">
      <img src=${item.book_image} alt="title" width="287px" height="408px" />
    </div>
    <div class="description">
      <h2 class="book-title">${item.title}</h2>
      <h3 class="author">${item.author}</h3>
      <p class="text-card info-book">${item.description}</p>
      <ul class="book-shop">
        <li class="amazon-shop"><a href=${item.buy_links[0].url} target="_blank" rel="noreferrer noopener" class='amazon-shop'></a></li>
        <li class="ibook-shop"><a href=${item.buy_links[1].url} target="_blank" rel="noreferrer noopener" class='ibook-shop'></a></li>
        <li class="bookshop-shop"><a href=${item.buy_links[4].url} target="_blank" rel="noreferrer noopener" class='bookshop-shop></a></li>
      </ul>
    </div>
    <button type="submit" class="card-button">ADD TO SHOPPING LIST</button>
  </div>`;
}

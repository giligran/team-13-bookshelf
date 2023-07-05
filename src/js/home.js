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
const popUpRef = document.querySelector('.pop-up');
bookApiService.fetchPopularBooks().then(books => {
  renderMarkup(books);
  hideElement(loader);
});

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
          return `<li class="book-card" data-id=${_id}><img src="${book_image}" alt="${title}" class ="home-book-img"/>
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
  if (window.screen.width < 1200 && window.screen.width >= 768) {
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
          return `<li class="book-card" data-id=${_id}><img src="${book_image}" alt="${title}" class ="home-book-img"/>
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
    openPopUp(e.target.closest('.book-card').getAttribute('data-id'));
  }
});

categorysMenu.addEventListener('click', e => {
  if (e.target.closest('.book-card')) {
    openPopUp(e.target.closest('.book-card').getAttribute('data-id'));
  }
});

function openPopUp(id) {
  bookApiService.fetchBookById(id).then(item => createPopUp(item));
}

function createPopUp(item) {
  console.log(item);
  const backdrop = document.querySelector('[data-card]');
  const bookTitle = document.querySelector('.book-title');
  const authorName = document.querySelector('.author');
  const bookDescription = document.querySelector('.info-book');
  const bookShopImages = document.querySelectorAll('.book-shop img');
  const titelImg = document.querySelector('.book-img img');
  bookTitle.textContent = item.title;
  authorName.textContent = item.author;
  bookDescription.textContent = item.description;
  titelImg.setAttribute('src', item.book_image);
  backdrop.classList.remove('is-hidden');
}

const refs = {
  // openCardBtn: document.querySelectorAll('[data-card-open]'),
  closeCardBtn: document.querySelector('[data-card-close]'),
  card: document.querySelector('[data-card]'),
};
(() => {
  // refs.openCardBtn.addEventListener('click', toggleCard);
  refs.closeCardBtn.addEventListener('click', toggleCard);
  function toggleCard() {
    refs.card.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

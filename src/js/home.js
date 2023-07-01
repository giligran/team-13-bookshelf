import BookApiService from './fetch-api';
import Notiflix from 'notiflix';


const bookApiService = new BookApiService();

const popularBooksList = document.querySelector('.popular-books-list');
const categotyList = document.querySelector('.category-navigation');
const categoryTitle = document.querySelector('.home-title');

bookApiService.fetchPopularBooks().then(renderMarkup);

bookApiService.fetchCategoryList().then(renderListCategory);

categotyList.addEventListener('click',(event) =>{
  event.preventDefault();
  const selectedCategory = event.target.dataset.list;
  renderSingleCategoryBooks(selectedCategory);
});

popularBooksList.addEventListener('click',(event) =>{;
  const selectedCategory = event.target.dataset.list;
  renderSingleCategoryBooks(selectedCategory);
});

function renderMarkup(popularBooks) {
  const markup = reduceLimitCategory(popularBooks)
    .map(({ list_name, books }) => {
      const bookInfo = reduceByScreenSize(books).map(
        ({ author, book_image, title }) => {
          return `<li class="book-card"><img src="${book_image}" alt="${title}" class ="home-book-img"/>
      <p class="top-book-title">${title}</p><p class="top-book-author">${author}</p></li>`;
        }
      ).join('');
      return `<p class = "category-name-book">${list_name.toUpperCase()}</p><ul class="books-list">${bookInfo}</ul><button type='button' class="top-book-button" data-list='${list_name}'>SEE MORE</button>`;
    })
    .join('');
  popularBooksList.insertAdjacentHTML('beforeend', markup);
}

function reduceByScreenSize(books) {
  let limitedBooks = books;
  if (window.screen.width < 1024 && window.screen.width >= 768) {
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

function renderListCategory(category){
  const markup = category.map(({list_name}) =>{
  return `<li class='category-item'><a href="" data-list='${list_name}'>${list_name}</a></li>`;
    }).join('');
  categotyList.insertAdjacentHTML('beforeend', markup);
}

function renderSingleCategoryBooks(categoryName){
  categoryTitle.classList.add('visually-hidden');
  popularBooksList.innerHTML = `<h2>${categoryName}</h2>`;
  bookApiService.fetchBooksByCategory(categoryName).then(books =>{
  console.log(books.length);
  if(books.length === 0){
    throw new Error('No books in this category');
    return;
  }
  const booksMarkup = books.map(
    ({ author, book_image, title }) => {
      return `<li class="book-card"><img src="${book_image}" alt="${title}" class ="home-book-img"/>
      <p class="top-book-title">${title}</p><p class="top-book-author">${author}</p></li>`;
    }).join('');
    popularBooksList.insertAdjacentHTML('beforeend', booksMarkup);
  }).catch(error =>{
    Notiflix.Notify.warning(error.message);
  })
}


























// Shavala
//для мобільної версії до п. 20 з ТЗ, якщо є деякі додаткові дані

// import Notiflix from 'notiflix';
// const refs = {
// btnSeeMore: document.querySelector('.see-more'),
//};

// refs.btnSeeMore.addEventListener('click', onBtnSeeMore);
// function ?
// {
// if (length ===0) {
// refs.btnSeeMore.style.display = 'none';

// Notiflix.Notify.info("No books was found.");
// }

// if (length === 1) {
//   refs.btnSeeMore.style.display = 'flex';}
//}

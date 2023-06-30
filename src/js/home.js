<<<<<<< Updated upstream
=======
import BookApiService from './fetch-api';

const bookApiService = new BookApiService();

const popularBooksList = document.querySelector('.popular-books-list');

bookApiService.fetchPopularBooks().then(renderMarkup);

function renderMarkup(popularBooks) {
  const markup = popularBooks
    .map(({ list_name, books }) => {
      const bookInfo = reduceByScreenSize(books).map(
        ({ author, book_image, title }) => {
          return `<img src="${book_image}" alt="${title}" class ="home-book-img"/>
      <p>${title}</p><p>${author}</p>`;
        }
      );
      return `<li><p>${list_name}</p>${bookInfo}</li>`;
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
>>>>>>> Stashed changes

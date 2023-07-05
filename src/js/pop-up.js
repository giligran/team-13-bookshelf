// (() => {
//   const refs = {
//     openCardBtn: document.querySelectorAll('[data-card-open]'),
//     closeCardBtn: document.querySelector('[data-card-close]'),
//     card: document.querySelector('[data-card]'),
//   };

//   refs.openCardBtn.addEventListener('click', toggleCard);
//   refs.closeCardBtn.addEventListener('click', toggleCard);
//   function toggleCard() {
//     refs.card.classList.toggle('is-hidden');
//     document.body.classList.toggle('no-scroll');
//   }
// })();

// function fetchDataAndPopulateModal() {
//   const apiUrl =
//     'https://books-backend.p.goit.global/books/643282b1e85766588626a0ba';

//   fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch book data');
//       }
//       return response.json();
//     })
//     .then(data => {
//       const backdrop = document.querySelector('[data-card]');
//       const bookTitle = document.querySelector('.book-title');
//       const authorName = document.querySelector('.author');
//       const bookDescription = document.querySelector('.info-book');
//       const bookShopImages = document.querySelectorAll('.book-shop img');

//       bookTitle.textContent = data.title;
//       authorName.textContent = data.author;
//       bookDescription.textContent = data.description;

//       bookShopImages.forEach((image, index) => {
//         image.src = data.shopLogos[index];
//       });

//       backdrop.classList.remove('is-hidden');
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// // function renderPopUp(data) {
// //   if (!data) {
// //     console.error('Передані дані не дійсні');
// //     return;
// //   }
// // }

export default class BookApiService {
  constructor() {
    this.baseUrl = 'https://books-backend.p.goit.global/books/';
  }

  fetchCategoryList() {
    const url = `${this.baseUrl}category-list`;

    return fetch(url)
      .then(res => res.json())
      .then(categoryArray => {
        return categoryArray;
      });
  }

  fetchPopularBooks() {
    const url = `${this.baseUrl}top-books`;

    return fetch(url)
      .then(res => res.json())
      .then(popularBooks => {
        // console.log(popularBooks);
        return popularBooks;
      });
  }

  fetchBooksByCategory(category) {
    const url = `${this.baseUrl}category?category=${category}`;

    return fetch(url)
      .then(res => res.json())
      .then(books => {
        // console.log(books);
        return books;
      });
  }

  fetchBookById(bookId) {
    const url = `${this.baseUrl}${bookId}`;

    return fetch(url)
      .then(res => res.json())
      .then(book => {
        // console.log(book);
        return book;
      });
  }
}

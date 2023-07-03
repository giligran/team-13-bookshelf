// /**
//    * Створення колекції книг для користувача.
//    * @param {string} userId - Ідентифікатор користувача.
//    * @param {string} collectionName - Назва колекції книг.
//    * @returns {Promise} - Promise, що виконується при успішному створенні колекції.
//    * @throws {Error} - Викидає помилку, якщо вхідні параметри неправильного типу.
//    */
//   async createBookCollection(userId, collectionName) {
//     // if (typeof userId !== 'string' || typeof collectionName !== 'string') {
//     //   throw new Error('Невірний тип даних вхідних параметрів.');
//     // }
//     try {
//       const docRef = await addDoc(collection(db, 'users'), {
//         first: 'Ada',
//         last: 'Lovelace',
//         born: 1815,
//       });
//       console.log('Document written with ID: ', docRef.id);
//     } catch (e) {
//       console.error('Error adding document: ', e);
//     }
//   },

//   /**
//    * Додавання книги до колекції користувача.
//    * @param {string} userId - Ідентифікатор користувача.
//    * @param {string} collectionName - Назва колекції книг.
//    * @param {object} book - Об'єкт, що представляє книгу.
//    * @returns {Promise} - Promise, що виконується при успішному додаванні книги.
//    * @throws {Error} - Викидає помилку, якщо вхідні параметри неправильного типу.
//    */
//   addBookToCollection(userId, collectionName, book) {
//     if (typeof userId !== 'string' || typeof collectionName !== 'string') {
//       throw new Error('Не вдалося додати книгу до колекції');
//     }
//     const collectionRef = doc(
//       this.db,
//       'users',
//       userId,
//       'books',
//       collectionName
//     );
//     return updateDoc(collectionRef, {
//       books: arrayUnion(book),
//     });
//   },

//   /**
//    * Видалення книги з колекції користувача.
//    * @param {string} userId - Ідентифікатор користувача.
//    * @param {string} collectionName - Назва колекції книг.
//    * @param {object} book - Об'єкт, що представляє книгу.
//    * @returns {Promise} - Promise, що виконується при успішному видаленні книги.
//    * @throws {Error} - Викидає помилку, якщо вхідні параметри неправильного типу.
//    */
//   removeBookFromCollection(userId, collectionName, book) {
//     if (typeof userId !== 'string' || typeof collectionName !== 'string') {
//       throw new Error('Невірний тип даних вхідних параметрів.');
//     }
//     const collectionRef = doc(
//       this.db,
//       'users',
//       userId,
//       'books',
//       collectionName
//     );

//     return updateDoc(collectionRef, {
//       books: arrayRemove(book),
//     });
//   },

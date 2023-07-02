import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

export const firebaseAuth = {
  auth: getAuth(app),
  /**
   * Реєстрація користувача.
   * @param {string} name - Ім'я користувача.
   * @param {string} email - Email користувача.
   * @param {string} password - Пароль користувача.
   * @returns {Promise} - Promise, що виконується при успішній реєстрації.
   * @throws {Error} - Викидає помилку, якщо вхідні параметри неправильного типу або реєстрація не вдалася.
   */
  async signUp(name, email, password) {
    if (
      typeof name !== 'string' ||
      name.trim() === '' ||
      typeof email !== 'string' ||
      email.trim() === '' ||
      typeof password !== 'string' ||
      password.trim() === ''
    ) {
      throw new Error('Невірний тип даних вхідних параметрів.');
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      await this.updateUserName(userCredential.user, name);

      await this.signIn(email, password);
    } catch (error) {
      console.error('Помилка при реєстрації користувача:', error);
      throw new Error('Не вдалося зареєструвати користувача.');
    }
  },

  /**
   * Авторизація користувача.
   * @param {string} email - Email користувача.
   * @param {string} password - Пароль користувача.
   * @returns {Promise} - Promise, що виконується при успішній авторизації.
   * @throws {Error} - Викидає помилку, якщо вхідні параметри неправильного типу.
   */
  signIn(email, password) {
    if (
      typeof email !== 'string' ||
      email.trim() === '' ||
      typeof password !== 'string' ||
      password.trim() === ''
    ) {
      throw new Error('Невірний тип даних вхідних параметрів.');
    }
    return signInWithEmailAndPassword(this.auth, email, password);
  },
  async updateUserName(user, name) {
    try {
      await updateProfile(user, {
        displayName: name,
      });
      console.log('User name updated successfully');
    } catch (error) {
      console.log('Error updating user name:', error);
    }
  },
};

export const firebaseFirestore = {
  db: getFirestore(app),

  /**
   * Створення колекції книг для користувача.
   * @param {string} userId - Ідентифікатор користувача.
   * @param {string} collectionName - Назва колекції книг.
   * @returns {Promise} - Promise, що виконується при успішному створенні колекції.
   * @throws {Error} - Викидає помилку, якщо вхідні параметри неправильного типу.
   */
  createBookCollection(userId, collectionName) {
    if (typeof userId !== 'string' || typeof collectionName !== 'string') {
      throw new Error('Невірний тип даних вхідних параметрів.');
    }
    const collectionRef = doc(
      this.db,
      'users',
      userId,
      'books',
      collectionName
    );

    return setDoc(collectionRef, {});
  },

  /**
   * Додавання книги до колекції користувача.
   * @param {string} userId - Ідентифікатор користувача.
   * @param {string} collectionName - Назва колекції книг.
   * @param {object} book - Об'єкт, що представляє книгу.
   * @returns {Promise} - Promise, що виконується при успішному додаванні книги.
   * @throws {Error} - Викидає помилку, якщо вхідні параметри неправильного типу.
   */
  addBookToCollection(userId, collectionName, book) {
    if (typeof userId !== 'string' || typeof collectionName !== 'string') {
      throw new Error('Не вдалося додати книгу до колекції');
    }
    const collectionRef = doc(
      this.db,
      'users',
      userId,
      'books',
      collectionName
    );
    return updateDoc(collectionRef, {
      books: arrayUnion(book),
    });
  },

  /**
   * Видалення книги з колекції користувача.
   * @param {string} userId - Ідентифікатор користувача.
   * @param {string} collectionName - Назва колекції книг.
   * @param {object} book - Об'єкт, що представляє книгу.
   * @returns {Promise} - Promise, що виконується при успішному видаленні книги.
   * @throws {Error} - Викидає помилку, якщо вхідні параметри неправильного типу.
   */
  removeBookFromCollection(userId, collectionName, book) {
    if (typeof userId !== 'string' || typeof collectionName !== 'string') {
      throw new Error('Невірний тип даних вхідних параметрів.');
    }
    const collectionRef = doc(
      this.db,
      'users',
      userId,
      'books',
      collectionName
    );

    return updateDoc(collectionRef, {
      books: arrayRemove(book),
    });
  },
};

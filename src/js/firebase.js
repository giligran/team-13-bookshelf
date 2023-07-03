import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

// import BookApiService from './fetch-api.js';

const backDrop = document.querySelector('#authorization');

const app = initializeApp(firebaseConfig);

let currentUser = null;

// Viktor
export function loginCheck() {
  const userBtn = document.querySelector('.user-name');
  const userPhoto = document.querySelector('#userPhoto');
  const arrow = document.querySelector('#arrow');
  const userName = localStorage.getItem('name');
  userBtn.textContent = `${userName}`;
  userPhoto.classList.remove('inactive');
  arrow.style.fill = '#ffffff';
  arrow.style.stroke = '#ffffff';
}

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
      console.log(userCredential.user);
      await this.signIn(email, password);
      await this.checkAuth();
      return userCredential;
    } catch (error) {
      console.error('Помилка при реєстрації користувача:', error, error.code);
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
    try {
      signInWithEmailAndPassword(this.auth, email, password);
      return this.checkAuth();
    } catch {
      throw new Error('Не вдалося авторизувати користувача.');
    }
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
  checkAuth() {
    return onAuthStateChanged(this.auth, user => {
      if (user) {
        console.log(user);
        return user.uid;
      } else {
      }
    });
  },
};

export const firebaseFirestore = {
  db: getFirestore(app),

  async createUserCollection() {
    try {
      const docRef = await addDoc(collection(this.db, 'users'), {
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  },
};

firebaseFirestore.createUserCollection();

import '../css/modal-authorization.css';
import { firebaseAuth } from './firebase';
const form = document.querySelector('.sign-form');
const radioButtons = document.querySelectorAll('input[type="radio"]');

const link = {
  backdrop: document.querySelector('#authorization'),
  open: document.querySelector('.heder-modal-login'),
  close: document.querySelector('.modal-authorization-close'),
  logoutBtn: document.querySelector('#logOut'),
  modWindow: document.querySelector('.modal-authorization'),
};
link.open.addEventListener('click', togleModalAuth);
link.close.addEventListener('click', togleModalAuth);

if (localStorage.getItem('exist')) {
  link.open.removeEventListener('click', togleModalAuth);
  link.open.addEventListener('click', onlogOutBtn);
  link.logoutBtn.addEventListener('click', logOut);
} else {
  link.open.addEventListener('click', togleModalAuth);
  link.open.removeEventListener('click', onlogOutBtn);
}
// console.log(localStorage.getItem('exist'));

function togleModalAuth() {
  link.backdrop.classList.toggle('visually-hidden');
}

function onlogOutBtn() {
  link.logoutBtn.classList.toggle('active');
}
function logOut(e) {
  e.preventDefault();
  localStorage.clear();
  location.reload();
}

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    if (radioButton.value === 'sign-in') {
      renderFormSignIn();
    } else {
      renderFormSignUp();
    }
  });
});

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const { name = null, email, password } = form;
  if (name) {
    firebaseAuth
      .signUp(name.value, email.value, password.value)
      .then(data => {});
    form.reset();
  } else {
    firebaseAuth.signIn(email.value, password.value);
    form.reset();
  }
  link.open.removeEventListener('click', togleModalAuth);
  link.open.addEventListener('click', onlogOutBtn);
  link.logoutBtn.addEventListener('click', logOut);
}

function renderFormSignUp() {
  form.innerHTML = `<label for="name" class="visually-hidden">name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        required
        class="sign-up-form-input name hide"
      />

      <label for="email" class="visually-hidden">eMAIL</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="eMAIL"
        required
        class="sign-up-form-input"
      />

      <label for="password" class="visually-hidden">pASSWORD</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="pASSWORD"
        required
        class="sign-up-form-input"
      />

      <button type="submit" class="submit-btn" id="submit">Sign up</button>`;
}
function renderFormSignIn() {
  form.innerHTML = `<label for="email" class="visually-hidden">eMAIL</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="eMAIL"
    required
    class="sign-up-form-input"
  />

  <label for="password" class="visually-hidden">pASSWORD</label>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="pASSWORD"
    required
    class="sign-up-form-input"
  />

  <button type="submit" class="submit-btn" id="submit">Sign in</button>`;
}

import '../css/modal-authorization.css';

import { signUpUser, signInUser } from './firebase';

const form = document.querySelector('.sign-form');
const radioButtons = document.querySelectorAll('input[type="radio"]');

// console.log(radioButtons);

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
    signUpUser(name.value, email.value, password.value);
    form.reset();
  } else {
    signInUser(email.value, password.value);
    form.reset();
  }
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

// Sign Up / Sign in
// const inBtn = document.getElementById('InBtn');
// const upBtn = document.getElementById('upBtn');
// const nameBox = document.getElementById('name');
// const subBtn = document.getElementById('submit');

// function regOn(evt) {
//   nameBox.classList.remove('hide');
//   inBtn.classList.add('active');
//   upBtn.classList.remove('active');
//   subBtn.textContent = 'Sign In';
// }
// function regOff(evt) {
//   nameBox.classList.add('hide');
//   inBtn.classList.remove('active');
//   upBtn.classList.add('active');
//   subBtn.textContent = 'Sign Up';
// }

// inBtn.addEventListener('click', regOn);
// upBtn.addEventListener('click', regOff);

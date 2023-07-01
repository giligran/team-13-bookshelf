import '../css/modal-authorization.css';

import { registerNewUser } from './firebase';

const form = document.querySelector('.sign-up-form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { name, email, password } = form;
  registerNewUser(name.value, email.value, password.value);
  form.reset();
}
console.log(form.innerHTML);

form.innerHTML = '';

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

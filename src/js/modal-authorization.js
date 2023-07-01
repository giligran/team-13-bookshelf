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


// Sign Up / Sign in
const inBtn = document.getElementById('InBtn');
const upBtn = document.getElementById('upBtn');
const emailBox = document.getElementById('email'); 
const subBtn = document.getElementById('submit');

function regOn (evt) {
    emailBox.classList.remove('hide');
    inBtn.classList.add('active');
    upBtn.classList.remove('active');
    subBtn.textContent = "Sign In";
}
function regOff (evt) {
    emailBox.classList.add('hide');
    inBtn.classList.remove('active');
    upBtn.classList.add('active');
    subBtn.textContent = "Sign Up";
}


inBtn.addEventListener('click', regOn);
upBtn.addEventListener('click', regOff);


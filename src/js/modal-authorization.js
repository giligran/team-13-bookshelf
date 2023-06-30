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

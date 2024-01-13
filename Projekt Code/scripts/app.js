import { initializeRouter } from './router.js';
import { loadHomePage } from './home.js';

function toggleHeaderButtons(displayLogin) {
  const loginButton = document.querySelector('.login-link');
  const cartButton = document.querySelector('.cart-link');
  if (displayLogin) {
    loginButton.style.display = 'block';
    cartButton.style.display = 'none';
  } else {
    loginButton.style.display = 'none';
    cartButton.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeRouter();
  const loggedInUser = localStorage.getItem('loggedInUser');
  toggleHeaderButtons(!loggedInUser);
  loadHomePage();
});

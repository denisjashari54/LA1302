import { loginPage, registerPage } from './auth.js';

function toggleHeaderButtons() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const loginButton = document.querySelector('.login-link');
  const cartButton = document.querySelector('.cart-link');
  const mainNav = document.getElementById('main-nav');

  if (loggedInUser) {
    if (loginButton) loginButton.style.display = 'none';
    if (cartButton) cartButton.style.display = 'block';
    if (mainNav) mainNav.style.display = 'block';
  } else {
    if (loginButton) loginButton.style.display = 'block';
    if (cartButton) cartButton.style.display = 'none';
    if (mainNav) mainNav.style.display = 'none';
  }
}

export const loadHomePage = () => {
  toggleHeaderButtons();

  const appElement = document.getElementById('app');
  const loggedInUser = localStorage.getItem('loggedInUser');

  if (loggedInUser) {
    document.querySelector('.top-bar').innerHTML += `
      <button id="logout-button" class="logout-button">Abmelden</button>
    `;
    appElement.innerHTML = `
      <div class="container">
        <h1>Willkommen, ${loggedInUser}!</h1>
        <p>Sie sind jetzt angemeldet.</p>
      </div>
    `;
    document.getElementById('logout-button').addEventListener('click', () => {
      localStorage.removeItem('loggedInUser');
      window.location.reload();
    });
  } else {
    appElement.innerHTML = `
      <div class="container">
        <div class="welcome-message">
          <h1>Willkommen auf unserer Webseite!</h1>
          <p>Wollen Sie sich anmelden oder registrieren?</p>
        </div>
        <button id="login-button" class="button">Anmelden</button>
        <button id="register-button" class="button">Registrieren</button>
      </div>
    `;
    document.getElementById('login-button').addEventListener('click', loginPage);
    document.getElementById('register-button').addEventListener('click', registerPage);
  }
};

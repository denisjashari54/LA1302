function saveUserToLocal(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username]) {
    throw new Error('Benutzername ist bereits vergeben.');
  }
  users[username] = password;
  localStorage.setItem('users', JSON.stringify(users));
}

function getUserFromLocal(username) {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  return users[username];
}

export async function register(username, password) {
  try {
    await new Promise(resolve => setTimeout(resolve, 100));
    saveUserToLocal(username, password);
    return { success: true };
  } catch (error) {
    console.error('Registration failed:', error);
    return { success: false, message: error.message };
  }
}

export async function login(username, password) {
  try {
    await new Promise(resolve => setTimeout(resolve, 100));

    const userPassword = getUserFromLocal(username);
    if (!userPassword || userPassword !== password) {
      throw new Error('Benutzername oder Passwort ist falsch.');
    }

    localStorage.setItem('loggedInUser', username);
    window.location.reload();

    return { success: true };
  } catch (error) {
    console.error('Login failed:', error);
    return { success: false, message: error.message };
  }
}

export function registerPage() {
  document.getElementById('app').innerHTML = `
    <div class="auth-container">
      <div class="auth-box">
        <h1>Registrieren</h1>
        <form id="register-form">
          <input type="text" id="username" placeholder="Benutzername" minlength="4" required />
          <input type="password" id="password" placeholder="Passwort" minlength="4" required />
          <button type="submit" class="button">Registrieren</button>
        </form>
        <p>Schon registriert? <a href="#login">Anmelden</a></p>
      </div>
    </div>
  `;

  document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const result = await register(username, password);
    if (result.success) {
      alert('Registrierung erfolgreich');
      window.location.hash = '#login';
    } else {
      alert('Registrierung fehlgeschlagen: ' + result.message);
    }
  });
}

export function loginPage() {
  document.getElementById('app').innerHTML = `
    <div class="auth-container">
      <div class="auth-box">
        <h1>Anmelden</h1>
        <form id="login-form">
          <input type="text" id="username" placeholder="Benutzername" required />
          <input type="password" id="password" placeholder="Passwort" required />
          <button type="submit" class="button">Anmelden</button>
        </form>
        <p>Noch kein Konto? <a href="#register">Registrieren</a></p>
      </div>
    </div>
  `;

  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const result = await login(username, password);
    if (result.success) {
      alert('Anmeldung erfolgreich');
      window.location.hash = '#/';
    } else {
      alert('Anmeldung fehlgeschlagen: ' + result.message);
    }
  });
}

export function loadHomePage() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  document.getElementById('app').innerHTML = `
    <h1>Willkommen ${loggedInUser ? loggedInUser : 'Gast'}</h1>
    <p>Das ist die Startseite. ${loggedInUser ? '' : 'Bitte melden Sie sich an oder registrieren Sie sich.'}</p>
    ${loggedInUser ? '<button onclick="logout()">Abmelden</button>' : ''}
  `;
}

export function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.reload();
}

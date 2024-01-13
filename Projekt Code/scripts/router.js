import { registerPage, loginPage } from './auth.js';
import { loadHomePage } from './home.js';
import { loadPorschePage } from './porsche.js';
import { loadBMWPage } from './bmw.js';
import { loadAudiPage } from './audi.js';
import { loadMercedesPage } from './mercedes.js';

export const initializeRouter = () => {
  const navigateTo = (path) => {
    console.log("Navigating to:", path);
    const page = routes[path] || loadHomePage;
    page();
  };

  window.addEventListener('hashchange', () => navigateTo(window.location.hash));

  if (!window.location.hash) {
    window.location.hash = '#/';
  } else {
    navigateTo(window.location.hash);
  }
};

const routes = {
  '#register': registerPage,
  '#login': loginPage,
  '#/': loadHomePage,
  '#porsche': loadPorschePage,
  '#bmw': loadBMWPage,
  '#audi': loadAudiPage,
  '#mercedes': loadMercedesPage,
};



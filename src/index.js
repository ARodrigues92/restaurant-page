import appendNav from './modules/nav';
import appendHome from './modules/home';
import appendMenuDisplay from './modules/menu-display';

const navContainer = document.getElementById('nav-container');
const container = document.getElementById('content');
appendNav(navContainer);
appendHome(container);

const goToHome = () => {
  container.innerHTML = '';
  appendHome(container);
};

const goToMenu = () => {
  container.innerHTML = '';
  appendMenuDisplay(container);
};

const goToContacts = () => {
  container.innerHTML = '';
};

const links = document.querySelectorAll('.nav-links');

links.forEach(link => {
  link.addEventListener('click', () => {
    if (link.textContent === 'Home') {
      goToHome();
    } else if (link.textContent === 'Menu') {
      goToMenu();
    } else {
      goToContacts();
    }
  });
});

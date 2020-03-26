import appendNav from './modules/nav';
import appendHome from './modules/home';

const container = document.getElementById('content');
appendNav(container);
appendHome(container);

const goToHome = () => {
  container.innerHTML = '';
  appendNav(container);
  appendHome(container);
};

const goToMenu = () => {
  container.innerHTML = '';
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

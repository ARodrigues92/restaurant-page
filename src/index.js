import appendNav from './modules/nav';
import appendHome from './modules/home';

const container = document.getElementById('content');
appendNav(container);
appendHome(container);

const links = document.querySelectorAll('.nav-links');

links.forEach(link => {
  link.addEventListener('click', () => {
    if (link.textContent === 'Home') {
      console.log('Home');
    } else if (link.textContent === 'Menu') {
      console.log('Menu');
    } else {
      console.log('Contacts');
    }
  });
});

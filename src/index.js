import nav from './modules/nav';
import homePage from './modules/home';

const content = document.getElementById('content');
nav(content);
homePage(content);

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

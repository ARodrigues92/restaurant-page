const homePage = container => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const items = ['Home', 'Menu', 'Contacts'];

  items.forEach(element => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('nav-links');
    a.innerText = element;
    li.append(a);
    ul.append(li);
  });

  nav.append(ul);
  container.append(nav);
  return container;
};

export default homePage;

const homePage = container => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const items = ['Home', 'Menu', 'Contacts'];

  items.forEach(element => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerText = element;
    li.append(a);
    ul.append(li);
  });

  nav.append(ul);

  const textContainer = document.createElement('div');
  textContainer.setAttribute('id', 'text-container');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerText = "Welcome to Odin's";
  p.innerText = 'Lorem ipsum dolor sit amet';

  textContainer.append(h1);
  textContainer.append(p);

  container.append(nav);
  container.append(textContainer);
  return container;
};

export default homePage;

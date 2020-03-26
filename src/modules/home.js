const homePage = container => {
  const textContainer = document.createElement('div');
  textContainer.setAttribute('id', 'text-container');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerText = "Welcome to Odin's";
  p.innerText = 'Lorem ipsum dolor sit amet';

  textContainer.append(h1);
  textContainer.append(p);

  container.append(textContainer);
  return container;
};

export default homePage;

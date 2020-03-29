import { foods, drinks } from './menu';

const menuDisplay = container => {
  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('id', 'menu-container');

  const foodMenu = document.createElement('div');
  foodMenu.classList.add('menu');
  const foodTitle = document.createElement('p');
  foodTitle.innerText = 'Food Menu';
  foodTitle.classList.add('menu-title');
  foodMenu.append(foodTitle);

  foods.forEach(food => {
    const itemContainer = document.createElement('div');
    const itemTitle = document.createElement('p');
    const itemDescription = document.createElement('p');
    const itemPrice = document.createElement('p');

    itemContainer.classList.add('item-container');
    itemTitle.classList.add('item-title');
    itemDescription.classList.add('item-description');
    itemPrice.classList.add('item-price');

    itemTitle.innerText = food.name;
    itemDescription.innerText = food.description;
    itemPrice.innerText = `${food.price} €`;

    itemContainer.append(itemTitle);
    itemContainer.append(itemPrice);
    itemContainer.append(itemDescription);

    foodMenu.append(itemContainer);
  });

  menuContainer.append(foodMenu);

  const drinksMenu = document.createElement('div');
  drinksMenu.classList.add('menu');
  const drinksTitle = document.createElement('p');
  drinksTitle.innerText = 'Drinks Menu';
  drinksTitle.classList.add('menu-title');
  drinksMenu.append(drinksTitle);

  drinks.forEach(drink => {
    const itemContainer = document.createElement('div');
    const itemTitle = document.createElement('p');
    const itemPrice = document.createElement('p');

    itemContainer.classList.add('item-container');
    itemTitle.classList.add('item-title');
    itemPrice.classList.add('item-price');

    itemTitle.innerText = drink.name;
    itemPrice.innerText = `${drink.price} €`;

    itemContainer.append(itemTitle);
    itemContainer.append(itemPrice);

    drinksMenu.append(itemContainer);
  });

  menuContainer.append(drinksMenu);

  container.append(menuContainer);

  return container;
};

export default menuDisplay;

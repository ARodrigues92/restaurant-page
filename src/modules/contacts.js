const contacts = container => {
  const adressDiv = document.createElement('div');
  adressDiv.setAttribute('id', 'adress');
  adressDiv.classList.add('contacts');

  const contactsDiv = document.createElement('div');
  contactsDiv.setAttribute('id', 'contacts');
  contactsDiv.classList.add('contacts');

  const adressTitle = document.createElement('p');
  const adress = document.createElement('p');
  const contactsTitle = document.createElement('p');
  const email = document.createElement('p');
  const phone = document.createElement('p');

  adressTitle.innerText = 'Come visit us at:';
  adress.innerText = 'Random Street nº1337, Barcelona';
  contactsTitle.innerText = 'Contact us via e-mail or phone at:';
  email.innerText = 'randomrestaurant@randommail.com';
  phone.innerText = '+351 000 000 000';

  adressDiv.append(adressTitle, adress);
  contactsDiv.append(contactsTitle, email, phone);
  container.append(adressDiv, contactsDiv);
};

export default contacts;

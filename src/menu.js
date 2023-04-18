import firstImg from './menu0.jpg'

function addMenu(container, img, dish, price) {
  const newMenu = document.createElement('div');
  newMenu.classList.add('menu');

  const newImg = document.createElement('img');
  newImg.src = img;

  const dishName = document.createElement('h2');
  dishName.textContent = dish; 
  
  const dishPrice = document.createElement('p');
  dishPrice.textContent = price;

  newMenu.appendChild(newImg)
  newMenu.appendChild(dishName);
  newMenu.appendChild(dishPrice);

  container.appendChild(newMenu)
}

export default function menuContent(append) {
  const container = document.createElement('div');
  container.classList.add('menu-container');

  const title = document.createElement('h1');
  title.classList.add('menu-title');
  title.textContent = 'Menu';
  container.appendChild(title);

  const dinner = document.createElement('h2');
  dinner.classList.add('dinner')
  dinner.textContent = 'Dinner'
  container.appendChild(dinner)


  // MENUES
  const menuesContainer = document.createElement('div');
  menuesContainer.classList.add('menuContainer');
  container.appendChild(menuesContainer);

  addMenu(menuesContainer, firstImg, 'pescado', '$10')
  

  append.appendChild(container);
}
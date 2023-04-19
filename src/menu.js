import firstImg from './menu0.jpg'

function addMenu(container, img, dish, price) {
  const newMenu = document.createElement('div');
  newMenu.classList.add('menu');

  const imgContainer = document.createElement('div');
  imgContainer.style.backgroundImage = `url(${img})`;
  imgContainer.classList.add('imageMenu');

  const dishInfo = document.createElement('div');
  dishInfo.classList.add('dishInfo')

  const dishPlate = document.createElement('p');
  dishPlate.textContent = dish;

  const dishPrice = document.createElement('p');
  dishPrice.textContent = price
 
  
  dishInfo.appendChild(dishPlate)
  dishInfo.appendChild(dishPrice)
  newMenu.appendChild(imgContainer)
  newMenu.appendChild(dishInfo);

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

  addMenu(menuesContainer, firstImg, 'pollo al horno con papas', '$100')
    addMenu(menuesContainer, firstImg, 'pollo al horno con papas', '$100')
    addMenu(menuesContainer, firstImg, 'pollo al horno con papas', '$100')
    addMenu(menuesContainer, firstImg, 'pollo al horno con papas', '$100')


  append.appendChild(container);
}
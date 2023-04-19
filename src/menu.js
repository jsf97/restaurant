import firstImg from './menu0.jpg'
import secondImg from './menu1.jpg'
import thirdImg from './menu2.jpg'
import fourthImg from './menu3.jpg'






function addMenu(container, image, dish, platePrice) {
  const newMenu = document.createElement('div');
  newMenu.classList.add('menu');

  const img = document.createElement('div');
  img.classList.add('dishImg');
  img.style.backgroundImage = `url(${image})`

  const dishInfo = document.createElement('div');
  dishInfo.classList.add('dishInfo');

  const plate = document.createElement('h2');
  plate.textContent = dish;
  dishInfo.appendChild(plate)

  const price = document.createElement('p');
  price.textContent = '$' + platePrice
  dishInfo.appendChild(price)

  newMenu.appendChild(img)
  newMenu.appendChild(dishInfo)
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

    addMenu(menuesContainer, firstImg, 'Pollo al horno con papas', '100')
    addMenu(menuesContainer, secondImg, 'Asado', '100')
    addMenu(menuesContainer, thirdImg, 'Entraña', '100')
    addMenu(menuesContainer, fourthImg, 'Costillar', '100')


  append.appendChild(container);
}
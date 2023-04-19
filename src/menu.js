import firstImg from './menu0.jpg'
import secondImg from './menu1.jpg'
import thirdImg from './menu2.jpg'
import fourthImg from './menu3.jpg'






function addMenu(container, dish, price) {
  const newMenu = document.createElement('div');
  newMenu.classList.add('menu');

  const img = document.createElement('div');
  img.classList.add('dishImg');
  img.textContent = 'aca va la img'

  const dishInfo = document.createElement('div');
  dishInfo.classList.add('dishInfo');

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

    addMenu(menuesContainer)
    addMenu(menuesContainer)
    addMenu(menuesContainer)
    addMenu(menuesContainer)


  append.appendChild(container);
}
const content = document.getElementById('content');
const navbar = document.createElement('nav')
let menuState = false;

import './style.css'
import menuContent from './menu.js'

content.classList.add('abc')

const home = document.createElement('div');
home.textContent = 'Home'
const menu = document.createElement('div');
menu.textContent = 'Menu'
const contact = document.createElement('div');
contact.textContent = 'Contact'

navbar.appendChild(home)
navbar.appendChild(menu)
navbar.appendChild(contact)

navbar.classList.add('nav')

content.appendChild(navbar)

menuContent(content);
// menu.addEventListener('click', ()=> {
//   if (menuState == false) {
//     menuContent(content);
//     menuState = true;
//   }
//   else {
//     alert(' ya estas en el menu papa')
//   }
// })
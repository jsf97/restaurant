const content = document.getElementById('content');
const navbar = document.createElement('nav')

import './style.css'

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

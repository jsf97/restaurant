// CONST GLOBALS
const content = document.getElementById('content');
const navbar = document.createElement('nav')
content.classList.add('abc')
//

// IMPORTS
import './style.css'
import menuContent from './menu.js'
import contactContent from './content.js'
//


// CREATING NAVBAR AND APPENDING IT TO CONTENT
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
//



//EVENT TO CHANGE CONTENT UI TO MENU
let menuState = false;
menu.addEventListener('click', ()=> {
   if (menuState == false) {
     menuContent(content);
     menuState = true;
   }
   else {
     alert(' ya estas en el menu papa')
   }
 })
 //

 contactContent(content);
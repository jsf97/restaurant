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

//SECTION TO APPEND CONTAINERS
const section = document.createElement('div');
section.classList.add('section');
content.appendChild(section)
//


menu.addEventListener('click', ()=> {
  section.textContent = ''
  menuContent(section);
})

contact.addEventListener('click', ()=> {
  section.textContent = ''
  contactContent(section);
})



//EVENT TO CHANGE CONTENT UI TO MENU
// let menuState = false;
// menu.addEventListener('click', ()=> {
//    if (menuState == false) {
//     menuContent(content);
//     menuState = true
//    }
//    else if (menuState == true) {
//     alert('ya estas')
//    }
//  })
 //


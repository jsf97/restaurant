import component from './content.js'
import homecontent from './home.js';
const content = document.getElementById('content');
// Function to get Navbar elements
  const nav = document.getElementById('navbar');
  const home = document.createElement('div');
  home.textContent = 'Home'
  nav.appendChild(home)
  const menu = document.createElement('div');
  menu.textContent = 'Menu'
  nav.appendChild(menu)
  const contact = document.createElement('div');
  contact.textContent = 'Contact'
  nav.appendChild(contact)
  nav.style = 'display: flex; justify-content: center; gap: 50px; font-size: 2em';
//

component(content)
home.addEventListener('click', ()=> {
  alert('a')
  homecontent(content);
})

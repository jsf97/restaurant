//CREATE CONTACT FUNCTION
  function createContact(append, name) {
    // CREATING CONTACT CONTAINER
    const newContact = document.createElement('div');
    newContact.classList.add('contact');
    //

    // CREATING CONTACT NAME
    const contactName = document.createElement('div');
    contactName.textContent = name;
    newContact.appendChild(contactName)
    contactName.classList.add('contact-name')
    //

    //CREATING CONTACT INFO
    const position = document.createElement('div');
    position.textContent = 'Chef';
    position.classList.add('position-info');


    const numero = document.createElement('div');
    numero.textContent = '555-555-5554';
    numero.classList.add('numero-info');

    const mail = document.createElement('div');
    mail.textContent = 'puto@fake.com';
    mail.classList.add('mail-info');

    newContact.appendChild(position)
    newContact.appendChild(numero)
    newContact.appendChild(mail)
    //

    // CREATING CONTACT IMG
    const contactImg = document.createElement('div');
    contactImg.classList.add('contact-img')
    newContact.appendChild(contactImg)
    //
    
    append.appendChild(newContact)
  }
//

export default function contactContent(append) {
  // CONTAINER ELEMENT
  const container = document.createElement('div');
  container.classList.add('content-container');
  //

  //CONTACT TITLE ELEMENT
  const title = document.createElement('h1');
  title.textContent = 'Contact Us';
  title.classList.add('title');
  container.appendChild(title);
  //

  //FIRST CONTANCT ELEMENT
  createContact(container, 'juan');
  createContact(container, 'juan');

  //
  


  append.appendChild(container);
}
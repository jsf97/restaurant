
export default function menuContent(append) {
  const container = document.createElement('div');
  container.classList.add('menu-container');

  const title = document.createElement('h1');
  title.classList.add('menu-title');
  title.textContent = 'Menu';
  container.appendChild(title);

  const choice = document.createElement('h2');
  choice.classList.add('menu-choice');
  choice.textContent = 'Almuerzos';
  container.appendChild(choice);

  const choiceContent = document.createElement('div');
  choiceContent.classList.add('menu-choice__content');
  container.appendChild(choiceContent);
  for(let i = 0; i <= 5; i++) {
    const lunchContainer = document.createElement('div');
    lunchContainer.classList.add('lunch-container')
    lunchContainer.textContent = 'asd'
    choiceContent.appendChild(lunchContainer)
  }

  choiceContent.children[0].textContent = 'a'

  append.appendChild(container);
}
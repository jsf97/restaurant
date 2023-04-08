const content = document.getElementById('content');
import contentimg from './content.jpg';

export default function component (div) {
  let image = document.createElement('img');
  image.src = contentimg;

  let header = document.createElement('h1');
  header.innerHTML = 'This is the header';

  let para = document.createElement('p');
  para.innerHTML = 'This is a lot of paragraph text';

  div.appendChild(image);
  div.appendChild(header);
  div.appendChild(para);
}

export default function homecontent (div) {
  const titleRestaurant = document.createElement('h1');
  titleRestaurant.textContent = 'El restaurante copado'
  
  const aboutUs = document.createElement('div');
  const aboutUsContent = document.createElement('p');
  aboutUsContent.textContent = `Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.

  Goldilocks`
  aboutUs.appendChild(aboutUsContent);
  aboutUs.style = 'border: 1px solid red;'

  const hours = document.createElement('div');
  const hoursContent = document.createElement('p');
  hoursContent.textContent = `Hours
  Sunday: 8am - 8pm
  
  Monday: 6am - 6pm
  
  Tuesday: 6am - 6pm
  
  Wednesday: 6am - 6pm
  
  Thursday: 6am - 10pm
  
  Friday: 6am - 10pm
  
  Saturday: 8am - 10pm`
  hours.appendChild(hoursContent);
  hours.style = 'border: 1px solid blue;'

  const location = document.createElement('div');
  const locationContent = document.createElement('p');
  locationContent.textContent = `Location
  123 Forest Drive, Forestville, Maine`
  location.appendChild(locationContent);
  location.style = 'border: 1px solid green;'

  div.innerHTML(titleRestaurant, aboutUs, hours, location)
  div.innerHTML(aboutUs)
  div.innerHTML(hours)
  div.innerHTML(location)
}
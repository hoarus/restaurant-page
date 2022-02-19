import './style.css';
import './normalise.css';
import elephants_image from './images/elephants_sitting.jpeg';


// Create Content // 

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

function generateNavbar() {
  const nav = document.createElement('nav');
  nav.setAttribute('class','navbar');
  content.appendChild(nav);

  createElement(nav, "div", "nav-item", "Home");
  createElement(nav, "div", "nav-item", "Menu");
  createElement(nav, "div", "nav-item", "Contact Us");
}


function createElement(parent, type, classname, content) {
  const newElement = document.createElement(type);
  newElement.setAttribute('class',classname);
  newElement.textContent = content;
  parent.appendChild(newElement);
}



generateNavbar();

// Need to spit out the below into the index.js file

const bannerImage = new Image();
bannerImage.src = elephants_image;
content.appendChild(bannerImage);





import { createElement } from './helpers.js'
import { generateHomePage } from './index.js'
import { generateMenuPage } from './menu.js'
import { generateContactPage } from './contact.js'

function generateNavbar() {

  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  nav.classList.add('no-select')
  document.body.appendChild(nav);

  createElement(nav, "div", "nav-item", "Home", "home-link");
  createElement(nav, "div", "nav-item", "Menu", "menu-link");
  createElement(nav, "div", "nav-item", "Contact Us", "contact-link");

  let homeLink = document.querySelector('#home-link');
  let menuLink = document.querySelector('#menu-link');
  let contactLink = document.querySelector('#contact-link');

    // Create Content // 
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);

  homeLink.addEventListener('click', () => {
    clearActiveLinks();
    homeLink.classList.add("active-nav");
    generateHomePage(content);
  });

  
  menuLink.addEventListener('click', () => {
    clearActiveLinks();
    menuLink.classList.add("active-nav");
    generateMenuPage(content);
  });

  contactLink.addEventListener('click', () => {
    clearActiveLinks();
    contactLink.classList.add("active-nav");
    generateContactPage(content);
  });

  function clearActiveLinks() {
    homeLink.classList.remove("active-nav");
    menuLink.classList.remove("active-nav");
    contactLink.classList.remove("active-nav");
  }
}

export { generateNavbar };
import { createElement } from './helpers.js'
import { generateHomePage } from './index.js'
import { generateMenuPage } from './menu.js'
import { generateContactPage } from './contact.js'

function generateNavbar() {

  createNavbarSkeleton();

  // Create Content Div// 
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);

  let nav = document.querySelector('.navbar');
  createNavLinks(nav);
  configureNavLinks(content);
  generateHomePage(content);
  
}

function createNavbarSkeleton() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  nav.classList.add('no-select')
  document.body.appendChild(nav);
}

function createNavLinks(navbar) {
  createElement(navbar, "div", "nav-item", "Home", "home-link");
  createElement(navbar, "div", "nav-item", "Menu", "menu-link");
  createElement(navbar, "div", "nav-item", "Contact Us", "contact-link");
}

function configureNavLinks(content) {
  let homeLink = document.querySelector('#home-link');
  homeLink.classList.add("active-nav");
  let menuLink = document.querySelector('#menu-link');
  let contactLink = document.querySelector('#contact-link');

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
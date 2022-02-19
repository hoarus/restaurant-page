import './style.css';
import './normalise.css';
import elephants_image from './images/elephants_sitting.jpeg';
import { createElement, createImage } from './helpers.js'
import { generateNavbar } from './navbar.js';

let currentPage = "Home";


generateNavbar();

generateHomePage();



// Generate Page

function generateHomePage(content) {
  content.textContent = '';

  createElement(content, 'h1', 'site-header', 'A Restaurant for Elephants');

  createImage(content, elephants_image, 'banner-image');

  let textInformation = "Welcome to our restaurant, its all very very good.";

  createElement(content, 'div', 'about-text', textInformation);

  let aboutText = document.querySelector('.about-text');
}

export { generateHomePage };


import { createElement, createImage } from './helpers.js'

// Generate Page

function generateMenuPage(content) {
  content.textContent = '';

  createElement(content, 'h1', 'site-header', 'Menu Page');

}

export { generateMenuPage };


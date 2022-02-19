import { createElement, createImage } from './helpers.js'

// Generate Page

function generateContactPage(content) {
  content.textContent = '';

  createElement(content, 'h1', 'site-header', 'Contact Page');

}

export { generateContactPage };


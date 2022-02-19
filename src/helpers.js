function createElement(parent, type, classname, content, id) {
  const newElement = document.createElement(type);
  newElement.setAttribute('class',classname);
  if (typeof id !="undefined" ) {
    newElement.setAttribute('id', id);
  }
  newElement.textContent = content;
  parent.appendChild(newElement);
}

function createImage(parent, source, classname) {
  const newImage = new Image();
  newImage.src = source;
  newImage.classList.add(classname);
  parent.appendChild(newImage);
}

function changePage() {
  if (currentPage == "Home") {
    generateNavbar();
    generateHomePage();
  } else {
    content.textContent = "";
  }
}

export { createElement, createImage, changePage };
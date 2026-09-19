// Store the selected elements that we are going to use.
const nav = document.querySelector('#site-nav');
const menu = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show')
    menu.classList.toggle('show', isOpen);
    menu.setAttribute('aria-expanded', isOpen);
});

const year = new Date().getFullYear();
document.getElementById('currentyear').textContent = year;
document.getElementById('lastModified').textContent = document.lastModified; 
const nav = document.querySelector('.nav-wrapper');
const menu = document.querySelector('.icon-menu');
menu.addEventListener('click', openMenu);
function openMenu() {  
    nav.classList.toggle('open');
}
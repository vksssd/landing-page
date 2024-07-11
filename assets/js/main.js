// show menu

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


// show
    // validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// hide
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// remove mobile menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const  navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(element => {
    element.addEventListener('click', linkAction)
});
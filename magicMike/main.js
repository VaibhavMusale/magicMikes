const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    
    const isOpen =navLinks.classList.contains('open');
    menuBtnIcon.setAttribute("class",isOpen? "ri-close-line" : "ri-menu-line" )
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});

const ScrollRevealOption ={
    distance :"50px",
    origin:"bottom",
    duration :1000,
};
ScrollReveal().reveal(".header__image img",{
    ...ScrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header__content h2",{
    ...ScrollRevealOption,
    origin:"top",
    delay : 200,
});
ScrollReveal().reveal(".header__content h1",{
    ...ScrollRevealOption,
    origin:"bottom",
    delay: 700,
});

ScrollReveal().reveal(".banner__card",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 500,
    interval: 500,
});

ScrollReveal().reveal(".order__card",{
    ...ScrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".event__content",{
    ...ScrollRevealOption,
    delay: 100,
    interval: 1500,
});
ScrollReveal().reveal(".event__image",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 500,
    interval: 500,
});

ScrollReveal().reveal(".reservation__container",{
    ...ScrollRevealOption,
    interval: 500,
});
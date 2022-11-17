const menuBars = document.querySelector(".menu-responsive a.icon-menu");

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle('active');
}

menuBars.addEventListener('click', toggleMenu);
menuBars.addEventListener('touchstart', toggleMenu);
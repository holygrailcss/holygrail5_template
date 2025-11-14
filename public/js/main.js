// Toggle del menú móvil/desktop
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');

if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', () => {
        headerNav.classList.toggle('active');
    });
}

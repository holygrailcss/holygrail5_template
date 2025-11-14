// Toggle del menú móvil/desktop
const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.getElementById('header-nav');

if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', () => {
        // Toggle entre mostrar y ocultar el menú en móvil
        headerNav.classList.toggle('hg-d-flex');
        headerNav.classList.toggle('hg-d-none');
    });
}

// Cerrar menú al hacer click en un enlace (UX mejorada en móvil)
if (headerNav) {
    const navLinks = headerNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cerrar en móvil (< 992px)
            if (window.innerWidth < 992) {
                headerNav.classList.remove('hg-d-flex');
                headerNav.classList.add('hg-d-none');
            }
        });
    });
}

(function() {
    const openButton = document.querySelector('.nav_menu');          
    const menu = document.querySelector('.nav_link--menu');           
    const closeMenu = document.querySelector('.nav_close');

    // Abrir menú
    openButton.addEventListener('click', () => {
        menu.classList.add('nav_link--show');  
    });

    // Cerrar menú con el botón close
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav_link--show');
    });

    // Cerrar menú al hacer click en cualquiera de los enlaces
    const links = document.querySelectorAll('.nav_link--menu .nav_links');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav_link--show');
        });
    });
})();

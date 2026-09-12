document.addEventListener('DOMContentLoaded', function() {
    const botonHamburguesa = document.querySelector('.hamburguesa');
    const menuNavegacion = document.querySelector('.nav');

    // 1. Abrir/Cerrar el menú principal con el botón hamburguesa
    if (botonHamburguesa && menuNavegacion) {
        botonHamburguesa.addEventListener('click', function() {
            botonHamburguesa.classList.toggle('activo');
            menuNavegacion.classList.toggle('abierto');
        });
    }

    // 2. Permitir que los ítems con submenú se desplieguen al tocarlos en el celu
    const itemsConSubmenu = document.querySelectorAll('.nav-item');
    itemsConSubmenu.forEach(item => {
        const link = item.querySelector('.nav-link');
        const submenu = item.querySelector('.submenu');
        
        if (submenu) {
            link.addEventListener('click', function(e) {
                // Si la pantalla es chica (modo celular)
                if (window.innerWidth <= 800) {
                    e.preventDefault(); // Evita que salte de página de una
                    item.classList.toggle('abierto');
                }
            });
        }
    });
});
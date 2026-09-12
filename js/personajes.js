const grupos = document.querySelectorAll('.seccion-grupo');
const hash = window.location.hash.replace('#', '');

function filtrar() {
  const id = window.location.hash.replace('#', '');

  grupos.forEach(g => {
    // si no hay hash, muestra todos
    g.style.display = (!id || g.id === id) ? '' : 'none';
  });
}

filtrar();

// si el usuario cambia de sección sin recargar, vuelve a filtrar
window.addEventListener('hashchange', filtrar);
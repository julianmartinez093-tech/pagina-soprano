

// Lee el ?t= de la URL. Si no hay nada, muestra la temporada 1.
const params = new URLSearchParams(window.location.search);
const num = params.get('t') || '1';
const datos = temporadas[num];

const titulo = document.getElementById('tituloTemporada');
const meta = document.getElementById('metaTemporada');
const lista = document.getElementById('listaEpisodios');

if (!datos) {
  titulo.textContent = 'Temporada no encontrada';
} else {
  titulo.textContent = 'Temporada ' + num;
  meta.textContent = datos.anio + ' · ' + datos.episodios.length + ' episodios';
  document.title = 'Temporada ' + num + ' — Los Sopranos';

  if (datos.episodios.length === 0) {
    lista.innerHTML = '<p class="aviso-vacio">Episodios en camino.</p>';
  } else {
    datos.episodios.forEach((ep, i) => {
      const card = document.createElement('article');
      card.className = 'episodio-card';
      card.innerHTML = `
        <div class="episodio-img">
          <img src="${ep.img}" alt="${ep.titulo}">
        </div>
        <div class="episodio-info">
          <span class="episodio-num">Episodio ${i + 1}</span>
          <h3>${ep.titulo}</h3>
          <p>${ep.sinopsis}</p>
        </div>`;
      lista.appendChild(card);
    });
  }
}
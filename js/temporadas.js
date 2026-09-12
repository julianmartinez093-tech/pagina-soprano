document.querySelectorAll('.temporada-card').forEach(card => {
  const num = card.id.replace('t', '');
  const datos = temporadas[num];
  if (!datos || datos.episodios.length === 0) return;

  // arma la lista que se despliega al pasar el mouse
  const preview = document.createElement('div');
  preview.className = 'episodios-preview';

  datos.episodios.forEach((ep, i) => {
  const mini = document.createElement('div');
  mini.className = 'mini-episodio';
  mini.innerHTML = `
    <img src="${ep.img}" alt="${ep.titulo}">
    <span>${i + 1}. ${ep.titulo}</span>`;
  preview.appendChild(mini);
  });

  card.appendChild(preview);

  // toda la tarjeta es clickeable
  card.addEventListener('click', () => {
    window.location.href = 'temporada.html?t=' + num;
  });
});
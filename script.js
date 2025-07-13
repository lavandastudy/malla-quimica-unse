const mallaDiv = document.getElementById('malla');
const filtroAnio = document.getElementById('filtro-anio');
const filtroModulo = document.getElementById('filtro-modulo');

function renderMalla() {
  mallaDiv.innerHTML = '';

  const anioSeleccionado = filtroAnio.value;
  const moduloSeleccionado = filtroModulo.value;

  const materiasFiltradas = materias.filter(m => {
    const coincideAnio = anioSeleccionado === "todos" || m.año.toString() === anioSeleccionado;
    const coincideModulo = moduloSeleccionado === "todos" || m.modulo.toString() === moduloSeleccionado;
    return coincideAnio && coincideModulo;
  });

  materiasFiltradas.forEach(m => {
    const el = document.createElement('div');
    el.className = 'materia';
    el.innerText = `${m.nombre} (${m.año}° año - Módulo ${m.modulo})`;
    el.onclick = () => {
      m.aprobada = !m.aprobada;
      actualizarEstados();
      renderMalla();
    };
    if (m.aprobada) el.classList.add('aprobada');
    else if (m.habilitada) el.classList.add('habilitada');
    mallaDiv.appendChild(el);
  });
}

function actualizarEstados() {
  materias.forEach(m => {
    if (m.aprobada) {
      m.habilitada = false;
      return;
    }
    m.habilitada = m.correlativas.every(cod => {
      const cor = materias.find(x => x.codigo === cod);
      return cor && cor.aprobada;
    });
  });
}

// Eventos de cambio de filtros
filtroAnio.addEventListener('change', renderMalla);
filtroModulo.addEventListener('change', renderMalla);

// Inicial
actualizarEstados();
renderMalla();

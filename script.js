
const mallaDiv = document.getElementById('malla');

function renderMalla() {
  mallaDiv.innerHTML = '';
  materias.forEach(m => {
    const el = document.createElement('div');
    el.className = 'materia';
    el.innerText = m.nombre;
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

actualizarEstados();
renderMalla();

const fechaEl = document.getElementById('fecha');

if (fechaEl) {
  const hoy = new Date();
  fechaEl.textContent = hoy.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/* =========================================================
   PROF. MATEMÁTICAS — Lógica de la página
   ========================================================= */

/* ===== NÚMERO DE WHATSAPP (cámbialo aquí) ===== */
const NUMERO_WA = '573172147235'; // formato internacional, sin + ni espacios

/* ---------- Año dinámico en el footer ---------- */
const anioEl = document.getElementById('anio');
if (anioEl) {
  anioEl.textContent = new Date().getFullYear();
}

/* ---------- Menú móvil (hamburguesa) ---------- */
const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');

if (hamburguesa && menu) {
  hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('abierto');
  });

  // Cierra el menú al pulsar cualquier enlace
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('abierto'));
  });
}

/* ---------- Formulario → WhatsApp ---------- */
const formWa = document.getElementById('form-wa');

if (formWa) {
  formWa.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre    = document.getElementById('nombre').value.trim();
    const nivel     = document.getElementById('nivel').value;
    const modalidad = document.getElementById('modalidad').value;
    const tema      = document.getElementById('tema').value.trim() || 'Por definir';
    const mensaje   = document.getElementById('mensaje').value.trim() || 'Sin detalles adicionales';

    const texto =
      `Hola, soy ${nombre}.%0A` +
      `Nivel educativo: ${nivel}.%0A` +
      `Modalidad: ${modalidad}.%0A` +
      `Tema de interés: ${tema}.%0A` +
      `Necesidad: ${mensaje}`;

    window.open(`https://wa.me/${NUMERO_WA}?text=${texto}`, '_blank');
  });
}
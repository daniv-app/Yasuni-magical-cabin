// animación estilo revista
let currentPortrait = 0;
const portraits = document.querySelectorAll('.portrait-slide');
const totalPortraits = portraits.length;

function nextPortrait() {
  const prev = currentPortrait;
  currentPortrait = (currentPortrait + 1) % totalPortraits;

  portraits[prev].classList.remove('active');
  portraits[prev].classList.add('prev');
  portraits[currentPortrait].classList.add('active');

  setTimeout(() => {
    portraits[prev].classList.remove('prev');
  }, 800);
}

// Cajas flotantes que siguen al peregrino
const floatingBoxes = { 1: null, 2: null };

function showPrayerBox(num) {
  const box = document.getElementById(`prayer${num}`);
  box.style.display = 'block';
  floatingBoxes[num] = box;

  // Posicionar cerca de la silla
  const chair = document.getElementById(`chair${num}`);
  const chairRect = chair.getBoundingClientRect();
  box.style.left = `${chairRect.left + chairRect.width / 2}px`;
  box.style.top = `${chairRect.top - 100}px`;

  // Seguir al mouse dentro de la cocina
  document.addEventListener('mousemove', (e) => moveFloatingBox(e, num));
}

function moveFloatingBox(e, num) {
  if (!floatingBoxes[num]) return;
  const box = floatingBoxes[num];
  const rect = document.querySelector('.kitchen').getBoundingClientRect();
  
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  // Límites suaves
  x = Math.max(50, Math.min(x, rect.width - 300));
  y = Math.max(100, Math.min(y, rect.height - 200));

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

// ... (mantén el resto del script: nombres, oración, chispas, etc.) ...

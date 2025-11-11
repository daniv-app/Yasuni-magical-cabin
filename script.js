// Yasuní Magical Cabin | Templo Sagrado
const MAX_USERS = 2;
let usersInRoom = 0;
let isPlaying = false;
const ambience = document.getElementById('ambience');

const chairs = document.querySelectorAll('.chair');
const prayerBoxes = { 1: document.getElementById('prayer1'), 2: document.getElementById('prayer2') };
const visibilityStates = { 1: true, 2: true };
const floatingBoxes = { 1: null, 2: null };

// Palabras prohibidas
const FORBIDDEN_WORDS = /\b(sex|fuck|porn|dick|shit|pussy|asshole|mierda|puta|culo|verga)\b/i;

// Sillas
chairs.forEach((chair, i) => {
  chair.addEventListener('click', () => {
    if (usersInRoom >= MAX_USERS) {
      alert("Only 2 pilgrims | Solo 2 peregrinos");
      return;
    }
    if (!chair.classList.contains('occupied')) {
      chair.classList.add('occupied');
      usersInRoom++;
      showPrayerBox(i + 1);
      playAmbience();
    }
  });
});

function showPrayerBox(num) {
  const box = prayerBoxes[num];
  box.style.display = 'block';
  floatingBoxes[num] = box;
  document.getElementById(`name${num}`).focus();

  // Seguir al mouse
  document.addEventListener('mousemove', (e) => moveFloatingBox(e, num));
}

function moveFloatingBox(e, num) {
  if (!floatingBoxes[num]) return;
  const box = floatingBoxes[num];
  const rect = document.querySelector('.kitchen').getBoundingClientRect();
  
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  x = Math.max(50, Math.min(x, rect.width - 300));
  y = Math.max(100, Math.min(y, rect.height - 200));

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

function updateChairName(num) {
  const input = document.getElementById(`name${num}`);
  let name = input.value.trim();

  if (name && FORBIDDEN_WORDS.test(name)) {
    name = "Pilgrim " + num;
    input.value = name;
    alert("Please keep it sacred. | Manténlo sagrado.");
  }

  const chair = document.getElementById(`chair${num}`);
  chair.textContent = name || `Pilgrim ${num}`;
}

function togglePrayer(num) {
  const textarea = document.getElementById(`prayer-text-${num}`);
  const icon = document.querySelector(`#prayer${num} .toggle-visibility i`);
  visibilityStates[num] = !visibilityStates[num];
  textarea.classList.toggle('hidden', !visibilityStates[num]);
  icon.classList.toggle('fa-eye', visibilityStates[num]);
  icon.classList.toggle('fa-eye-slash', !visibilityStates[num]);
}

function handleEnter(e, num) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendPrayer(num);
  }
}

function sendPrayer(num) {
  const textarea = document.getElementById(`prayer-text-${num}`);
  const text = textarea.value.trim();
  if (!text) return;

  if (FORBIDDEN_WORDS.test(text)) {
    alert("Please keep your prayer pure. | Mantén tu oración pura.");
    return;
  }

  createSparks(text, num);
  textarea.value = '';
}

function createSparks(text, num) {
  const box = document.getElementById(`prayer${num}`);
  const rect = box.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 25; i++) {
    const spark = document.createElement('div');
    spark.className = `spark ${i % 2 === 0 ? 'green' : 'blue'}`;
    spark.style.left = centerX + (Math.random() - 0.5) * 120 + 'px';
    spark.style.top = centerY + (Math.random() - 0.5) * 60 + 'px';
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1600);
  }
}

function playAmbience() {
  if (!isPlaying) {
    ambience.play().catch(() => {});
    isPlaying = true;
  }
}

// Retrato: animación estilo revista
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

// Refri
document.getElementById('open-fridge').addEventListener('click', () => {
  alert("Midnight menu | Menú de medianoche\nComing soon! Próximamente!");
});

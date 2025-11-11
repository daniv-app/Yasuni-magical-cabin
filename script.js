// Yasuní Magical Cabin | 2 Souls, 2 Prayers
const MAX_USERS = 2;
let usersInRoom = 0;
let isPlaying = false;
const ambience = document.getElementById('ambience');

const chairs = document.querySelectorAll('.chair');
const prayerBoxes = {
  1: document.getElementById('prayer1'),
  2: document.getElementById('prayer2')
};
const visibilityStates = { 1: true, 2: true };

chairs.forEach((chair, i) => {
  chair.addEventListener('click', () => {
    if (usersInRoom >= MAX_USERS) {
      alert("Only 2 souls | Solo 2 almas");
      return;
    }
    if (!chair.classList.contains('occupied')) {
      chair.classList.add('occupied');
      chair.textContent = "Person";
      usersInRoom++;
      showPrayerBox(i + 1);
      playAmbience();
    }
  });
});

function showPrayerBox(num) {
  prayerBoxes[num].style.display = 'block';
}

function playAmbience() {
  if (!isPlaying) {
    ambience.play().catch(() => {});
    isPlaying = true;
  }
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

  createSparks(text, num);
  textarea.value = '';
}

function createSparks(text, num) {
  const box = document.getElementById(`prayer${num}`);
  const rect = box.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 20; i++) {
    const spark = document.createElement('div');
    spark.className = `spark ${i % 2 === 0 ? 'green' : 'blue'}`;
    spark.style.left = centerX + (Math.random() - 0.5) * 100 + 'px';
    spark.style.top = centerY + (Math.random() - 0.5) * 50 + 'px';
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1500);
  }
}

// Fridge
document.getElementById('open-fridge').addEventListener('click', () => {
  alert("Midnight menu | Menú de medianoche\nComing soon! Próximamente!");
});

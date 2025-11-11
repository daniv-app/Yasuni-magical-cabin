let usersInRoom = 0;
const maxUsers = 2;
const chairs = document.querySelectorAll('.chair');
const ambience = document.getElementById('ambience');
let isPlaying = false;

chairs.forEach(chair => {
  chair.addEventListener('click', () => {
    if (usersInRoom >= maxUsers) return alert("Solo 2 almas");
    if (!chair.classList.contains('occupied')) {
      chair.classList.add('occupied');
      chair.textContent = "Person";
      usersInRoom++;
      if (!isPlaying) { ambience.play(); isPlaying = true; }
    }
  });
});

function sendWish() {
  const wish = document.getElementById('wish');
  if (!wish.value) return;
  const bubble = document.createElement('div');
  bubble.textContent = wish.value;
  bubble.style.cssText = 'position:absolute; left:50%; bottom:20%; transform:translateX(-50%); background:rgba(255,209,220,0.8); padding:8px 12px; border-radius:20px; animation:floatUp 4s forwards;';
  document.body.appendChild(bubble);
  wish.value = "";
  setTimeout(() => bubble.remove(), 4000);
}

const style = document.createElement('style');
style.textContent = '@keyframes floatUp { to { transform: translate(-50%, -600px); opacity: 0; } }';
document.head.appendChild(style);

document.getElementById('open-fridge').addEventListener('click', () => {
  alert("¡Menú de medianoche pronto! Sandwiches, vino, té... ✨");
});

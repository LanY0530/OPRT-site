const startTime = new Date("2024-01-01T00:00:00Z");

function updateCounter() {
  const now = new Date();
  const diff = Math.floor((now - startTime) / 1000);

  const days = String(Math.floor(diff / 86400)).padStart(4, '0');
  const hours = String(Math.floor((diff % 86400) / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
  const seconds = String(diff % 60).padStart(2, '0');

  document.getElementById('counter').textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
}

setInterval(updateCounter, 1000);
updateCounter();

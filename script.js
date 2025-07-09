// 初始值（比如 1000000）
const baseCount = 1000000;

// 起始时间戳（你部署网页时的 UTC 时间，换成你想要的）
const launchTime = new Date("2024-01-01T00:00:00Z");

// 每秒增长多少
const perSecondGrowth = 0.5;  // 每秒增长0.5个单位

function updateCounter() {
  const now = new Date();
  const secondsElapsed = (now - launchTime) / 1000;
  const total = Math.floor(baseCount + (secondsElapsed * perSecondGrowth));
  document.getElementById("counter").textContent = total.toString().padStart(9, '0');
}

setInterval(updateCounter, 1000);
updateCounter();
// 初始值（比如 1000000）
const baseCount = 1000000;

// 起始时间戳（你部署网页时的 UTC 时间，换成你想要的）
const launchTime = new Date("2024-01-01T00:00:00Z");

// 每秒增长多少
const perSecondGrowth = 0.5;  // 每秒增长0.5个单位

function updateCounter() {
  const now = new Date();
  const secondsElapsed = (now - launchTime) / 1000;
  const total = Math.floor(baseCount + (secondsElapsed * perSecondGrowth));
  document.getElementById("counter").textContent = total.toString().padStart(9, '0');
}

setInterval(updateCounter, 1000);
updateCounter();

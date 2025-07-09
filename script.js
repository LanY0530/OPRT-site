function getNowUTC() {
  return new Date(new Date().toISOString());
}

// 你设置的计数起点
const startTime = new Date("2024-07-01T00:00:00Z");
const baseCount = 85300000;
const ratePerSecond = 0.42; // 手动调节


const randomOffsetRange = 2;  // 每次显示值 ±2 内浮动

function computeCount() {
  const now = getNowUTC();
  const elapsedSeconds = (now - startTime) / 1000;
  const rawCount = baseCount + (elapsedSeconds * ratePerSecond);

  const randomOffset = (Math.random() * 2 - 1) * randomOffsetRange;

  return Math.floor(rawCount + randomOffset);
}

function updateCounter() {
  const count = computeCount();
  document.getElementById("counter").textContent = count.toLocaleString("en-US");
}

setInterval(updateCounter, 1000);
updateCounter();

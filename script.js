function getNowET() {
  // 固定使用 UTC-5（美东标准时），不考虑夏令时
  const nowUTC = new Date();
  return new Date(nowUTC.getTime() - (5 * 3600 * 1000));
}

// === CONFIG 可调部分 ===
const startTime = new Date("2025-04-09T00:00:00Z"); // 起始时间
const baseCount = 0;                                // 初始伤亡数
const ratePerSecond = 0.000154;                     // 当前每秒增加速度
const randomOffsetRange = 2;                        // 抖动范围 ±2
// =========================

let lastCount = 0;

function computeCount() {
  const now = getNowET();
  const elapsed = (now - startTime) / 1000;

  const baseGrowth = baseCount + elapsed * ratePerSecond;
  const jitter = (Math.random() * 2 - 1) * randomOffsetRange;
  const nonlinearFactor = 1 + 0.002 * Math.sin(elapsed / 3600);
  const final = baseGrowth * nonlinearFactor + jitter;

  return Math.floor(final);
}

function updateCounter() {
  const current = computeCount();
  if (current > lastCount) {
    lastCount = current;
    document.getElementById("counter").textContent =
      current.toLocaleString("en-US");
  }
}

setInterval(updateCounter, 1000);
updateCounter();

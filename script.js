function getNowET() {
  // 固定使用 UTC-5（美东标准时），不考虑夏令时
  const nowUTC = new Date();
  return new Date(nowUTC.getTime() - (5 * 3600 * 1000));
}

// === CONFIG 可调部分 ===
const startTime = new Date("2025-04-09T00:00:00Z"); // 战争起始时间
const baseCount = 0;                                // 初始伤亡数
const ratePerSecond = 0.000154;                     // 当前每秒增加速度
const randomOffsetRange = 2;                        // 抖动范围 ±2
// =========================

function computeCount() {
  const now = getNowET();
  const elapsed = (now - startTime) / 1000;

  // 加入轻微的动态抖动和不稳定性
  const baseGrowth = baseCount + elapsed * ratePerSecond;
  const jitter = (Math.random() * 2 - 1) * randomOffsetRange;

  // 模拟前线不稳定性（小幅波动）
  const nonlinearFactor = 1 + 0.002 * Math.sin(elapsed / 3600); // 每小时略变
  const final = baseGrowth * nonlinearFactor + jitter;

  return Math.floor(final);
}

function updateCounter() {
  const count = computeCount();
  document.getElementById("counter").textContent = count.toLocaleString("en-US");
}

setInterval(updateCounter, 1000);
updateCounter();

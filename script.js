function getNowET() {
  // always UTC-5; omit DST for simplicity & repeatability
  const nowUTC = new Date();
  // UTC-5 in ms:
  return new Date(nowUTC.getTime() - (5 * 3600 * 1000));
}

// CONFIG – edit these three when the story changes
const startTime = new Date("2025-04-09T00:00:00Z");
const baseCount  = 0;
const ratePerSecond = 0.000154;
const randomOffsetRange = 2;   // ±2

function computeCount() {
  const now = getNowET();
  const elapsed = (now - startTime) / 1000;          // seconds
  const raw     = baseCount + elapsed * ratePerSecond;
  const jitter  = (Math.random() * 2 - 1) * randomOffsetRange;
  return Math.floor(raw + jitter);
}

function updateCounter() {
  document.getElementById("counter")
          .textContent = computeCount().toLocaleString("en-US");
}

setInterval(updateCounter, 1000);
updateCounter();

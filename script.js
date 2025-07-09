// 初始值
const baseCount = 0;

// 起始时间戳
const launchTime = new Date("1993-01-01T00:00:00Z");

// 每秒增长
const perSecondGrowth = 0.5; 

function updateCounter() {
  const now = new Date();
  const secondsElapsed = (now - launchTime) / 1000;
  const total = Math.floor(baseCount + (secondsElapsed * perSecondGrowth));

  // 更新页面中的数字（只显示一串数字）
  document.getElementById("counter").textContent = total.toLocaleString("en-US");
}

setInterval(updateCounter, 1000);
updateCounter();

const launchTime = new Date("1993-01-01T00:00:00Z");

const perSecondGrowth = 0.42;

const baseCount = 0;

function updateCounter() {
  const now = new Date();
  const secondsElapsed = (now - launchTime) / 1000;
  const total = Math.floor(baseCount + (secondsElapsed * perSecondGrowth));

  document.getElementById("counter").textContent = total.toLocaleString("en-US");
}

setInterval(updateCounter, 1000);
updateCounter();

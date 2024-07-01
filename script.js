function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });

  document.getElementById("currentTimeUTC").textContent = utcTime;
  document.getElementById("currentDay").textContent = dayOfWeek;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);

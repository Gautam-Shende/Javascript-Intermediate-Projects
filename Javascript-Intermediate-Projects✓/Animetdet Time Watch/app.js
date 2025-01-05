
const launchDate = new Date("2024-10-20T00:00:00.000Z"); 

function updateTimer() {
  const currentDate = new Date();
  const diff = launchDate.getTime() - currentDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML =
   days.toString().padStart(2, "0");

  document.getElementById("hour").innerHTML =
   hours.toString().padStart(2, "0");

  document.getElementById("mins").innerHTML =
   minutes.toString().padStart(2, "0");

  document.getElementById("secs").innerHTML =
   seconds.toString().padStart(2, "0");
}

updateTimer();

setInterval(updateTimer, 1000);

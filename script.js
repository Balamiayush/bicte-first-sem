// Initialize Lenis
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = now.toLocaleTimeString();

  document.getElementById("date").textContent = date;
  document.getElementById("time").textContent = time;
}

setInterval(updateDateTime, 1000);
updateDateTime();

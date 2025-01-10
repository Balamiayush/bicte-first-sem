// Initialize Lenis
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
setInterval(updateDateTime, 1000);

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
let clutter = "";
document
  .querySelector(".textpara")
  .textContent.split("")
  .forEach((char) => {
    if (char === " ") clutter += `<span>&nbsp;</span>`;
    clutter += `<span class=" ">${char}</span>`;
  });
document.querySelector(".textpara").innerHTML = clutter;
gsap.set(".textpara span", { opacity: 0.1 });
gsap.to(".textpara span", {
  scrollTrigger: {
    trigger: ".hero5 ",
    start: "top 40$",
    end: "bottom 90%",
    // markers: true,
    scrub: .2,
    
  },
  opacity: 1,
  stagger:.05,
  ease: "power3.out",

});

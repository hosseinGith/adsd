const container = document.querySelector(".container");

if (navigator.platform === "Win32") {
  window.addEventListener("mousemove", (e) => {
    let x = e.clientX - container.clientHeight;
    let y = e.clientY - container.clientWidth;
    container.style.transform = `rotate3d(${y}, ${x}, ${y},${x}deg)`;
  });
}

window.addEventListener("touchmove", (e) => {
  let x = e.touches[0].clientX - container.clientHeight;
  let y = e.touches[0].clientY - container.clientWidth;
  container.style.transform = `rotate3d(${y}, ${x}, ${y},${x}deg)`;
});

const container = document.querySelector(".container");

window.addEventListener("touchmove", (e) => {
  let x, y;
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;
  container.style.transform = `rotate3d(${y}, ${x}, ${y},${x}deg)`;
  alert("true")
  });

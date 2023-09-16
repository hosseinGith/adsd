const container = document.querySelector(".container");

  window.addEventListener("touchmove", (e) => {
    let x = e.touches[0].clientX - container.clientHeight;
    let y = e.touches[0].clientY - container.clientWidth;
    let xOffset += x;
    let yOffset += y;
    container.style.transform = `rotate3d(${yOffset}, ${xOffset}, ${yOffset},${xOffset}deg)`;
  });

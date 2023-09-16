const container = document.querySelector(".container");

  window.addEventListener("touchmove", (e) => {
    let x = e.touches[0].clientX - container.clientHeight;
    let y = e.touches[0].clientY - container.clientWidth;
    let xOffset = x;
    let yOffset = y;
    xOffset > 100 ? xOffset = "-" + xOffset : xOffset
    yOffset > 100 ? yOffset = "-" + yOffset : yOffset
    container.style.transform = `rotate3d(${yOffset}, ${xOffset}, ${yOffset},${x}deg)`;
  });

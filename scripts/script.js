const container = document.querySelector(".container");

  window.addEventListener("touchmove", (e) => {
    let x += 50;
    let y += 50;
    let xOffest = x;
    let yOffest = y;
    xOffest > 300 ? xOffset = 0 : xOffset;
    yOffest > 300 ? yOffset = 0 : yOffset;
    container.style.transform = `rotate3d(${yOffset}, ${xOffset}, ${yOffset},${xOffset}deg)`;
  });

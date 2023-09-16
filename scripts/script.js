const container = document.querySelector(".container");

if (navigator.platform === "Win32") {
  window.addEventListener("mousemove", (e) => {
    let x = e.clientX - container.clientHeight;
    let y = e.clientY - container.clientWidth;
    let xOffest += x;
    let yOffest += y;
    xOffest > 100? --xOffset : xOffset;
    yOffest > 100? --yOffset : yOffset;
    container.style.transform = `rotate3d(${yOffest}, ${xOffest}, ${yOffest},${xOffest}deg)`;
  });
}

window.addEventListener("touchmove", (e) => {
  let x = e.touches[0].clientX - container.clientHeight;
  let y = e.touches[0].clientY - container.clientWidth;
  container.style.transform = `rotate3d(${y}, ${x}, ${y},${x}deg)`;
});

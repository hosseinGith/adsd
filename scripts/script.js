const addShopBtns = [...document.querySelectorAll('input[type="submit"]')];
const form = document.querySelector("form");
const fieldset = document.querySelector("fieldset");
const shopedsPCS = document.querySelector(".shopedPCS");
const photosContainer = document.querySelector(".photosUl");
let shopedList = [];

function setPCSTheShopeds() {
  shopedsPCS.textContent = shopedList.length;
}
form.onsubmit = (e) => {
  e.preventDefault();
};
if (localStorage.getItem("shoped")) {
  shopedList = JSON.parse(localStorage.getItem("shoped"));
}
let idNumber;
if (!localStorage.getItem("idNumber")) {
  localStorage.setItem("idNumber", 1);
  idNumber = Number(localStorage.getItem("idNumber"));
}
idNumber = Number(localStorage.getItem("idNumber"));
addShopBtns.forEach((button) => {
  button.addEventListener("click", () => {
    let shoped = {
      id: idNumber,
      imgSrc: button.parentElement.children[0].src,
      name: button.parentElement.dataset.name,
      price: button.parentElement.dataset.price,
      isChecked: false,
    };

    let img = document.createElement("img");
    img.src = button.parentElement.children[0].src;
    img.classList.add("absolute");
    button.parentElement.appendChild(img);
    setTimeout(() => {
      img.classList.add("active");
    }, 100);
    shopedList.push(shoped);
    idNumber++;
    localStorage.setItem("shoped", JSON.stringify(shopedList));
    localStorage.setItem("idNumber", idNumber);
    setPCSTheShopeds();
    let index = 1;
    let li = document.createElement("li");
    let img2 = document.createElement("img");
    img2.src = img.src;
    li.appendChild(img2);
    photosContainer.appendChild(li);
    index++;
    let title = document.querySelector(".pcsOfPhotos");
    title.textContent =
      "کل اضافه شده ها " +
      [...document.querySelectorAll("img.absolute")].length;
    img.addEventListener("click", () => {
      photosContainer.parentElement.parentElement.classList.add("active");
    });
  });
});
window.onclick = (e) => {
  if (e.target === photosContainer.parentElement.parentElement)
    photosContainer.parentElement.parentElement.classList.remove("active");
};
setPCSTheShopeds();

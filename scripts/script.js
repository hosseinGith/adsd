const addShopBtns = [...document.querySelectorAll('input[type="submit"]')];
const form = document.querySelector("form");
let shopedList = [];
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
    };
    shopedList.push(shoped);
    localStorage.setItem("shoped", JSON.stringify(shopedList));
    idNumber++;
    localStorage.setItem("idNumber", idNumber);
  });
});

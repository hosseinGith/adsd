const ulShopedList = document.querySelector("ul");
const emptyShoped = document.querySelector(".emptyShoped");
const prices = document.querySelector(".prices");
let shopedList;
shopedList = JSON.parse(localStorage.getItem("shoped"));

function createItem() {
  if (!shopedList) return;
  shopedList.forEach((item) => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let br = document.createElement("br");
    let price = document.createElement("p");
    div.id = item.id;
    img.src = item.imgSrc;
    price.textContent = "تومان " + item.price;
    li.appendChild(div);
    div.appendChild(img);
    div.appendChild(br);
    div.appendChild(price);
    ulShopedList.appendChild(li);
    li.addEventListener("click", (e) => {
      let idNumber = localStorage.getItem("idNumber");
      idNumber--;
      localStorage.setItem("idNumber", idNumber);
      li.remove();
      let filtered = shopedList.filter((item) => item.id != div.id);
      shopedList = filtered;
      localStorage.setItem("shoped", JSON.stringify(shopedList));
      isEmptyList();
      calcolatorAllPrice();
    });
  });
}
function calcolatorAllPrice() {
  if (shopedList == "" || !shopedList) return (prices.textContent = "");
  let result = 0;
  shopedList.forEach((element) => {
    result += Number(element.price);
    prices.textContent = result + " تومان";
  });
}

function isEmptyList() {
  if (shopedList == "" || !shopedList) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = "یک کالا وارد کنید";
    div.appendChild(h2);
    ulShopedList.appendChild(div);
  }
}
isEmptyList();
calcolatorAllPrice();
createItem();

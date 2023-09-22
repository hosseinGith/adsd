const ulShopedList = document.querySelector("ul");
const emptyShoped = document.querySelector(".emptyShoped");
const prices = document.querySelector(".prices");
const commoditysInfo = document.querySelector(".commoditysInfo");
const deleteAll = document.querySelector(".deleteAll");
const deleteWithCheckBox = document.querySelector(".deleteWithCheckBox");
let shopedList,
  lis,
  isDeleteAll = false,
  isCheckBoxMod = false;

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
      if (isCheckBoxMod || isDeleteAll) return;
      li.classList.add("deletedItem");
      let idNumber = localStorage.getItem("idNumber");
      idNumber--;
      localStorage.setItem("idNumber", idNumber);
      let filtered = shopedList.filter((item) => item.id != div.id);
      shopedList = filtered;
      localStorage.setItem("shoped", JSON.stringify(shopedList));
      li.addEventListener("animationend", () => {
        li.remove();
      });
      calcolatorAllPrice();
      isEmptyList();
    });
  });
}
function calcolatorAllPrice() {
  let result = 0;
  shopedList.forEach((element) => {
    result += Number(element.price);
    commoditysInfo.classList.add("active");
    prices.textContent = "تومان " + result;
  });
  if (shopedList == "" || !shopedList) {
    commoditysInfo.classList.remove("active");
  }
}

function isEmptyList() {
  if (shopedList == "" || !shopedList) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    div.classList.add("empty");
    h2.textContent = "یک کالا وارد کنید";
    div.appendChild(h2);
    ulShopedList.appendChild(div);
  }
}
isEmptyList();
calcolatorAllPrice();
createItem();
deleteAll.addEventListener("click", () => {
  isDeleteAll = true;
  commoditysInfo.classList.remove("active");
  let ulShopedListChilds = [...ulShopedList.children];
  ulShopedListChilds.forEach((item) => {
    item.classList.add("deleted");
    item.onanimationend = () => {
      item.remove();
      isDeleteAll = false;
    };
  });
  ulShopedList.children[0].onanimationend = () => {
    ulShopedList.children[0].remove();
    isEmptyList();
  };
  shopedList = [];
  idNumber = 1;
  localStorage.setItem("shoped", JSON.stringify(shopedList));
  localStorage.setItem("idNumber", JSON.stringify(idNumber));
});
deleteWithCheckBox.addEventListener("click", () => {
  if (isCheckBoxMod) {
    isCheckBoxMod = false;
    deleteWithCheckBox.children[0].classList.add("fa-checked");
    deleteWithCheckBox.children[0].classList.remove("fa-remove");
  } else {
    isCheckBoxMod = true;
    deleteWithCheckBox.children[0].classList.remove("fa-checked");
    deleteWithCheckBox.children[0].classList.add("fa-remove");
  }
  deletingWithCheckBox();

  let removeElement = [...document.querySelectorAll(".lisCheckBox")];
  shopedList.forEach((item, index) => {
    if (removeElement[index].classList.contains("checked")) {
      item.isChecked = true;
      removeElement[index].parentElement.remove();
    } else {
      item.isChecked = false;
    }
    let filtered = shopedList.filter((item) => !item.isChecked);
    shopedList = filtered;
    localStorage.setItem("shoped", JSON.stringify(shopedList));
  });
  isEmptyList();
  calcolatorAllPrice();
});
lis = [...ulShopedList.querySelectorAll("li")];
lis.forEach((li, index) => {
  if (li.children[1] === undefined && li && !isCheckBoxMod) {
    let div, p;
    div = document.createElement("div");
    p = document.createElement("p");
    div.classList.add("onClickRemove");
    p.textContent = "برای حذف کلیک کنید";
    div.appendChild(p);
    li.appendChild(div);
  }

  li.addEventListener("mouseover", (e) => {
    let newLi = document.querySelectorAll("ul li");
    newLi.forEach((item) => {
      item.addEventListener("mouseover", () => {
        if (isCheckBoxMod) return;
        item.children[1].classList.add("active");
      });
    });
  });

  li.addEventListener("mouseleave", (e) => {
    if (isCheckBoxMod) return;
    e.target.children[1].classList.remove("active");
  });
});

function deletingWithCheckBox() {
  let li = [...document.querySelectorAll("ul li")];
  li.forEach((item, index) => {
    if (isCheckBoxMod && li[index].children[2] === undefined) {
      let div, i;
      div = document.createElement("div");
      i = document.createElement("i");
      i.classList.add("fa");
      div.classList.add("lisCheckBox");
      div.classList.add("active");
      div.appendChild(i);
      item.appendChild(div);
      div.addEventListener("click", () => {
        i.classList.toggle("fa-check");
        div.classList.toggle("checked");
      });
    } else if (isCheckBoxMod) {
      let div = document.querySelectorAll(".lisCheckBox");
      div[index].classList.add("active");
    } else if (!isCheckBoxMod) {
      let div = document.querySelectorAll(".lisCheckBox");
      div[index].classList.remove("active");
    }
  });
}
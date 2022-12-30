const cartItems = JSON.parse(localStorage.cartItem);

let totalSum = cartItems.reduce(function (acc, obj) {
  return acc + obj.price * obj.quantity;
}, 0);

function renderCart() {
  let container = document.getElementById("cartContainer") as HTMLDivElement;
  for (let i = 0; i < cartItems.length; i++) {
    let pContainer = document.createElement("article") as HTMLDivElement;
    pContainer.classList.add("cart__product");
    let pImgContainer = document.createElement("article") as HTMLDivElement;
    pImgContainer.classList.add("cart__imgContainer");
    let pImg = document.createElement("img") as HTMLImageElement;
    pImg.classList.add("cart__img");
    let prodDetails = document.createElement("article") as HTMLDivElement;
    prodDetails.classList.add("cart__productDetails");
    let pName = document.createElement("h4") as HTMLHeadingElement;
    pName.classList.add("cart__productName");
    let detailContainer = document.createElement("article") as HTMLDivElement;
    detailContainer.classList.add("cart__detailContainer");

    let qtyContainer = document.createElement("article") as HTMLDivElement;
    qtyContainer.classList.add("cart__qty");
    let label = document.createElement("label") as HTMLLabelElement;
    let select = document.createElement("select") as HTMLSelectElement;

    let maxnumber = 11;
    let optionstlist = "";
    for (let i = 0; i < maxnumber; i++) {
      optionstlist += `<option value="${i}">${i}</option>`;
    }
    select.innerHTML = optionstlist;
    select.value = cartItems[i].quantity;

    select.addEventListener("change", (ev) => {
      cartItems[i].quantity = Number(select.value);
      localStorage.setItem("cartItem", JSON.stringify(cartItems));
      window.location.reload();
    });

    let priceContainer = document.createElement("article") as HTMLDivElement;
    priceContainer.classList.add("cart__price");
    let price = document.createElement("span") as HTMLSpanElement;

    let removeBtn = document.createElement("button") as HTMLButtonElement;
    removeBtn.classList.add("cart__remove");
    let xIcon = document.createElement("span") as HTMLSpanElement;

    label.setAttribute("for", "product-quantity");
    select.setAttribute("name", "product-quantity");
    select.setAttribute("id", "qty");

    container.appendChild(pContainer);
    pContainer.appendChild(pImgContainer);
    pImgContainer.appendChild(pImg);
    pContainer.appendChild(prodDetails);
    prodDetails.appendChild(pName);
    prodDetails.appendChild(detailContainer);
    detailContainer.appendChild(qtyContainer);
    qtyContainer.appendChild(label);
    qtyContainer.appendChild(select);
    qtyContainer.appendChild(priceContainer);
    priceContainer.appendChild(price);
    pContainer.appendChild(removeBtn);
    removeBtn.appendChild(xIcon);

    label.innerText = "qty:";
    xIcon.innerText = "X";
    pName.innerText = cartItems[i].name;
    pImg.src = cartItems[i].image;
    price.innerText =
      (cartItems[i].price * cartItems[i].quantity).toString() + " SEK";

    removeBtn.addEventListener("click", () => {
      cartItems.splice(i, 1);
      localStorage.setItem("cartItem", JSON.stringify(cartItems));
      window.location.reload();
    });
  }
}
let subTotal = document.getElementById("subtotalCost") as HTMLSpanElement;
let totalCost = document.getElementById("totalCost") as HTMLSpanElement;
let totalAmount = document.getElementById("totalAmount") as HTMLSpanElement;

subTotal.innerText = totalSum + " SEK";
totalCost.innerText = totalSum + " SEK";
totalAmount.innerText = "Confirm order";

let purchaseBtn = document.getElementById("purchaseBtn") as HTMLButtonElement;
purchaseBtn.addEventListener("click", () => {
  localStorage.clear();
  // Till confirmationpage.html
});

window.onload = () => {
  renderCart();
};

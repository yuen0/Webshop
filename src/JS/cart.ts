import { cart, Product } from "./main";
import { products, renderProducts } from "./renderproducts";

/* function lsonload(){
    localStorage.setItem("cartItem", JSON.stringify(cart));
}*/
export const cartItems = JSON.parse(localStorage.cartItem);

// function pageload(){if (!cartItems) {return;}}

let totalSum = cartItems.reduce(function (acc, obj) {
	return acc + obj.price;
}, 0);

function renderCart() {
	let container = document.getElementById("cartContainer") as HTMLDivElement;
	for (let cartItem of cartItems) {
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

		//options for quantity
		for (let i = 1; i < 11; i++) {
			let option = document.createElement("option") as HTMLOptionElement;
			option.setAttribute("value", "");
			option.innerText = `${i}`;
			select.appendChild(option);
		}
		//

		let priceContainer = document.createElement("article") as HTMLDivElement;
		priceContainer.classList.add("cart__price");
		let price = document.createElement("span") as HTMLSpanElement; //innertext price

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
		pName.innerText = cartItem.name;
		pImg.src = cartItem.image;
		price.innerText = cartItem.price.toString() + " SEK";
	}

	// remove.addEventListener("click", () => {
	// 	/*let removeItem = cartItem.children(cartItem.id);
	//     if (removeItem) {
	//         cartItem.removeChild(removeItem);
	//     }*/
	// 	cartItems.splice(1, 1);
	// 	localStorage.setItem("cartItem", JSON.stringify(cartItems));
	// });
}

// purchaseBtn.addEventListener("click", ()=>{
//     localStorage.clear();
//     //Till confirmationpage.html
// });

window.onload = () => {
	renderCart();
};

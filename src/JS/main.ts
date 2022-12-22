import { renderProducts, products } from "./renderproducts";

let cart = [];

function initCart() {
	for (let product of products) {
		cart[product.name] = 0;
	}
}

function renderCart() {}

function increment(name) {
	console.log("Name: " + name);
	cart[name]++;
	renderCart();
}

window.onload = () => {
	renderProducts();
	initCart();
};

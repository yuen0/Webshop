import { renderProducts, products } from "./renderproducts";

export interface Product {
	name: string;
	image: string;
	description: string;
	price: number;
	id: number;
}
export const cart: Product[] = [];

function initCart() {
	for (let product of products) {
		cart[product.name] = 0;
	}
}

function renderCart() {}

function increment(name) {
	console.log("Name: " + name);
	//cart[name]++;
	renderCart();
}

window.onload = () => {
	renderProducts();
	initCart();
};

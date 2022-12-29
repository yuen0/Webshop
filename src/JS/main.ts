//import { lsonload, pageload } from "./cart";
import { cartItems } from "./cart";
import { renderProducts, products } from "./renderproducts";

export interface Product {
	name: string;
	image: string;
	description: string;
	price: number;
	id: number;
}
export let cart: Product[] = [];

/*function initCart() {
	for (let product of products) {
		cart[product.name] = 0;
	}
}*/

window.onload = () => {
	renderProducts();
	// renderInfo();
	//initCart();
	//pageload();
	//lsonload();
};

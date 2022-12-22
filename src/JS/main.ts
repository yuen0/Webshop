// window.onload = (_) => {
// 	renderProducts();
// 	initCart();
// };

// let addtocart_btn = document.getElementById(
// 	"productButton"
// ) as HTMLButtonElement;

// addtocart_btn.addEventListener("click", function () {
// 	let productPrice = document.getElementById("productPrice")?.innerHTML;
// 	let hamburgerSection = document.getElementById("hamburger") as HTMLDivElement;
// 	let span_total = document.createElement("span") as HTMLSpanElement;

// 	if (document.getElementById("navTotalSum")) {
// 		console.log("");
// 	} else {
// 		hamburgerSection?.appendChild(span_total);
// 		hamburgerSection?.insertBefore(span_total, hamburgerSection.children[0]);
// 		span_total.innerText = "Total:" + productPrice;
// 		span_total.setAttribute("id", "navTotalSum");
// 	}
// });

export const products = [
	{
		name: "2-pack sweatpants",
		image: "../Assets/product2.png",
		description:
			"Byxor i sweatshirtkvalitet av bomullsblandning med mjuk, borstad insida. Byxorna har resår och dragsko i midjan. Fickor i sidsöm och ribbad mudd vid benslut.",

		price: 149,
		id: "product_1",
	},
	{
		name: "Gelé någonting",
		image: "..images/cake.jpg",

		description: "Spännande konsistens för alla kulinariska mesar.",

		price: 299,
		id: "product_2",
	},
	{
		name: "An EXTREMELY spicy sauce",
		image: "..images/cake.jpg",

		description: "Får dina smaklökar att dansa tango!",

		price: 79,
		id: "product_3",
	},
	{
		name: "I don't even know what this is",
		image: "..images/cake.jpg",

		description: "Smakar verkligen inte gott.",

		price: 59,
		id: "product_4",
	},
	{
		name: "A unique sandwich",
		image: "..images/cake.jpg",

		description: "An idiot-sandwich.",

		price: 59,
		id: "product_5",
	},
];

// function renderProducts() {
// 	const template = "";
// 	//'Lägg template html kod här'
// }

// let cart = {};

// function initCart() {
// 	for (let product of products) {
// 		cart[product.name] = 0;
// 	}
// }

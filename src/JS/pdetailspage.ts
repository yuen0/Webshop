import { products, renderProducts } from "./renderproducts";

products;
let productCard = document.querySelector(
	"#productCardContainer"
) as HTMLDivElement;
let description = document.getElementById(
	"pDescription"
) as HTMLParagraphElement;
let title = document.getElementById("pTitle") as HTMLHeadingElement;
let price = document.getElementById("pPrice") as HTMLDivElement;
let img = document.getElementById("pImg") as HTMLDivElement;
let h2 = document.querySelectorAll(".products__card > h2");
productOnClick();
//renderInfo();

function productOnClick() {
	productCard?.addEventListener("click", () => {
		window.location.href = "./pdetails.html";
	});
}

/*function renderInfo() {
	for (let product of products) {
		if (product.id === "product_1") {
			description.innerHTML = product.description;
			title.innerHTML = product.name;
			price.innerHTML = product.price.toString();
			img.style.backgroundImage = `url(${product.image})`;
		}
	}
}*/
// for (let i = 0; i > h2.length; i++) {
// 	h2[i],
// 		addEventListener("click", (e) => {
// 			console.log("hej");
// 		});
// }

// for (let element of h2) {
// 	element.addEventListener("click", (e) => {
// 		let target = e.target as Element;
// 		for (let product of products) {
// 			if (target.id == "productName" + product.id) {
// 				console.log(product.id);
// 			}
// 		}
// 	});
// }

console.log(Array.from(h2));

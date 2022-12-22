import { products } from "./main";
let productCard = document.querySelector(
	"#productCardContainer"
) as HTMLDivElement;
let description = document.getElementById(
	"pDescription"
) as HTMLParagraphElement;
let title = document.getElementById("pTitle") as HTMLHeadingElement;
let price = document.getElementById("pPrice") as HTMLDivElement;
let img = document.getElementById("pImg") as HTMLDivElement;
productOnClick();
renderInfo();

function productOnClick() {
	productCard?.addEventListener("click", () => {
		window.location.href = "./pdetails.html";
	});
}

function renderInfo() {
	for (let product of products) {
		if (product.id === "product_1") {
			description.innerHTML = product.description;
			title.innerHTML = product.name;
			price.innerHTML = product.price.toString();
			img.style.backgroundImage = `url(${product.image})`;
		}
	}
}

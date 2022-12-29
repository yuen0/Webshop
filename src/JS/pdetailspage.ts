import { products, renderProducts, pdetails } from "./renderproducts";

let description = document.getElementById(
	"pDescription"
) as HTMLParagraphElement;
let title = document.getElementById("pTitle") as HTMLHeadingElement;
let price = document.getElementById("pPrice") as HTMLDivElement;
let img = document.getElementById("pImg") as HTMLDivElement;

renderInfo();

function renderInfo() {
	if (!localStorage) {
		return;
	}

	let renderDetails = JSON.parse(localStorage.getItem("pDetails") || "");

	console.log(renderDetails);
	title.innerText = renderDetails[0].name;
	price.innerText = `${renderDetails[0].price}:-`;
	description.innerText = renderDetails[0].description;
	img.style.backgroundImage = `url(${renderDetails[0].image})`;

	if (window.location.href !== "./pdetails.html") {
		localStorage.removeItem("pDetails");
	}
}

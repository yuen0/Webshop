let description = document.getElementById(
	"pDescription"
) as HTMLParagraphElement;
let title = document.getElementById("pTitle") as HTMLHeadingElement;
let price = document.getElementById("pPrice") as HTMLDivElement;
let img = document.getElementById("pImg") as HTMLDivElement;

window.onload = () => {
	renderInfo();
};
export function renderInfo() {
	if (!localStorage) {
		return;
	}

	let renderDetails = JSON.parse(localStorage.getItem("pDetails") || "");

	title.innerText = renderDetails[0].name;
	price.innerText = `${renderDetails[0].price}:-`;
	description.innerText = renderDetails[0].description;
	img.style.backgroundImage = `url(${renderDetails[0].image})`;

	if (window.location.href !== "./pdetails.html") {
		localStorage.removeItem("pDetails");
	}
}

import { Product } from "./main";

export let pdetails: Product[] = [];

export const products = [
	{
		name: "2-pack sweatpants",
		image: "product1.png",

		description:
			"Byxor i sweatshirtkvalitet av bomullsblandning med mjuk, borstad insida. Byxorna har resår och dragsko i midjan. Fickor i sidsöm och ribbad mudd vid benslut.",

		price: 249,
		id: 1,
		quantity: 0,
	},
	{
		name: "Joggers",
		image: "product2.png",

		description:
			"Ett par joggers i sweatshirtkvalitet med avsmalnande ben och låg gren. De har resår och dragsko i midjan samt sidfickor med dragkedja. Sömmar vid knäna och mudd vid benslut.",

		price: 279,
		id: 2,
		quantity: 0,
	},
	{
		name: "Huvtröja Relaxed Fit",
		image: "product3.png",

		description:
			"En tröja i bomullsblandad sweatshirtkvalitet med avslappnad passform. Tröjan har fodrad huva med dragsko. Lång ärm och känguruficka samt ribbad mudd vid ärmslut och i nederkant. Mjuk, borstad insida.",

		price: 199,
		id: 3,
		quantity: 0,
	},
	{
		name: "Rundhalsad T-shirt Regular Fit",
		image: "product4.png",

		description:
			"En T-shirt i mjuk bomullstrikå med klassisk passform. T-shirten har rund halsringning med ribbad mudd. Rakt skuren nederkant.",

		price: 79,
		id: 4,
		quantity: 0,
	},
	{
		name: "2-pack pyjamasbyxa i bomull",
		image: "product5.png",
		description:
			"Två par pyjamasbyxor i luftig, vävd bomullskvalitet. Byxorna har klädd resår och dragsko i midjan samt sidfickor. Fuskgylf.",
		price: 299,
		id: 5,
		quantity: 0,
	},
];

export function renderProducts() {
	for (let product of products) {
		let container = document.getElementById(
			"productsContainer"
		) as HTMLDivElement;
		const pHeader = document.getElementById(
			"productsHeader"
		) as HTMLHeadingElement;

		let pCard = document.createElement("article") as HTMLDivElement;
		let pImgContainer = document.createElement("article") as HTMLDivElement;
		let pImg = document.createElement("img") as HTMLImageElement;
		let pContent = document.createElement("article") as HTMLDivElement;
		let pTitle = document.createElement("h2") as HTMLHeadingElement;
		let pDesc = document.createElement("p") as HTMLParagraphElement;
		let pPrice = document.createElement("article") as HTMLDivElement;
		let pPriceValue = document.createElement("p") as HTMLParagraphElement;
		let button = document.createElement("button") as HTMLButtonElement;
		let createSelect = document.createElement("select") as HTMLSelectElement;
		let createOption = document.createElement("option") as HTMLOptionElement;

		pCard.classList.add("products__card");
		pImgContainer.classList.add("products__img");
		//pImg.setAttribute("id", "")
		pContent.classList.add("products__content");
		pTitle.setAttribute("id", "productname" + product.id);
		pTitle.classList.add("products__title");
		pDesc.classList.add("products__description");
		pDesc.setAttribute("id", "productDescription" + product.id);
		pPrice.classList.add("products__price");
		pPriceValue.setAttribute("id", "productPrice" + product.id);
		button.classList.add("products__button");
		button.setAttribute("id", "addtocartBtn" + product.id);
		button.innerText = "Add to Cart";
		createSelect.setAttribute("class", "select__quantity");

		container.appendChild(pCard);
		pCard.appendChild(pImgContainer);
		pCard.appendChild(pContent);

		pImgContainer.after(pContent);

		pImgContainer.appendChild(pImg);
		pContent.appendChild(pTitle);
		pContent.appendChild(pDesc);
		pContent.appendChild(createSelect);
		createSelect.appendChild(createOption);
		pContent.appendChild(pPrice);
		pContent.appendChild(button);

		pPrice.appendChild(pPriceValue);

		pImg.src = product.image;
		pTitle.innerText = product.name;
		pDesc.innerText = product.description;
		pPriceValue.innerText = `${product.price.toString()} SEK`;

		let maxnumber = 11;
		let optionslist = "";
		for (let x = 1; x < maxnumber; x++) {
			optionslist += `<option value="${x}">  ${x}  </option>`;
		}
		createSelect.innerHTML = optionslist;

		//Stores object in localstorage when clicking each product.
		pCard.addEventListener("click", (e) => {
			let target = e.target as HTMLButtonElement;
			let pInfo = products.find((product) => {
				return pTitle.id.includes(`productname${product.id}`);
			});
			if (!pInfo || target.className === "products__button") {
				return;
			}
			if (!pInfo || target.className === "select__quantity") {
				return;
			}
			pdetails.push(pInfo);
			localStorage.setItem("pDetails", JSON.stringify(pdetails));
			window.location.href = "./pdetails.html";
		});

		//-->

		button?.addEventListener("click", () => {
			let cart: Product[] = JSON.parse(
				localStorage.getItem("cartItem") || "[]"
			);

			let found = products.find((product) => {
				return button.id.includes(`addtocartBtn${product.id}`);
			});
			if (!found) {
				return;
			}
			found.quantity = Number(createSelect.value);
			cart.push(found);
			localStorage.setItem("cartItem", JSON.stringify(cart));

			let hamburgerSection = document.getElementById(
				"hamburger"
			) as HTMLDivElement;
			let span_total = document.createElement("span") as HTMLSpanElement;
			let showTotal = document.getElementById("navTotalSum") as HTMLSpanElement;
			let totalSum = cart.reduce(function (acc, obj) {
				return acc + obj.price * obj.quantity;
			}, 0);

			if (document.getElementById("navTotalSum")) {
				hamburgerSection.removeChild(showTotal);
				hamburgerSection?.insertBefore(
					span_total,
					hamburgerSection.children[0]
				);
				span_total.innerText = "Total:" + totalSum + " SEK";
				span_total.setAttribute("id", "navTotalSum");
			} else {
				hamburgerSection?.appendChild(span_total);
				hamburgerSection?.insertBefore(
					span_total,
					hamburgerSection.children[0]
				);
				span_total.innerText = "Total:" + totalSum + " SEK";
				span_total.setAttribute("id", "navTotalSum");
			}
		});
	}
}

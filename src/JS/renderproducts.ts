import { cart } from "./main";

export const products = [
	{
		name: "Butterkaka",
		image: "/images/cake.jpg",

		description: "Mycket fin butterkaka.",

		price: 59,
		id: 1,
	},
	{
		name: "Gelé någonting",
		image: "/images/cake.jpg",

		description: "Spännande konsistens för alla kulinariska mesar.",

		price: 299,
		id: 2,
	},
	{
		name: "An EXTREMELY spicy sauce",
		image: "/images/cake.jpg",

		description: "Får dina smaklökar att dansa tango!",

		price: 79,
		id: 3,
	},
	{
		name: "I don't even know what this is",
		image: "/images/cake.jpg",

		description: "Smakar verkligen inte gott.",

		price: 59,
		id: 4,
	},
	{
		name: "A unique sandwich",
		image: "/images/cake.jpg",
		description: "An idiot-sandwich.",
		price: 59,
		id: 5,
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
		// let createArticle = document.createElement("article") as HTMLDivElement;
		// let createSection = document.createElement("section") as HTMLDivElement;
		// let addtocartBtn = document.createElement("button") as HTMLButtonElement;
		// let addImg = document.createElement("img") as HTMLImageElement;
		// let createh2 = document.createElement("h2") as HTMLHeadingElement;
		// let createParagraph = document.createElement("p") as HTMLParagraphElement;

		let pCard = document.createElement("article") as HTMLDivElement;
		let pImgContainer = document.createElement("article") as HTMLDivElement;
		let pImg = document.createElement("img") as HTMLImageElement;
		let pContent = document.createElement("article") as HTMLDivElement;
		let pTitle = document.createElement("h2") as HTMLHeadingElement;
		let pDesc = document.createElement("p") as HTMLParagraphElement;
		let pPrice = document.createElement("article") as HTMLDivElement;
		let pPriceValue = document.createElement("p") as HTMLParagraphElement;
		let button = document.createElement("button") as HTMLButtonElement;

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

		container.appendChild(pCard);
		pHeader.after(pCard);
		pCard.appendChild(pImgContainer);
		pCard.appendChild(pContent);

		pImgContainer.after(pContent);

		pImgContainer.appendChild(pImg);
		pContent.appendChild(pTitle);
		pContent.appendChild(pDesc);
		pContent.appendChild(pPrice);
		pContent.appendChild(button);

		pPrice.appendChild(pPriceValue);

		// createh2.setAttribute("id", "productname" + product.id);
		// addImg.setAttribute("id", "productimage" + product.id);
		// createArticle.setAttribute("id", "articleContainer" + product.id);
		// addtocartBtn.setAttribute("id", "addtocartBtn" + product.id);
		// createSection.setAttribute("id", "productDescription" + product.id);
		// createParagraph.setAttribute("id", "productPrice" + product.id);

		// addtocartBtn.className = "products__button";
		// container.className = "products__card";
		// container.appendChild(addImg);
		// container.appendChild(createArticle);
		// container.appendChild(createh2);
		// container.appendChild(createSection);
		// container.appendChild(createParagraph);
		// container.appendChild(addtocartBtn);

		pTitle.innerText = product.name;
		pDesc.innerText = product.description;
		pPriceValue.innerText = `${product.price.toString()} SEK`;

		// addImg.innerHTML = product.image;
		// addImg.className = "product__images";
		// addtocartBtn.innerText = "Add to cart";

		/*addtocartBtn.addEventListener("click", () =>{
    cart.push();
    /*for(let i=0; products.length > i; i++){
        cart[products[i].price];
    }
    let productPrice = cart.values();
    let hamburgerSection = document.getElementById("hamburger") as HTMLDivElement;
    let span_total = document.createElement('span') as HTMLSpanElement; 
    
    if (document.getElementById("navTotalSum")) {
    console.log("");
    
    } else {
        hamburgerSection?.appendChild(span_total);
            hamburgerSection?.insertBefore(span_total, hamburgerSection.children[0]);
            span_total.innerText= "Total:" + productPrice;
            span_total.setAttribute('id', 'navTotalSum');
            
    }
})*/

		button?.addEventListener("click", () => {
			let found = products.find((product) => {
				return button.id.includes(`addtocartBtn${product.id}`);
			});
			if (!found) {
				return;
			}
			localStorage.setItem("cartItem", JSON.stringify(cart));
		});
	}
}

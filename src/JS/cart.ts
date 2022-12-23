import { Product } from "./main";
import { products, renderProducts } from "./renderproducts";

const cartItems = JSON.parse(localStorage.cartItem);

function renderCart(){
    for (let cartItem of cartItems){
    let container = document.getElementById("cart") as HTMLDivElement;
    let createArticle = document.createElement("article") as HTMLDivElement;
    let createSection = document.createElement("section") as HTMLDivElement;
    let removeBtn = document.createElement("button") as HTMLButtonElement;
    let addImg = document.createElement("img") as HTMLImageElement;
    let createh2 = document.createElement("h2") as HTMLHeadingElement;
    let createParagraph = document.createElement("p") as HTMLParagraphElement;

    container.appendChild(addImg);
    container.appendChild(createArticle);
    container.appendChild(createh2);
    container.appendChild(createSection);
    container.appendChild(createParagraph);
    container.appendChild(removeBtn);

    createh2.innerText=cartItem.name;
    createSection.innerText=cartItem.description;
    createParagraph.innerText = cartItem.price.toString() + " SEK";
    addImg.innerHTML = cartItem.image;
    removeBtn.innerText = "Remove"

    removeBtn.addEventListener("click", ()=>{
        //cartItems.splice()
    })
    }
}

window.onload = () => {
    renderCart();
}
    




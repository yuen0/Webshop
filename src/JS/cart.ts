import { Product } from "./main";
import { products, renderProducts } from "./renderproducts";

let cartItems = JSON.parse(localStorage.cartItem);



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
        /*let removeItem = cartItem.children(cartItem.id);
        if (removeItem) {
            cartItem.removeChild(removeItem);
        }*/
        cartItems.splice(1, 1);
        
       
        
        
    })
    }

    let container = document.getElementById("cart") as HTMLDivElement;
    let purchaseBtn = document.createElement("button") as HTMLButtonElement;
    let createh1 = document.createElement("h2") as HTMLHeadingElement;
    let createForm = document.createElement("form") as HTMLFormElement;
    let createInputname = document.createElement("input") as HTMLInputElement;
    let createInputadress = document.createElement("input") as HTMLInputElement;
    let createInputpostnr = document.createElement("input") as HTMLInputElement;
    let createInputcreditcard = document.createElement("input") as HTMLInputElement;
    let fullnameLabel = document.createElement("label") as HTMLLabelElement;
    let adressLabel = document.createElement("label") as HTMLLabelElement;
    let postnrLabel = document.createElement("label") as HTMLLabelElement;
    let bankLabel = document.createElement("label") as HTMLLabelElement;
    let creditcardLabel = document.createElement("label") as HTMLLabelElement;
    let selectmenu = document.createElement("select") as HTMLSelectElement;
    let optionNordea = document.createElement("option") as HTMLOptionElement;
    let optionSwedbank = document.createElement("option") as HTMLOptionElement;
    let optionHandelsbanken = document.createElement("option") as HTMLOptionElement;
        
    container.appendChild(createh1);
    container.appendChild(createForm);
    createForm.appendChild(fullnameLabel);
    createForm.appendChild(createInputname);
    createForm.appendChild(adressLabel);
    createForm.appendChild(createInputadress);
    createForm.appendChild(postnrLabel);
    createForm.appendChild(createInputpostnr);
    createForm.appendChild(bankLabel);
    createForm.appendChild(selectmenu);
    selectmenu.appendChild(optionNordea);
    selectmenu.appendChild(optionSwedbank);
    selectmenu.appendChild(optionHandelsbanken);
    createForm.appendChild(creditcardLabel);
    createForm.appendChild(createInputcreditcard);
    container.appendChild(purchaseBtn);

    fullnameLabel.setAttribute("name", "name");
    adressLabel.setAttribute("name", "adress");
    postnrLabel.setAttribute("name", "zipcode");
    creditcardLabel.setAttribute("name", "creditcard");
    creditcardLabel.innerText = "Please provide your credit card number:"
    bankLabel.innerText = "Please select your bank from the dropdown menu:"
    optionNordea.innerText = "Nordea";
    optionSwedbank.innerText = "Swedbank";
    optionHandelsbanken.innerText = "Handelsbanken";
    createh1.innerText = "Where do you want us to send your order?";
    fullnameLabel.innerText = "Please enter your full name:";
    adressLabel.innerText = "Please enter your adress:";
    postnrLabel.innerText = "Please enter your ZIP code:"
    purchaseBtn.innerText = "Purchase"

    purchaseBtn.addEventListener("click", ()=>{
        localStorage.clear();
        //Till confirmationpage.html
    });
}

window.onload = () => {
    renderCart();
}
    




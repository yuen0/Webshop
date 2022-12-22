export const products =
[
    {
        name: "Butterkaka",
        image: "/images/cake.jpg",
        
        description: "Mycket fin butterkaka.",
        
        
        price: 59,
        id: 1
    },
    {
        name: "Gelé någonting",
        image: "/images/cake.jpg",
        
        description: "Spännande konsistens för alla kulinariska mesar.",
        
        
        price: 299,
        id: 2
    },
    {
        name: "An EXTREMELY spicy sauce",
        image: "/images/cake.jpg",
        
        description: "Får dina smaklökar att dansa tango!",
        
        
        price: 79,
        id: 3
    },
    {
        name: "I don't even know what this is",
        image: "/images/cake.jpg",
        
        description: "Smakar verkligen inte gott.",
        
        
        price: 59,
        id: 4
    },
    {
        name: "A unique sandwich",
        image: "/images/cake.jpg",
        description: "An idiot-sandwich.",
        price: 59,
        id: 5
    },
];


export function renderProducts() {
for (let product of products){
let container = document.getElementById("productsContainer") as HTMLDivElement;
let createArticle = document.createElement("article") as HTMLDivElement;
let createSection = document.createElement("section") as HTMLDivElement;
let addtocartBtn = document.createElement("button") as HTMLButtonElement;
let addImg = document.createElement("img") as HTMLImageElement;
let createh2 = document.createElement("h2") as HTMLHeadingElement;
let createParagraph = document.createElement("p") as HTMLParagraphElement;

let articles = document.getElementsByTagName("article");
for (let i=0; articles.length > i; i++){

createh2.setAttribute("id", "productname" +i+1);
addImg.setAttribute("id", "productimage" +i+1);
createArticle.setAttribute("id", "articleContainer" +i+1);
addtocartBtn.setAttribute("id", "addtocartBtn" +i+1);
createSection.setAttribute("id", "productDescription" +i+1);
createParagraph.setAttribute("id", "productPrice" +i+1);

addtocartBtn.className="products__button";
container.className="products__card";
container.appendChild(addImg);
container.appendChild(createArticle);
container.appendChild(createh2);
container.appendChild(createSection);
container.appendChild(createParagraph);
container.appendChild(addtocartBtn);


createh2.innerText = product.name;
createSection.innerText = product.description;
createParagraph.innerText = product.price.toString() + " SEK";

addImg.innerHTML = product.image;
addImg.className="product__images";
addtocartBtn.innerText = "Add to cart";
}








addtocartBtn.addEventListener("click", () =>{
    let productPrice = document.getElementById("productPrice")?.innerHTML;
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
})


}
    

}
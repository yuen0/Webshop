let addtocart_btn = document.getElementById("productButton");
addtocart_btn.addEventListener("click", function() {
    let productPrice = document.getElementById("productPrice")?.innerHTML;
    let hamburgerSection = document.getElementById("hamburger");
    let span_total = document.createElement("span");
    if (document.getElementById("navTotalSum")) console.log("");
    else {
        hamburgerSection?.appendChild(span_total);
        hamburgerSection?.insertBefore(span_total, hamburgerSection.children[0]);
        span_total.innerText = "Total:" + productPrice;
        span_total.setAttribute("id", "navTotalSum");
    }
});
const products = [
    {
        name: "Butterkaka",
        image: "..images/cake.jpg",
        description: "Mycket fin butterkaka.",
        price: 59,
        id: "product_1"
    },
    {
        name: "Gel\xe9 n\xe5gonting",
        image: "..images/cake.jpg",
        description: "Sp\xe4nnande konsistens f\xf6r alla kulinariska mesar.",
        price: 299,
        id: "product_2"
    },
    {
        name: "An EXTREMELY spicy sauce",
        image: "..images/cake.jpg",
        description: "F\xe5r dina smakl\xf6kar att dansa tango!",
        price: 79,
        id: "product_3"
    },
    {
        name: "I don't even know what this is",
        image: "..images/cake.jpg",
        description: "Smakar verkligen inte gott.",
        price: 59,
        id: "product_4"
    },
    {
        name: "A unique sandwich",
        image: "..images/cake.jpg",
        description: "An idiot-sandwich.",
        price: 59,
        id: "product_5"
    }
];
function renderProducts() {
    const template = `<article class="products__card" id="productCardContainer">
    <article class="products__img">
        <img src="./Assets/product1.jfif" alt="photo of product" />
    </article>
    <article class="products__content">
        <h2 class="products__title" id="product__title"></h2>
        <p class="products__description" id="products__description">
            
        </p>
        <article class="products__price" >
            <p id="productPrice" class="pClass"></p>
        </article>
        <button class="products__button" id="productButton">
            Add to Cart
        </button>
    </article>
</article>`;
    const container = document.querySelector("#productCardContainer");
    for (let product of products){
        let productTitle = document.getElementById("product__title");
        let productDescription = document.getElementById("products__description")?.innerHTML;
        let productPrice = document.getElementById("productPrice")?.innerHTML;
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = template;
        //let productDescription = item.querySelectorAll(".products__description");
        //productDescription as HTMLParagraphElement = product.description
        //document.getElementById("products__description")?.innerHTML = product.description;
        //let test = item.querySelector(".products__description");
        //test = product.description;
        productTitle = product.name;
        productDescription = product.description;
        productPrice = product.price;
        container?.appendChild(item);
    }
}
let cart = {};
function initCart() {
    for (let product of products)cart[product.name] = 0;
}
function renderCart() {}
function increment(name) {
    console.log("Name: " + name);
    cart[name]++;
    renderCart();
}
window.onload = (_)=>{
    renderProducts();
    initCart();
};

//# sourceMappingURL=index.7e05fd7d.js.map

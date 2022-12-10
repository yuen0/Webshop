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

//# sourceMappingURL=index.7e05fd7d.js.map

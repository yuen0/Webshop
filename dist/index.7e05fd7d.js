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
var products = [
    {
        "name": "Aloe Vera",
        "image": "bilder/severin-candrian-dgvFsLfIX9E-unsplash.jpg",
        "origin": "Nederl\xe4nderna",
        "description": "L\xe4ttsk\xf6tt suckulent med tjocka gr\xf6na blad. En av v\xe4rldens \xe4ldsta l\xe4kev\xe4xkter. Trivs p\xe5 soliga platser. L\xe5t den torka ut mellan varje vattning.",
        "height": "120cm",
        "care": "Trivs ljust, men undvik direkt solljus. Vattna undertill och inte p\xe5 v\xe4xten, men l\xe5t jorden torka mellan varje vattning. Ge flytande n\xe4ring fr\xe5n v\xe5r till h\xf6st. Eventuell omplantering ska g\xf6ras p\xe5 v\xe5ren.",
        "price": 59
    },
    {
        "name": "Marmorblad",
        "image": "bilder/severin-candrian-8nONCr6eTeg-unsplash.jpg",
        "origin": "Brasilien",
        "description": "Fin och sp\xe4nnande v\xe4xt med kontrastrika blad med gr\xf6nt m\xf6nster och lila undersida p\xe5 bladen. Denna dekorativa planta passar perfekt i en kruka p\xe5 golvet eller p\xe5 en piedestal eller ett sidobord.",
        "height": "65cm",
        "care": "Ge den lite utrymme s\xe5 att bladen kan str\xe4cka ut sig v\xe4l b\xe5de upp\xe5t och \xe5t sidorna och skapa en gr\xf6n och harmonisk atmosf\xe4r i hemmet. Trivs i ljus och halvskugga, undvik direkt solljus. H\xe5ll jorden l\xe4tt fuktig. Gillar att bli duschad p\xe5 bladen.",
        "price": 299
    },
    {
        "name": "Lyktranka",
        "image": "bilder/severin-candrian-xGpYDi-0348-unsplash.jpg",
        "origin": "Sydafrika, Swaziland och Zimbabwe",
        "description": "\xc4ven k\xe4nd som Hj\xe4rtan p\xe5 tr\xe5d. Lyktrankan \xe4r mycket l\xe4tt att sk\xf6ta och \xe4r en vacker h\xe4ngv\xe4xt med sm\xe5 m\xf6rkgr\xf6na hj\xe4rtformade blad med ett silverskimrande m\xf6nster. Plantan kan bli \xf6ver en meter, vilket g\xf6r den v\xe4l l\xe4mpad som h\xe4ngv\xe4xt eller i en h\xf6g kruka.",
        "height": "15 cm",
        "care": "Trivs ljust, undvik direkt solljus. L\xe5t den torka l\xe4tt mellan vattningarna.",
        "price": 79
    }
];

//# sourceMappingURL=index.7e05fd7d.js.map

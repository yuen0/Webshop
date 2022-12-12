let addtocart_btn = document.getElementById("productButton") as HTMLButtonElement;

addtocart_btn.addEventListener("click", function(){

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
}
)

var products =
[
    {
        "name": "Aloe Vera",
        "image": "bilder/severin-candrian-dgvFsLfIX9E-unsplash.jpg",
        "origin": "Nederländerna",
        "description": "Lättskött suckulent med tjocka gröna blad. En av världens äldsta läkeväxkter. Trivs på soliga platser. Låt den torka ut mellan varje vattning.",
        "height": "120cm",
        "care": "Trivs ljust, men undvik direkt solljus. Vattna undertill och inte på växten, men låt jorden torka mellan varje vattning. Ge flytande näring från vår till höst. Eventuell omplantering ska göras på våren.",
        "price": 59
    },
    {
        "name": "Marmorblad",
        "image": "bilder/severin-candrian-8nONCr6eTeg-unsplash.jpg",
        "origin": "Brasilien",
        "description": "Fin och spännande växt med kontrastrika blad med grönt mönster och lila undersida på bladen. Denna dekorativa planta passar perfekt i en kruka på golvet eller på en piedestal eller ett sidobord.",
        "height": "65cm",
        "care": "Ge den lite utrymme så att bladen kan sträcka ut sig väl både uppåt och åt sidorna och skapa en grön och harmonisk atmosfär i hemmet. Trivs i ljus och halvskugga, undvik direkt solljus. Håll jorden lätt fuktig. Gillar att bli duschad på bladen.",
        "price": 299
    },
    {
        "name": "Lyktranka",
        "image": "bilder/severin-candrian-xGpYDi-0348-unsplash.jpg",
        "origin": "Sydafrika, Swaziland och Zimbabwe",
        "description": "Även känd som Hjärtan på tråd. Lyktrankan är mycket lätt att sköta och är en vacker hängväxt med små mörkgröna hjärtformade blad med ett silverskimrande mönster. Plantan kan bli över en meter, vilket gör den väl lämpad som hängväxt eller i en hög kruka.",
        "height": "15 cm",
        "care": "Trivs ljust, undvik direkt solljus. Låt den torka lätt mellan vattningarna.",
        "price": 79
    }
];



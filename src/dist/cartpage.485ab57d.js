const bars = document.querySelector("#bars");
const close = document.querySelector("#close");
const nav = document.querySelector("#navbar");
if (bars) bars.addEventListener("click", ()=>{
    nav.classList.add("active");
});
if (close) close.addEventListener("click", ()=>{
    nav.classList.remove("active");
});

//# sourceMappingURL=cartpage.485ab57d.js.map

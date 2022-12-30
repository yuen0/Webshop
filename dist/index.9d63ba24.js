const bars = document.querySelector("#bars");
const closing = document.querySelector("#close");
const nav = document.querySelector("#navbar");
if (bars) bars.addEventListener("click", ()=>{
    if (nav) nav.classList.add("active");
});
if (closing) closing.addEventListener("click", ()=>{
    if (nav) nav.classList.remove("active");
});

//# sourceMappingURL=index.9d63ba24.js.map

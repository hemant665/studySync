const scroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
});


let Btn  = document.getElementById("add_to_cart");
Btn.addEventListener("click",() => {
    Btn.innerHTML = "Go to Cart";
})

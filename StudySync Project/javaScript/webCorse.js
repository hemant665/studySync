
const scroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
});


console.log("heyyy");

let btn = document.getElementById("add_to_cart");
btn.addEventListener("click",() => {
    btn.innerHTML = "Go to Cart";
})


let listItem = document.getElementById("add_to_cart");


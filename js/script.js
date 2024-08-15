//js

var allProducts = document.querySelectorAll(".product")
var div1 = document.querySelector("#div1")
var cartButton = document.querySelector("#cartButton")
var cartTotal = document.querySelector("#cartTotal")
var totalPrice = 0;

allProducts.forEach(function (item) {
    item.querySelector("button").onclick = function () {
        totalPrice += +item.getAttribute("price");
        div1.innerHTML += item.querySelector("span").textContent + "+"

        cartTotal.innerHTML = totalPrice + " EGP"
        cartButton.style.display = "flex"
    }
})


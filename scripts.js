const servicesOrderFountainButton = document.getElementById("orderFountainButton");
const list = document.getElementById("cartSection");
let fountainsOrdered = 0;
let shoppingCart = []

servicesOrderFountainButton.addEventListener("click", function() {
    shoppingCart.push("Dark Fountain");
    fountainsOrdered++;
    console.log(`Shopping cart: ${shoppingCart.join(", ")}`);
    const shownCart = document.createElement("li");
    shownCart.textContent = "Dark Fountain";
    list.appendChild(shownCart);
});

const checkoutButton = document.getElementById("checkoutButton");
checkoutButton.addEventListener("click", function() {
    if (shoppingCart.length <= 0) {
        alert("Your cart is empty!")
    }
})
const servicesOrderFountainButton = document.getElementById("orderFountainButton");
let fountainsOrdered = 0;
let shoppingCart = []
servicesOrderFountainButton.addEventListener("click", function() {
    shoppingCart.push("Dark Fountain");
    fountainsOrdered++;
    console.log(`Shopping cart: ${shoppingCart.join(", ")}`);
});
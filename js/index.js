function shippingCost() {
    let orderTotal = Number(document.getElementById("totalOrder").value);
    let isPremium = document.getElementById("isPremium").value === "true"

    if (isPremium || orderTotal > 20) {
        document.getElementById("shippingCost").textContent = "The shipping cost is free"
    }else{
        document.getElementById("shippingCost").textContent = "The shipping cost is $2 dollars"
    }
}
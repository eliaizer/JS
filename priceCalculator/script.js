let appendButton = document.getElementById("appendButton");
let removeAllButton = document.getElementById("removeAllButton");
let removeButton = document.querySelectorAll(".removeButton");
let name = document.getElementById("name");
let price = document.getElementById("price");

let list = document.getElementById("list");

appendButton.addEventListener("click", appendItem);
removeAllButton.addEventListener("click", removeAll);
//removeButton.addEventListener("click", removeItem);

let priceList = JSON.parse(localStorage.getItem("list")) || [];
let div = document.createElement("div");

function appendItem() {
    priceList[priceList.length == 0 ? 0 : priceList.length - 1] = {name: name.value, price: price.value};
    localStorage.setItem("list", JSON.stringify(priceList));
    list.appendChild(div);
    
}

function removeItem() {
    priceList[priceList.length == 0 ? 0 : priceList.length - 1] = null;
    localStorage.setItem("list", JSON.stringify(priceList));
}

function removeAll() {
    localStorage.removeItem("list");
}
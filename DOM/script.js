let divText = document.getElementById("message");
let link = document.getElementById("myLink");
let styleBox = document.getElementById("styleBox");

let translateReplaceButton = document.querySelector("button.translate");
let linkReplaceButton = document.querySelector("button.link");
let styleReplaceButton = document.querySelector("button.style");

translateReplaceButton.addEventListener("click", translateReplaceFunction);
linkReplaceButton.addEventListener("click", linkReplaceFunction);
styleReplaceButton.addEventListener("click", styleReplaceFunction);

function translateReplaceFunction(event) {
    alert(`Вы совершили ${event.type} на элемент ${event.target}.`);
    divText.innerText = "Hello, World!";
}

function linkReplaceFunction(event) {
    alert(`Вы совершили ${event.type} на элемент ${event.target}.`);
    link.href = "https://www.example.com";
    link.innerText = "Открыть Example";
}

function styleReplaceFunction(event) {
    alert(`Вы совершили ${event.type} на элемент ${event.target}.`);
    styleBox.style.color = "blue";
    styleBox.style.fontSize = "24px";
}
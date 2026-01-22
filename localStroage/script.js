let paragraph = document.querySelector("p");
let input = document.querySelector("input");
let yesButton = document.querySelector("button.yes");
let noButton = document.querySelector("button.no");

yesButton.addEventListener("click", clickKeepFunction);
noButton.addEventListener("click", clickUnKeepFunction);

function clickKeepFunction(event) {
    localStorage.setItem("name", `${input.value}`);
}

function clickUnKeepFunction(event) {
    localStorage.removeItem("name");
}

if (localStorage.getItem("countVisit")) {
    let temp = Number(localStorage.getItem("countVisit")) + 1;
    localStorage.setItem("countVisit", `${temp}`)
    if (localStorage.getItem("name")) {
        paragraph.innerHTML = `Ну здарова, ${localStorage.getItem("name")}. Ты сюда уже ${temp} ${temp > 1 && temp < 5 ? "раза" : "раз"} заходил. Я тебя запомнил если-что`;
    }
    else {paragraph.innerHTML = `Добрый день. Вы заходили сюда ${temp} ${temp > 1 && temp < 5 ? "раза" : "раз"}.`;}
}
else {
    localStorage.setItem("countVisit", "0");
}
let divText = document.getElementById("message");
let rouletImage = document.getElementById("rouletImage");
let rouletDeg = 0;

let translateReplaceButton = document.querySelector("button.translate");
let linkReplaceButton = document.querySelector("button.link");
let styleReplaceButton = document.querySelector("button.style");

document.addEventListener("keydown", spaceFunction);
translateReplaceButton.addEventListener("click", translateReplaceFunction);
styleReplaceButton.addEventListener("click", styleReplaceFunction);

function translateReplaceFunction(event) {
    alert(`Вы совершили ${event.type} на элемент ${event.target}.`);
    divText.innerText = "Hello, World!";
}



function spaceFunction(event) {
    let timeRotate;
    if (event.code == "Space" && !timeRotate) {
        alert(`СТАРТУЕМ!!!`);
        event.preventDefault();
        timeRotate = setInterval(() => 
        {
            rouletDeg += 10;
            divText.innerText = `* на ${rouletDeg % 360} градусов!!!`
            rouletImage.style.transform = `rotate(${rouletDeg}deg)`;}, 5);
    }
    else if (event.code == "Space" && timeRotate) {
        timeRotate.clearInterval();
        rouletDeg = 0;
    }
}

function styleReplaceFunction(event) {
    alert(`Вы совершили ${event.type} на элемент ${event.target}.`);
    styleBox.style.color = "blue";
    styleBox.style.fontSize = "24px";
}
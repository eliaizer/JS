let appendButton = document.getElementById("appendButton");
let removeAllButton = document.getElementById("removeAllButton");

let name = document.getElementById("name");
let price = document.getElementById("price");

let list = document.getElementById("list");

appendButton.addEventListener("click", appendItem);
removeAllButton.addEventListener("click", removeAll);

let priceList = JSON.parse(localStorage.getItem("list")) || [];

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    renderList();
});

function appendItem() {
    // Проверка на пустые значения
    if (!name.value.trim() || !price.value) {
        alert("Заполните все поля!");
        return;
    }

    // Добавляем новый товар в массив
    priceList.push({
        name: name.value.trim(),
        price: parseFloat(price.value)
    });

    // Сохраняем в localStorage
    localStorage.setItem("list", JSON.stringify(priceList));

    // Очищаем инпуты
    name.value = "";
    price.value = "";
    name.focus();

    // Обновляем отображение списка
    renderList();
}

function renderList() {
    list.innerHTML = ""; // Очищаем старый список

    // Фильтруем и отображаем товары
    priceList.forEach((item, index) => {
        if (!item) return;

        const itemDiv = document.createElement("div");
        itemDiv.className = "post-block";
        itemDiv.id = "item-" + index;
        itemDiv.style.display = "flex";
        itemDiv.style.justifyContent = "space-between";
        itemDiv.style.alignItems = "center";

        const totalPrice = parseFloat(item.price) || 0;

        itemDiv.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <span style="color: var(--text-light);">₽${totalPrice.toFixed(2)}</span>
            </div>
            <button class="btn-no removeButton" data-index="${index}" type="button">Remove</button>
        `;

        list.appendChild(itemDiv);
    });

    // Отображаем общую сумму если есть товары
    if (priceList.length > 0) {
        const totalSum = priceList.reduce((sum, item) => {
            return sum + (item ? parseFloat(item.price) || 0 : 0);
        }, 0);

        const totalDiv = document.createElement("div");
        totalDiv.className = "post-block";
        totalDiv.style.fontWeight = "bold";
        totalDiv.innerHTML = `<p>Общая сумма: <strong>₽${totalSum.toFixed(2)}</strong></p>`;
        list.appendChild(totalDiv);
    }

    // Добавляем слушателей для кнопок удаления
    document.querySelectorAll(".removeButton").forEach(button => {
        button.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            priceList.splice(index, 1);
            localStorage.setItem("list", JSON.stringify(priceList));
            renderList();
        });
    });
}

function removeAll() {
    priceList = [];
    localStorage.removeItem("list");
    renderList();
}
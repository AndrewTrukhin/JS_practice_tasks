/*Задача 6. Користувач задає кількість магазинів та кількість робочих днів і задає прибуток кожного з магазинів за кожен із днів. 
Підрахувати загальну вартість кожного з магазинів окремо та загальний прибуток усіх магазинів за кожен із днів*/

const createTable = () => { // функція на створення таблиці
    const shopsQtyRows = +document.getElementById('shopsQty').value;
    const daysQtyColumns = +document.getElementById('daysQty').value;

    // рендер першої таблиці вводу даних
    const parentElement = document.getElementById('tableDiv'); // створимо таблицю для введення даних
    const table = document.createElement('table');

    for (let i = 0; i <= shopsQtyRows; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        tr.setAttribute(`id`, `row${i}`); // кожному рядку присвоїмо ID для пошуку клітинок та сумування їх значень

        for (let j = 0; j <= daysQtyColumns; j++) {
            let td;

            if (i === 0 && j === 0) {
                td = document.createElement('td')
                tr.appendChild(td);
                td.textContent = `№`
            }
            else if (i === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = `Sum for day №${j}`;
            }
            else if (j === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = `Shop №${i}`;
            }
            else {
                td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = `<input type="text" class="tdInput" id="tdInput${j}${i}">` // вставляємо в клітинки інпути для вводу та присвоюємо ID для обробки
            }
        }
    }
    parentElement.appendChild(table);
}

const deleteTable = () => { //функція на видалення таблиці
    const parentElement = document.getElementById('tableDiv');
    if (parentElement.childNodes.length > 2) {  // оскільки параграф та кнопка також дочірні, то в колекції childNodes, то повинно залишитись 2 дочірніх елемента для припинення видалення
        parentElement.removeChild(parentElement.lastChild);
    }
}

const getTotalPerShop = () => { // функція на створення таблиці та виводу доходу за усі дні
    // рендер другої таблиці виводу результату
    const shopsQtyRows = +document.getElementById('shopsQty').value;
    const columnsQty = 2; // в останній таблиці буде лише 2 колонки: з номером магазину та з сумою
    const parentForTotal = document.getElementById('lastDiv');
    const tableForTotal = document.createElement('table');

    for (let i = 0; i <= shopsQtyRows; i++) {
        let tr = document.createElement('tr');
        tableForTotal.appendChild(tr);

        for (let j = 0; j < columnsQty; j++) {
            let td;

            if (i === 0 && j === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = '$';
            }
            else if (i === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = 'Total sum for all days';
            }
            else if (j === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = `Shop №${i}`;
            }
            else {
                parseFloat(td = document.createElement('td'));
                tr.appendChild(td);
                td.innerHTML = `<input type="text" class="tdInputSum" id="${i}">`;
            }
        }
    }
    parentForTotal.appendChild(tableForTotal);

    //обрахування результату введених значень
    for (let i = 0; i < shopsQtyRows; i++) {  // необхідно пройти циклом по кожному рядку
        let sum = 0; // це буде сума усіх клітинок
        const row = document.getElementById(`row${i + 1}`); // запишу у змінну доступ до рядка (починаємо з другого)
        const cells = row.getElementsByTagName('input');  // запишу у змінну доступ до усіх клітинок рядка

        for (const cell of cells) {
            sum += parseFloat(cell.value); // таким чином знаходимо суму значень усіх клітинок
        }

        document.getElementById(`${i + 1}`).value = (sum).toFixed(2); // запишемо суму усіх клітинок в клітинку нової таблиці
    }
}


const getTotalPerDay = () => { // // функція на створення таблиці та виводу доходу за кожен день по усім магазинам

    // рендер другої таблиці виводу результату
    const daysQtyRows = +document.getElementById('daysQty').value;
    const shopsQty = +document.getElementById('shopsQty').value
    const totalPerDayColumns = 2;
    const parentElement = document.getElementById('lastDiv')
    const tableForTotalShops = document.createElement('table');

    for (let i = 0; i <= daysQtyRows; i++) {
        tr = document.createElement('tr');
        tableForTotalShops.appendChild(tr);

        for (let j = 0; j < totalPerDayColumns; j++) {
            let td;
            if (i === 0 && j === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = '$';
            }
            else if (i === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = `Total sum for all shops`;
            }
            else if (j === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = `Day №${i}`;
            }
            else {
                td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = `<input type="text" class="tdInputSum" id="td${i}">`;
            }
        }
    }
    parentElement.appendChild(tableForTotalShops);

    // обрахування результату введених значень
    for (let i = 0; i < daysQtyRows; i++) {
        let sum = 0;

        for (let j = 0; j < shopsQty; j++) {
            const value = document.getElementById(`tdInput${i + 1}${j + 1}`).value; // знаходимо кожну клітинку по ID
            sum += parseFloat(value);
        }
        document.getElementById(`td${i + 1}`).value = sum.toFixed(2);
    }
}
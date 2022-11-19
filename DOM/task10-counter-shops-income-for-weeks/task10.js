// Задача 10. Знайти сумарну виручку від діяльності магазину протягом вказаної кількості тижнів (кожного тижня працює 5 днів).

const createTable = () => {
    const weeksQty = document.getElementById('weeksQty').value;
    const daysPerWeek = 5;
    //створимо div та присвоїмо йому атрибути
    const div = document.createElement('div');
    const parentForDiv = document.querySelector('body');
    parentForDiv.append(div);
    div.className = 'div';
    div.id = 'tableDiv';
    //створимо таблицю всередині div
    const table = document.createElement('table');
    const parentForTable = document.getElementById('tableDiv');
    for (let i = 0; i <= weeksQty; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j <= daysPerWeek; j++) {
            let td;
            if (i === 0 && j === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
            }
            else if (i === 0) {
                const th = document.createElement('th');
                tr.appendChild(th);
                const thText = document.createTextNode(`Day №${j}`);
                th.appendChild(thText);
            }
            else if (j === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                const tdText = document.createTextNode(`Week №${i}`);
                td.appendChild(tdText);
            }
            else {
                td = document.createElement('td');
                tr.appendChild(td);
                const input = document.createElement('input');
                td.appendChild(input);
                td.innerHTML = `<input type="number" class="tdInput" id="${i - 1}${j}">`;
            }
        }
        parentForTable.appendChild(table);
    }
    //створимо поле виводу результату та кнопку для обрахунку
    const inputResultField = document.createElement('input');
    div.appendChild(inputResultField);
    inputResultField.type = 'number';
    inputResultField.className = 'input';
    inputResultField.id = 'result';
    inputResultField.style.margin = '10px';

    const buttonResult = document.createElement('input');
    div.appendChild(buttonResult);
    buttonResult.type = 'button';
    buttonResult.className = 'button';
    buttonResult.value = 'Calculate';
    buttonResult.id = 'resultButton';
    buttonResult.onclick = getTotalSum;

    //створимо кнопку видалення таблиці
    const deleteButton = document.createElement('input');
    parentForTable.appendChild(deleteButton);
    deleteButton.type = 'button';
    deleteButton.className = 'button';
    deleteButton.value = 'Delete table(s)';
    deleteButton.id = 'deleteButton';
    deleteButton.style.margin = '10px';
    deleteButton.onclick = deleteTable;

}

const getTotalSum = () => { // функція на обрахування результату (методом reduce)
    const inputElements = document.getElementsByClassName('tdInput');
    let totalSum = document.getElementById('result');
    let sum = Array.from(inputElements).reduce((inputSum, input) => inputSum + parseFloat(input.value), 0); // довелося підгуглити, не міг я зрозуміти як колекцію в масив перетворити (((
    totalSum.value = (sum).toFixed(2);
}

const deleteTable = () => { // функція на видалення таблиці
    const tableDiv = document.querySelector('#tableDiv');
    tableDiv.remove()
}
// Задача 9. Знайти середню оцінку учня. Кількість та оцінки вводяться користувачем (використати таблицю з компонентами input).

// функція на створення таблиці, інпута та кнопки обрахунку
const createTable = () => { 
    const marksQty = document.querySelector('#marksQty').value;
    // створимо батьківський елемент та задамо йому необхідні атрибути
    const div = document.createElement('div');
    const parentForDiv = document.querySelector('body');
    parentForDiv.appendChild(div);
    div.id = 'tableDiv';
    div.className = 'div';
    // створимо таблицю
    const table = document.createElement('table');
    const parentForTable = document.querySelector('#tableDiv');
    const tableRowsQty = 2;

    for (let i = 0; i < tableRowsQty; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < marksQty; j++) {
            let td;
            if (i === 0) {
                th = document.createElement('th');
                tr.appendChild(th);
                const headCellName = document.createTextNode(`Mark №${j + 1}`);
                th.appendChild(headCellName);
            }
            else {
                td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = `<input type="number" class="tdInput" id="td${j + 1}" min="1" max="12">`;
            }
        }
    }
    parentForTable.appendChild(table);
    // створимо під таблицею поле вводу та присвоєння атрибутів
    const input = document.createElement('input');
    parentForTable.appendChild(input);
    input.type = 'number';
    input.className = 'input'
    input.id = 'result';
    input.style.margin = '10px'
    // створимо під таблицею кнопку обрахування результату та присвоєння атрибутів
    const button = document.createElement('input');
    parentForTable.appendChild(button);
    button.type = 'button';
    button.className = 'button';
    button.value = 'Average';
    button.id = 'average';
    button.onclick = getAverage;
}

const deleteTable = () => { //функція на видалення таблиці
    let table = document.getElementsByTagName('table');

    for (i = table.length - 1; i >= 0; i--) {
        table[i].parentNode.removeChild(table[i]);
    }
}

const getAverage = () => { // функція на обрахування середньої оцінки
    let marksSum = 0;
    let marksQty = +document.querySelector('#marksQty').value;

    for (let i = 0; i < marksQty; i++) {
        const markValue = +document.getElementById(`td${i + 1}`).value;
        marksSum += markValue;
    }
    const average = (marksSum / marksQty).toFixed(1);
    document.getElementById('result').value = average;
}
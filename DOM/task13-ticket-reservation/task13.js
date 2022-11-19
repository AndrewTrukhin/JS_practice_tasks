/* Задача 13. Бронювання квитків. Два випадаючих списки: у першому списку задається місто відправлення (задайте якісь 5 міст), 
у другому – міста призначення (задайте якісь 5 міст), у третьому елементі (введення числа) задається кількість квитків. 
Нажимаючи на кнопку «Бронювати» у таблиці з’являється новий рядок з інформацією про місто відправлення, місто призначення, кількість.*/

// доступ до елементів
const departureList = document.getElementsByClassName('departureOption')
const destinationList = document.getElementsByClassName('destinationOption');
const ticketsQty = document.getElementById('ticketsQty');
const button = document.getElementById('reserve');
const divForTable = document.getElementById('tableDiv');

// створимо таблицю
const rowsQty = 1;
const columnsQty = 4;
const table = document.createElement('table');

for (let i = 0; i < rowsQty; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);

    for (let j = 0; j < columnsQty; j++) {
        if (i === 0 && j === 0) {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.className = 'td';
            td.textContent = '';
            td.style.width = '50px';
        }
        else if (i === 0 && j === 1) {
            const th = document.createElement('th');
            tr.appendChild(th);
            th.textContent = 'From';
        }
        else if (i === 0 && j === 2) {
            const th = document.createElement('th');
            tr.appendChild(th);
            th.textContent = 'To';
        }
        else if (i === 0 && j === 3) {
            const th = document.createElement('th');
            tr.appendChild(th);
            th.textContent = 'Tickets quantity';
        }
    }
    divForTable.appendChild(table);
}

// при натисканні кнопки таблиця доповнюється
let incrementor = 0;
button.addEventListener('click', (e) => {
    incrementor++;  // допоміжна змінна для нумерації рядків при кожному натисканні кнопки
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let i = 0; i < rowsQty; i++) {
        let td;

        for (let j = 0; j < columnsQty; j++) {
            if (i === 0 && j === 0) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = `${incrementor}`;
            }
            else if (j === 1) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.id = `${incrementor}${j}`
                for (const departurePlace of departureList) {
                    if (departurePlace.selected) {
                        document.getElementById(`${incrementor}${j}`).textContent = departurePlace.value;
                        break
                    }
                }
            }
            else if (j === 2) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.id = `${incrementor}${j}`
                for (const destinationPlace of destinationList) {
                    if (destinationPlace.selected) {
                        document.getElementById(`${incrementor}${j}`).textContent = destinationPlace.value;
                        break
                    }
                }
            }
            else if (j === 3) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.id = `${incrementor}${j}`
                document.getElementById(`${incrementor}${j}`).textContent = ticketsQty.value;
            }
        }
    }
})
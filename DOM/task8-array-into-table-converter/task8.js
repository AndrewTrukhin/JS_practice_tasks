// Задача 8. Відобразити одновимірний масив за допомогою таблиці

const convertArrIntoTable = () => {
    const elementsArr = document.querySelector('#array').value; // отримаємо значення інпута
    const extractedElements = elementsArr.split(','); // переформатуємо отриману стрінгу в масив
    const rowsQty = 2;
    const parentElement = document.querySelector('#tableDiv');
    const table = document.createElement('table');

    for (let i = 0; i < rowsQty; i++) {
        const tr = document.createElement('tr')
        table.appendChild(tr);

        for (let j = 0; j < extractedElements.length; j++) {
            let td;
            if (i === 0) {
                th = document.createElement('th');
                tr.appendChild(th);
                const thText = document.createTextNode(`${j + 1}`);
                th.appendChild(thText);
            }
            else {
                td = document.createElement('td');
                tr.appendChild(td);
                const tdText = document.createTextNode(`${extractedElements[j]}`);
                td.appendChild(tdText);
            }
        }
    }
    parentElement.appendChild(table);
}
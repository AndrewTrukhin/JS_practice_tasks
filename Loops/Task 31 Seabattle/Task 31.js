/*31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корамель на полі 5*5. З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. 
Спробуйте відоразити гру графічно.*/

// Таблична візуалізація поля

let rowQty = parseInt(prompt('Enter rows quantity', '1'));
let columnQty = parseInt(prompt('Enter columns quantity', '1'));

document.write('<table>');

for (let j = 0; j <= rowQty; j++) { // рядки з введеної користувачем кількості
    document.write('<tr>');
    for (let k = 0; k <= columnQty; k++) {

        if (j === 0 && k === 0) { 
            document.write(`<td>№</td>`); // Якщо перший рядок ТА якщо перша колонка
        }

        else if (k === 0) {
            document.write(`<td>${j}</td>`); // перша колонка з нумерацією
        }

        else if (j === 0) {
            document.write(`<td>${k}</td>`); // перший рядок з нумерацією
        }
        else {
            document.write(`<td id=${j + 1}${k + 1}></td>`); // всі інші клітинки
        }
    }
    document.write('</tr>');
}
document.write('</table>')

/*

// Таблична візуалізація поля

let rowQty = parseInt(prompt('Enter rows quantity', '1')); // оголошуємо кількість колонок
let columnQty = parseInt(prompt('Enter columns quantity', '1')); // оголошуємо кількість рядків

document.write('<table>'); // створюємо таблицю

document.write('<tr>') // оголошуємо рядок, який огортає заголовок

for (let i = 0; i < columnQty + 1; i++) { // робим цикл з кількості колонок, які введе користувач
    document.write(`<td id=${'c' + i}> ${i}</td>`); // додаю нумерацію колонок
    let cornerCell = document.getElementById('c0'); // кутова клітинка має бути пуста
    cornerCell.textContent = ''; // &nbps; чомусь не спрацьовує, тому ставлю пусту строку
}

document.write('</tr>');

for (let j = 0; j < rowQty; j++) { // рядки з введеної користувачем кількості
    document.write('<tr>')
    document.write(`<td>${j + 1}</td><br>`);
    for (let k = 0; k < columnQty; k++) {
        document.write(`<td id=${j + 1}${k + 1}></td>`) // клітинка задаємо id з цифр рядків та колонок
    }
    document.write('</tr>');
}

document.write('</table>')*/
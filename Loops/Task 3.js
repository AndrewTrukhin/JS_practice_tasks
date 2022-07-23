/*Задача 3. Вивести на екран таблицю
-------
| | | |
-------
| | | |
-------
| | | |
-------*/

let smallLine = 7;
let slashLine = 4;
let rowQuantity = 4;
let repeatLoopQuantity = 3;

document.write('<pre>');

for (let i = 0; i < repeatLoopQuantity; i++) {
    for (let j = 0; j < smallLine; j++) {
        document.write('-');
    }
    document.write('<br>');

    for (let k = 0; k < slashLine; k++) {
        document.write('| ');
    }
    document.write('<br>');
}

for (let i = 0; i < smallLine; i++) {
    document.write('-');
}

document.write('</pre>');
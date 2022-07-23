//Задача 12. Створити таблицю 3*4 з використанням відповідних табличних тегів.

let coulumnCount = 5;
let cellCount = 5;
let rowCount = 3;

document.write('<table border=black>'); // показуємо, що це таблиця та візуалізуємо границі

document.write('<tr>'); // показуємо що це буде рядок

for (let i = 0; i < coulumnCount; i++) { //даємо в ряд три заголовка
    document.write('<th>Перший ряд (Заголовок)</th>');
}
document.write('</tr>');

for (let j = 0; j < rowCount; j++) {   // зациклюємо три ряди по три клітинки
    document.write('<tr>');
    for (let k = 0; k < cellCount; k++) {
        document.write('<td>Клітинка</td>');
    }
    document.write('</tr>');
}

document.write('</table>')
//Задача 7. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців

const createTable = (row, column) => { // описуємо
    document.write('<table border="black">')
    document.write('<tr>')
    for (let i = 0; i <= row; i++) {
        document.write('</tr>');
        for (let j = 0; j < column; j++) {
            if (i === 0) {
                document.write('<th>head</th>');
            }
            else {
                document.write('<td>cell</td>')
            }
        }
    }
    document.write('</table>')
}
const rowsQty = parseInt(prompt('Enter number of rows to create a table')); // вводимо
const columnsQty = parseInt(prompt('Enter number of columns to create a table')); // вводимо
createTable(rowsQty, columnsQty); // викликаємо

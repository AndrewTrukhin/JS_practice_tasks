/*33. Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). 
При влучанні броня танка пошкоджується на 30 балів (всього 100). 
Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.*/

// Графічна візуалізація поля

const fieldLenght = parseInt(prompt('Enter lenght of the line where tank can move', '10'));
const rowsCount = 2;

document.write('<table>');

for (let i = 0; i < rowsCount; i++) {
    document.write('<tr>');
    for (let j = 0; j < fieldLenght; j++) {
        if (i === 0) {
            document.write(`<th>${j + 1}</th>`)
        }
        else {
            document.write(`<td id="${j + 1}"></td>`);
        }
    }
    document.write('</tr>');
}

document.write('</table>');
// Задача 14. Дано числовий масив розмірності N. Знайти кількість елементі, що більші за перший.


const array = [1, 2, 1, 3, 5, 9, 7, 8, 5, 7];
const firstArrIndex = array[0];
let biggerThanFirstNumQty = 0;


for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > firstArrIndex) {
        biggerThanFirstNumQty++;
    }
}
console.log(biggerThanFirstNumQty);
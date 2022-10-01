// Задача 12. Дано числовий масив розмірності N. Знайти кількість його локальних максимумів.

const array = [1, 2, 1, 3, 5, 9, 7, 8, 5, 7];
let localMaxQty = 0;

for (let i = 1; i < array.length - 1; i++) {
    console.log(`iter i:${i} ---- ${array[i + 1]}`)
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
        localMaxQty++;
    }
}
console.log(localMaxQty);
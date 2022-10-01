/* Задача 8. Дано числовий масив розмірності N. Знайти кількість його локальних мінімумів. 
Локальним мінімумом називається елемент, значення якого менше від сусідів*/


const numsArray = [4, 4, 4, 1, 2, 3, 4, 5, 3, 4];
let localMinimumQty = 0;

for (let i = 1; i < numsArray.length; i++) {
    if (numsArray[i] < numsArray[i - 1] && numsArray[i] < numsArray[i + 1]) {
        localMinimumQty++
    }
}
console.log(localMinimumQty)
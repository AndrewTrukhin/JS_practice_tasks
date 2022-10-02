/* Задача 16. Дано одновимірний масив. Кожен елемент
1)піднести до квадрату;
2)помножити на 7;
3)поділити на 10.
Використати функції.*/

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplier = 7;
const divider = 10;

const getNumSquared = (arr) => arr.map(item => item * item);
const squaredNumsArr = getNumSquared(numsArr);
console.log(squaredNumsArr);

const getNumProduct = (arr, multiplier) => arr.map(item => item * multiplier);
const numsProductArr = getNumProduct(numsArr, multiplier);
console.log(numsProductArr);

const getNumShare = (arr, divider) => arr.map(item => item / divider);
const numsShareArr = getNumShare(numsArr, divider);
console.log(numsShareArr);
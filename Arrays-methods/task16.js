/* Задача 16. Дано одновимірний масив. Кожен елемент
1)піднести до квадрату;
2)помножити на 7;
3)поділити на 10.
Використати функції.*/

/*const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplier = 7;
const divider = 10;

const getNumPaw = (item) => item * item;

const getNumProduct = (item) => item * multiplier;

const getNumShare = (item) => item / divider;

const numPawArr = numsArr.map(getNumPaw);
console.log(numPawArr);

const numShare = numsArr.map(getNumProduct);
console.log(numProduct);

const numShare = numsArr.map(getNumShare);
console.log(numShare);*/

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplier = 7;
const divider = 10;

const getNumPaw = (startArray) => {
    startArray.map(item => item * item);
}
const numPawArr = getNumPaw(numsArr);
console.log(numPawArr);

const getNumProduct = (startArray, multipl) => {
    startArray.map(item => item * multipl);
}
const numProductArr = getNumProduct(numsArr, multiplier);
console.log(numProductArr);

const getNumShare = (startArray, divide) => {
    startArray.map(item => item / divide);
}
const numShareArr = getNumShare(numsArr, divider);
console.log(numShareArr);


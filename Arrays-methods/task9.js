// Задача 9. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.

const numsArr = [1, 2, 3, 4, 5];
const numsMultiplication = numsArr.reduce((total, element) => total *= element);
console.log(numsMultiplication);
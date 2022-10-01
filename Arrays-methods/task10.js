// Задача 10. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.

const numsArr = [999, 2, 3, 99, 5, 6, 7, 8, 10, 101];

const getMaxNum = numsArr.reduce((previousValue, currentValue) => {
    return Math.max(previousValue, currentValue);
});
console.log(getMaxNum);
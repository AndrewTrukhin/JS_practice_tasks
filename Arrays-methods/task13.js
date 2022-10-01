// Задача 13. Скласти скрипт, що формує новий масив збільшуючи кожен елемент масиву на його індекс

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumsArr = numsArr.map((element, index) => element + index);
console.log(newNumsArr);
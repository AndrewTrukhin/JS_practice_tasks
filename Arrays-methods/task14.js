// Задача 14. Скласти скрипт для знаходження суми всіх елементів та кількості додатних елементів в масиві

const numsArr = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let positiveNumsQty = 0;

let totalSum = numsArr.reduce((total, currentValue) => {

    if (currentValue > 0) {
        positiveNumsQty++;
    }
    return total + currentValue
});
console.log(`Sum of all elements: ${totalSum}\nPositive elements quantity: ${positiveNumsQty}`);
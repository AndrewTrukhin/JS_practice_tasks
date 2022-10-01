/*Задача 1. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
1)	першу половину року;
2)	другу половину року;
3)	за літо;
4)	за ІІ квартал.*/

const paymentQty = 12;
let paymentAmount = [];
const monthPerHalfYear = 6;
let firstHalfYearSum = 0;
let secondHalfYearSum = 0;
let summerSum = 0;
let secondQuarter = 0;

for (let i = 0; i < paymentQty; i++) {                                                      // одразу задаю кількість циклів - 12
    paymentAmount[i] = parseFloat(prompt('Enter the sum for each month payment', 0));       // задаю номер введеному елементу масиву та записую туди введене число

    if (i < monthPerHalfYear) {                 // знаходження суми за першу половину року
        firstHalfYearSum += paymentAmount[i];
    }

    else {                                      // знаходження суми за другу половину року
        secondHalfYearSum += paymentAmount[i];
    }

    if (i >= 5 && i <= 7) {                     // знаходження суми за літо
        summerSum += paymentAmount[i]
    }

    if (i >= 3 && i <= 5) {                     // знаходження суми за ІІ квартал
        secondQuarter += paymentAmount[i];
    }
}
console.log(`The sum is to be paid for the first half of the year is: ${firstHalfYearSum.toFixed(2)}`);
console.log(`The sum is to be paid for the second half of the year is: ${secondHalfYearSum.toFixed(2)}`);
console.log(`The sum is to be paid for summer season is: ${summerSum.toFixed(2)}`);
console.log(`The sum is to be paid for the second quarter is: ${secondQuarter.toFixed(2)}`);
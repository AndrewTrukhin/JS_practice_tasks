/*З клавіатури вводиться номер місяця. Визначити, який буде місяць через вказану кількість N місяців. */

const monthNum = parseInt(prompt('Enter number of the month'));

const monthQty = parseInt(prompt('Enter quantity of the months'));

const monthSum = monthNum + monthQty;

const findMonthNumber = (monthSum - 1) % 12 + 1;

alert(`It will be month number ${findMonthNumber}`);
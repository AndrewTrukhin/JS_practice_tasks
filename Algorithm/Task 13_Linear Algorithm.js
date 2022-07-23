//З клавіатури вводиться номер дня тижня (від 1 до 7). Визначити який буде день тижня через N днів.

const dayOfWeekNumber = parseInt(prompt('Enter the number of the day of the week'));

const dayOfWeekQty = parseInt(prompt('Enter quantity of days'));

const sumOfDays = dayOfWeekNumber + dayOfWeekQty;

const findDayNumer = (sumOfDays - 1) % 7 + 1;

alert(`It will be a day number ${findDayNumer}`);
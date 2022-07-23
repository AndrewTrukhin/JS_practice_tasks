//Визначити скільки повних тижнів є у вказаній кількості днів

const daysQty = parseInt(prompt('Enter quantity of days to define how many full weeks they have'));

const daysInWeek = 7;

const findFullWeek = Math.floor(daysQty / daysInWeek);

alert(`This quantity has ${findFullWeek} full week(s)`);
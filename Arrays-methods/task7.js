// Задача 7. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.

const visitorsPerDay = [25, 30, 35, 40, 45, 20, 9];
const visitorsMinQty = 10;
const isVisitorsMinQty = visitorsPerDay.some(visitorsQty => visitorsQty < 10);
console.log('There is a day when visitors less than 10:', isVisitorsMinQty);
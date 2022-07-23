/*З клавіатури вводиться кількість місяців, які пройшли від деякого моменту часу. 
Вивести повну кількість років і місяців. Наприклад, дано 28 місяців, а вивести 2 роки і 4 місяці.*/

const monthQty = parseInt(prompt('Enter months  quatity that passed'));

const findYears = Math.floor(monthQty / 12);

const findMonth = monthQty % 12; 

alert(`${findYears} year(s) ${findMonth} month(s)`);
/*Визначити, яку платню одержить на фірмі сумісник за виконану роботу, 
якщо йому нараховано S грн., а податок становить 20%*/

const income = prompt('Enter amount of the income');

const tax = 20;

const incomeAfterTaxes = income - (income * 20 / 100);

alert(`Here is your income when taxes payed = ${incomeAfterTaxes.toFixed(2)}`);
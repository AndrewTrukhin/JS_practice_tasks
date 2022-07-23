/*З клавіатури вводиться розмір заробітної плати та розмір прожиткового мінімуму. 
Визначити розмір соціальної допомоги (ввжаємо, що заробітна плата є меншою)*/

const salaryAmount = prompt('Enter your amount of the salary');

const substistenseMinimum = prompt('Enter amount of substistense minimum');

const socialSupportAmount = substistenseMinimum - salaryAmount;

alert(`You have a right to receive social support in amount  ${socialSupportAmount.toFixed(2)}`);
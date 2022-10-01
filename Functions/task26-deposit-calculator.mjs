/*26. Відома відсоткова ставка по депозиту. Скласти підпрограму для визначення суми, що отримає користувач через n років, в залежності від суми вкладу. 
Відсотки нараховуються щомісяця на всю суму на рахунку, в тому числі і на раніше нараховані відсотки.*/

import { calcPercentPerMonth, calcTotalDepositIncome, getdepositPeriodMonths } from "./helpers/mathAlgebrFormulas.mjs";


const depositAmount = 1000;
const depositRate = 20;
let depositPeriodYears = 7;
const monthPerYear = 12;

do {
    depositPeriodYears = 7
    const isInteger = Number.isInteger(depositPeriodYears); // Перевірка чи введені роки це ціле число
    if (isInteger) {
        break
    }
    else {
        console.log('You entered incorrect number! Please, enter an integer for correct calculation!');
    }
} while (true)

const depositPeriodMonths = getdepositPeriodMonths(depositPeriodYears, monthPerYear); // Викликаю функцію, яка знайде кількість місяців та запишемо у змінну

const percentPerMonth = calcPercentPerMonth(depositRate, monthPerYear); // Викликаю функцію, яка знайде відсоток за місяць та запишемо у змінну

const totalDepositIncome = calcTotalDepositIncome(depositAmount, percentPerMonth, depositPeriodMonths); // Викликаю функцію, яка знайде дохід від депозиту за усі місяці
console.log(`In ${depositPeriodYears} years you will get deposit sum: ${totalDepositIncome}`);
// /*Задача 13 . Обчислити значення виразу
// S = max {a, -b, 3} * max {a, 2b, c} – max {-a,b,7} 


let a = parseInt(prompt('Enter a number for "a" in formula')); //змінна для всіх частин формули
let b = parseInt(prompt('Enter a number for "b" in formula')); //змінна для всіх частин формули
let c = parseInt(prompt('Enter a number for "c" in formula')); //змінна для всіх частин формули
const additionalVar1 = 3; // змінна під цифрою "3" у першій частині формули
const additionalVar2 = 2 * b; // змінна під виразом "2"b у другій частині формули // ЦЕ МОЖНА ОДРАЗУ В ФОРМУЛІ, АЛЕ ЛАДНО
const additionalVar3 = 7; // змінна під цифрою "7" у третій частині формули



const getMaxNumber = (var1, var2, var3) => { // описую функцію, яка знайде найбільше число у першій частині
    let biggestNumber = var1; // змінна в яку записую найбільше 
    if (var2 > biggestNumber) biggestNumber = var2;
    if (var3 > biggestNumber) biggestNumber = var3;
    return biggestNumber;
}
const maxNumber1 = getMaxNumber(a, -b, additionalVar1); // виклик вперше
const maxNumber2 = getMaxNumber(a, additionalVar2, c); // виклик вдруге
const maxNumber3 = getMaxNumber(-a, b, additionalVar3); // виклик втретє



const calcFormula = (maxNum1, maxNum2, maxNum3) => maxNum1 * maxNum2 - maxNum3;
console.log(calcFormula(maxNumber1, maxNumber2, maxNumber3));
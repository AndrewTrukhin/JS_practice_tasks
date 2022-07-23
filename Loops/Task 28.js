/*Задача 28. З клавіатури вводяться поступово числа. Знайти два найбільші числа. 
Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.*/

let currentNumber;
let firstBiggestNumber = -Infinity;
let secondBiggestNumber = 0;
let maxDifference = 5;
let isBiggestNumbersDifference;

do {
    currentNumber = parseInt(prompt('Enter some integer numbers'));
    if (currentNumber > firstBiggestNumber) {
        secondBiggestNumber = firstBiggestNumber;
        firstBiggestNumber = currentNumber;
    }
    else if (currentNumber > secondBiggestNumber) {
        secondBiggestNumber = currentNumber;
    }
    
    isBiggestNumbersDifference = (Math.abs(firstBiggestNumber - secondBiggestNumber)) > maxDifference;
} while (isBiggestNumbersDifference)

alert(`The biggest entered numbers are: ${firstBiggestNumber} and ${secondBiggestNumber}`)
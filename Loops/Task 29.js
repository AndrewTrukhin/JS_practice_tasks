/*29. З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.*/

let currentNumber;
let firstSmallestNumber = +Infinity;
let secondSmallestNumber = 0;
let maxDifference = 5;
let isSmallestNumbersDifference;

do {
    currentNumber = parseInt(prompt('Enter some integer numbers'));
    if (currentNumber < firstSmallestNumber) {
        secondSmallestNumber = firstSmallestNumber;
        firstSmallestNumber = currentNumber;
    }
    else if (currentNumber < secondSmallestNumber) {
        secondSmallestNumber = currentNumber;
    }

    isSmallestNumbersDifference = (Math.abs(firstSmallestNumber - secondSmallestNumber)) > maxDifference;
} while (isSmallestNumbersDifference)

alert(`The smallest entered numbers are: ${firstSmallestNumber} and ${secondSmallestNumber}`)
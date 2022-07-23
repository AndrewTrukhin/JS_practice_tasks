/*14. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.*/

// Варіант вирішення з DO WHILE 

let currentNumber;
let numbersSum = 0;

do {
    currentNumber = parseInt(prompt('Enter integer numbers. The process will be over when you enter "0"'));
    numbersSum += currentNumber;
} while (currentNumber !== 0)

document.write(`The sum of all entered numbers is: ${numbersSum}`);

// Варіант вирішення з WHILE 

/*let currentNumber = parseInt(prompt('Enter integer numbers. The process will be over when you enter "0"'));
let numbersSum = 0;

while (currentNumber !== 0) {
    numbersSum += currentNumber
    currentNumber = parseInt(prompt('Enter integer numbers. The process will be over when you enter "0"'));
}

document.write(`The sum of all entered numbers is: ${numbersSum}`)*/
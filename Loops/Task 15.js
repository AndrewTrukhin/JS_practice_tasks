//15. З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.

let currentNumber;
let numbersMultiplication = 0;

while (currentNumber !== 0) {

    if (numbersMultiplication === 0) {
        numbersMultiplication = 1;
    }
    else {
        numbersMultiplication *= currentNumber;
    }
    
    currentNumber = parseInt(prompt('Enter integer numbers. The process will be over when you enter "0"'));
}

document.write(`The multiplication of all entered numbers is: ${numbersMultiplication}`);
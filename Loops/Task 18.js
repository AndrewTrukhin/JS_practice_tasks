//Задача 18. З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.

let evenNumberSum = 0;
let currentNumber;
let evenNumbersQty = parseInt(prompt('Enter quantity of even numbers to find it`s sum'));
let currentEvenNumbersQty = 0;

while (evenNumbersQty !== currentEvenNumbersQty) {
    currentNumber = parseInt(prompt('Enter numbers to find sum of even numbers'));

    if (currentNumber % 2 === 0) {
        currentEvenNumbersQty++;
        evenNumberSum += currentNumber
    }
}

document.write(`The sum of even numbers is: ${evenNumberSum}`);


// Варіант з мінусом

/*let evenNumberSum = 0;
let currentNumber;
let evenNumbersQty = parseInt(prompt('Enter quantity of even numbers to find it`s sum'));

while (evenNumbersQty !== 0) {
    currentNumber = parseInt(prompt('Enter numbers to find sum of even numbers'));

    if (currentNumber % 2 === 0) {
        evenNumbersQty--;
        evenNumberSum += currentNumber
    }
}

document.write(`The sum of even numbers is: ${evenNumberSum}`);*/